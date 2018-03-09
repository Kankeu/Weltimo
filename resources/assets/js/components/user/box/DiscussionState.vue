<template>
    <v-card height="600px">
        <v-card-title class="headline">State of Discussion</v-card-title>
        <v-alert :color="darked || 'info'" dismissible v-model="msgAlert" icon="info" >
            {{owner.name+" "+owner.forename}} propose you to pass to the next step of discussions.
        </v-alert>
        <v-stepper v-model="step" style="box-shadow: none" vertical>
            <v-stepper-step step="1" :complete="step > 1">
                Negotiations
                <small>In this step it is a question of finding an agreement at the price level.</small>
            </v-stepper-step>
            <v-stepper-content step="1">
                <v-card class="negocitionBg" height="150px"></v-card>
                <v-btn color="primary" @click.native="migrateState(2)" v-if="discussionstate.confirmated===discussionstate.state || discussionstate.user_id!==user.id">Continue</v-btn>
                <v-btn disabled v-else>Waiting for the response</v-btn>
            </v-stepper-content>
            <v-stepper-step step="2" :complete="step > 2">
                Send documents
                <small>You have already found an agreement and now we need your documents to process your request</small>
            </v-stepper-step>
            <v-stepper-content step="2">
                <v-card class="documentBg" height="150px"></v-card>
                <v-btn color="primary" @click.native="migrateState(3)" v-if="discussionstate.confirmated===discussionstate.state || discussionstate.user_id!==user.id">Continue</v-btn>
                <v-btn disabled v-else>Waiting for the response</v-btn>
            </v-stepper-content>
            <v-stepper-step step="3" :complete="step > 3">
                Closing the discussion
                <small>We have already processed your application and you have the documents that certify it.</small>
            </v-stepper-step>
            <v-stepper-content step="3">
                <v-card class="discussionEndBg" :height="msgAlert ? '100px' : '150px'"></v-card>
                <v-btn color="primary" @click.native="migrateState(4)" v-if="discussionstate.confirmated===discussionstate.state || discussionstate.user_id!==user.id">Finish</v-btn>
                <v-btn disabled v-else>Waiting for the response</v-btn>
            </v-stepper-content>
        </v-stepper>
    </v-card>
</template>

<script>
    export default {
        props:{
            boxmessage: Object
        },
        data: ()=>({
            msgAlert: false,
            step: -1
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            discussionstate(){
                return this.$store.state.discussionstate.discussionstates.find(discussionstate=>discussionstate.request_id===this.boxmessage.id) || {}
            },
            darked(){
                return this.$store.state.setting.darked
            },
            owner(){
                return this.$store.state.users.users.find(user=>user.id===this.discussionstate.user_id) || {}
            }
        },
        methods:{
            migrateState(state){
                this.$http.post('/user/request/'+this.boxmessage.id+'/discussionstate',{state}).then(response=>{
                    if(response.body.id){
                        this.$store.dispatch('discussionstate/save', response.body)
                    }
                })
            }
        },
        mounted(){
            this.$http.get('/user/request/'+this.boxmessage.id+'/discussionstate').then(response=>{
                if(response.body.id){
                    let user = response.body.user
                    delete response.body.user
                    this.$store.dispatch('discussionstate/save', response.body)
                    this.$store.dispatch('users/save', user)
                    this.msgAlert = (this.discussionstate.state !== this.discussionstate.confirmated) && (this.user.id!==this.discussionstate.user_id)
                    this.step = this.discussionstate.confirmated
                }
                this.step = 1
            })
        },
        watch:{
            discussionstate(data){
                this.msgAlert =  (this.discussionstate.state !== this.discussionstate.confirmated) && (this.user.id!==this.discussionstate.user_id)
                this.step = data.confirmated
            },
        }
    }
</script>

<style scoped>
    .negocitionBg{
        background-size: contain;
        background-color: turquoise;
        background-position-x: 50%;
        background-image: url(https://atmanco.com/wp-content/uploads/2015/04/negociation-skills1.png);
    }
    .documentBg{
        background-size: contain;
        background-position-x: 50%;
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOURTGoqGw6bodoKAkQFt1Qoi8kNEQ9QyIYMecs3SQG-tnlFqmw);
    }
    .discussionEndBg{
        background-size: contain;
        background-position-x: 50%;
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjuXqngtXmv1rNogLdpCzdtz7cXqnneVmWSQu928dqNIrO7v-F0g);
    }
</style>