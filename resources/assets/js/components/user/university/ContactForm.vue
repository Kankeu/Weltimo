<template>
    <v-card class="elevation-10" :style="(darked) ? null : 'background:#00b4ff;color:white'">
        <v-card-title class="headline">Contact us</v-card-title>
        <v-card-text style="padding-bottom: 0;padding-top: 0">
            <i>
                Please fill out this form for any request for pre-registration, registration, room reservation,
                lease contract in this town to process your request. After which we will answer you by email and your account Weltimo.
            </i>
        </v-card-text>
        <v-card-text style="padding-top: 0">
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
                    <v-btn color="success" @click="send" style="margin-left: 0">
                        Send
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
            Your request has been successfully received!
            <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-card>
</template>

<script>
    export default{
        data: ()=>({
            select: null,
            items: [
                "Room reservation",
                "Pre-registration",
                "Registration",
                "Lease agreement"
            ],
            snackbar: false
        }),
        computed:{
            darked(){
                return this.$store.state.setting.darked
            }
        },
        methods: {
            send(){
                this.$store.dispatch('setting/setLoading',true)
                this.$http.post('user/request', {'offer':this.select.join(', '), town:this.$route.name}).then(response=>{
                    if(response.body.id){
                        this.snackbar = true
                        this.$store.dispatch('boxmessage/save', response.body)
                        this.select = []
                    }
                    this.$store.dispatch('setting/setLoading',false)
                })
            }
        },
        mounted(){
            document.querySelector('body').scrollTop = 0
        }
    }
</script>