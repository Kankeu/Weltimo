<template>
    <v-dialog v-model="dialog" :width="$vuetify.breakpoint.smAndUp ? '50%' : '100%'">
        <v-card>
            <v-card-title class="headline">Edit your request</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-layout column>
                    <v-flex lg12>
                        <v-layout column>
                            <v-flex>
                                <v-select
                                        v-model="select"
                                        label="Offers"
                                        chips
                                        tags
                                        style="min-height: 55px;"
                                        :items="items"
                                ></v-select>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex lg12>
                        <v-btn color="primary" @click="save" style="margin-left: 0">
                            Save
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-snackbar
                    :timeout="6000"
                    top
                    right
                    v-model="snackbar"
            >
                Your request has been successfully updated!
                <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
            </v-snackbar>
        </v-card>
    </v-dialog>
</template>

<script>
    export default{
        props:{
            open: Boolean,
            boxmessage: Object
        },
        data: ()=>({
            dialog: false,
            select: null,
            items: [
                "Room reservation",
                "Pre-registration",
                "Registration",
                "Lease agreement"
            ],
            snackbar: false
        }),
        methods:{
            save(){
                this.$http.put('/user/request/'+this.boxmessage.id, {offer:this.select.join(', ')}).then(response=>{
                    if(response.body.id){
                        this.snackbar = true
                        this.$store.dispatch('boxmessage/save', response.body)
                    }
                })
            }
        },
        watch:{
            open(data){
                if(data){
                    this.dialog = true
                    this.select = this.boxmessage.offer.split(', ')
                }
            },
            dialog(data){
                if(!data) this.$emit('close')
            }
        }
    }
</script>

