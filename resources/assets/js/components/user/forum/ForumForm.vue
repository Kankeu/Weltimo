<template>
    <v-layout column>
        <v-flex lg12>
            <v-text-field multi-line box label="Answer" v-model.trim="response" required></v-text-field>
        </v-flex>
        <v-flex lg12>
            <v-checkbox v-model="emailReceive" label="Receive an email alert when someone answers about it."></v-checkbox>
        </v-flex>
        <v-flex lg12>
            <v-btn color="success" style="margin-left: 0px" @click="publish" lg>
                Reply
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
    export default{
        data: ()=>({
            emailReceive: false,
            response: null,
        }),
        computed:{
            responseParsed(){
                return JSON.stringify([{text:this.response.trim()}])
            },
        },
        methods:{
            publish(){
                if(this.response && this.response.length>0){
                    let data = {response: this.responseParsed,emailReceive:this.emailReceive}
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.post('/user/forum/topic/'+this.$route.params.id+'/topicresponse',data).then(response=>{
                        if(typeof response.body === "object"){
                            this.$store.dispatch("topicresponse/save", response.body)
                            this.response = null
                            this.emailReceive = false
                        }
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            },
        }
    }
</script>