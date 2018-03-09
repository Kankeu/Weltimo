<template>
    <textarea class="textarea" @keyup.prevent.13="send" placeholder="Type here!"></textarea>
</template>

<script>
    export default{
        props:{
            boxmessage: Object
        },
        computed:{
            user(){
                return this.$store.state.user.user
            }
        },
        methods:{
            send($event){
                let data = {message:$event.target.value}
                if(this.user.id!==this.boxmessage.id) data['receiver_id'] = this.boxmessage.user_id
                this.$http.post('/user/request/'+this.boxmessage.id+'/message', data).then(response=>{
                    if(response.body.id){
                        this.$store.dispatch('message/save', response.body)
                        $event.target.value = null
                    }
                })
            }
        }
    }
</script>

<style scoped>
    textarea.textarea {
        position: absolute;
        bottom: 0px;
        resize: none;
        left: 0px;
        right: 0px;
        width: 100%;
        min-height: 50px;
        max-height: 150px;
        z-index: 99;
        padding-top: 15px;
        background: #fafafa;
        border: none;
        outline: none;
        padding-left: 25px;
        padding-right: 25px;
        color: #666;
        font-weight: 400;
    }
</style>