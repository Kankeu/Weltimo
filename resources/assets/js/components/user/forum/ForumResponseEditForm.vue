<template>
    <v-dialog v-model="dialog" max-width="700">
        <v-card>
            <v-progress-linear v-bind:indeterminate="true" v-if="loading"></v-progress-linear>
            <v-card-title>
                Edit the response<v-spacer></v-spacer><v-btn icon @click="dialog=false"><v-icon>close</v-icon></v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-layout column>
                    <v-flex lg12>
                        <v-text-field multi-line box label="Answer" v-model.trim="response" required></v-text-field>
                    </v-flex>
                    <v-flex lg12>
                        <v-btn color="success" style="margin-left: 0px" @click="edit" lg>
                            Edit Response
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default{
        props:{
            open: Boolean,
            topicresponse: Object
        },
        data: ()=>({
            dialog: false,
            response: null,
            loading: false
        }),
        computed:{
            responseParsed(){
                return JSON.stringify([{text:this.response.trim()}])
            },
        },
        methods:{
            edit(){
                if(this.response && this.response.length>0){
                    let data = {response: this.responseParsed}
                    this.loading = true
                    this.$http.put('/user/forum/topic/'+this.$route.params.id+'/topicresponse/'+this.topicresponse.id,data).then(response=>{
                        if(typeof response.body === "object"){
                            this.$store.dispatch("topicresponse/save", response.body)
                        }
                        this.loading = false
                    })
                }
            },
        },
        mounted(){
            this.response = JSON.parse(this.topicresponse.response)[0].text
        },
        watch:{
            open(data){
                if(data) this.dialog=true
            },
            dialog(data){
                if(!data) this.$emit('close')
            }
        }
    }
</script>