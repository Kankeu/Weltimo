<template>
    <v-card style="position: relative" height="600px">
        <v-card-title class="headline">
            Discussion
            <v-spacer></v-spacer>
            <v-menu>
                <v-btn flat slot="activator" icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile @click="dialogFormEdit=true" v-if="user.id===owner.id">
                        <v-list-tile-action>
                            <v-icon>edit</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Edit</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile  @click="requestDelete=true">
                        <v-list-tile-action>
                            <v-icon>delete</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Delete</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-card-title>
        <v-divider></v-divider>
            <ul class="chat">
                <div v-for="message in messages" :key="message.id">
                    <message :message="message"></message>
                </div>
            </ul>
        <message-box-form :boxmessage="boxmessage"></message-box-form>
        <v-dialog v-model="requestDelete" max-width="290">
            <v-card>
                <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin:0"></v-progress-linear>
                <v-card-title class="headline">Deleting the request</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    Are you sure you want to delete this request?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat="flat" @click.native="requestDelete = false">Cancel</v-btn>
                    <v-btn color="primary" flat="flat" @click.native="destroy">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <dialog-form-edit :boxmessage="boxmessage" :open="dialogFormEdit" @close="dialogFormEdit=false"></dialog-form-edit>
    </v-card>
</template>

<script>
    import message from './Message.vue'
    import messageBoxForm from './MessageBoxForm.vue'
    import dialogFormEdit from './DialogFormEdit.vue'
    export default {
        components:{message,messageBoxForm,dialogFormEdit},
        props:{
            boxmessage: Object
        },
        data () {
            return {
                requestDelete: false,
                dialogFormEdit: false,
                loading: false
            }
        },
        computed:{
            user(){
                return this.$store.state.user.user
            },
            owner(){
                return this.$store.state.users.users.find(user=>user.id===this.boxmessage.user_id) || {}
            },
            messages(){
                return this.$store.state.message.messages.filter(message=>message.request_id===this.boxmessage.id)
            }
        },
        methods:{
            destroy(){
                this.loading = true
                this.$http.delete('/user/request/'+this.boxmessage.id).then(response=>{
                    if(response.body.status===1){
                        this.loading = false
                        this.$store.dispatch('boxmessage/delete', this.boxmessage)
                        this.dialog = false
                    }
                })
            }
        },
        mounted(){
            this.$http.get('/user/request/'+this.boxmessage.id+'/message').then(response=>{
                if(Array.isArray(response.body.data)){
                    this.$store.dispatch('message/save', response.body.data)
                    this.$store.dispatch("query/save",{name:'messagebox',next:response.body.next_page_url,id:parseInt(this.boxmessage.id)})
                }
            })
        },
        watch:{
            messages(data, lastData){
                if(data.length>lastData.length){
                    let elt = this.$el.querySelector('.chat')
                    elt.scrollTop = elt.scrollHeight
                }
            }
        }
    }
</script>

<style scoped>

    ::selection{
        background: rgba(82,179,217,0.3);
        color: inherit;
    }

    /* M E S S A G E S */

    .chat {
        list-style: none;
        background: none;
        margin: 0;
        padding: 0 0 100px 0;
        max-height: 475px;
        overflow-y: auto;
    }
    @media screen and (max-width: 800px) {
        .msg img {
            width: 300px;
        }
    }

    @-webikt-keyframes pulse {
        from { opacity: 0; }
        to { opacity: 0.5; }
    }

    ::-webkit-scrollbar {
        min-width: 12px;
        width: 12px;
        max-width: 12px;
        min-height: 12px;
        height: 12px;
        max-height: 12px;
        background: #e5e5e5;
        box-shadow: inset 0px 50px 0px rgba(82,179,217,0.9), inset 0px -52px 0px #fafafa;
    }

    ::-webkit-scrollbar-thumb {
        background: #bbb;
        border: none;
        border-radius: 100px;
        border: solid 3px #e5e5e5;
        box-shadow: inset 0px 0px 3px #999;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #b0b0b0;
        box-shadow: inset 0px 0px 3px #888;
    }

    ::-webkit-scrollbar-thumb:active {
        background: #aaa;
        box-shadow: inset 0px 0px 3px #7f7f7f;
    }

    ::-webkit-scrollbar-button {
        display: block;
        height: 26px;
    }

</style>