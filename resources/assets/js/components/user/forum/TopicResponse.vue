<template>
    <v-layout class="elt_topic" :id="'topicresponse'+topicresponse.id" row>
        <v-flex style="padding-right: 0" v-if="$vuetify.breakpoint.smAndUp" lg1>
            <img :src="owner.avatar" style="height: 48px;width:48px;border-radius: 50%" alt="avatar">
        </v-flex>
        <v-flex style="padding-left: 0" lg11>
            <v-card>
                <v-card-text>
                    <v-layout column>
                        <v-flex style="padding-bottom: 0;padding-top: 0;" lg12>
                            <div style="width: 100%;display: flex;justify-content: space-between">
                                <div>
                                    <v-menu
                                            offset-x
                                            :close-on-content-click="false"
                                            :nudge-width="200"
                                            v-model="userPopover"
                                    >
                                        <a slot="activator">{{owner.name+" "+owner.forename}}</a>
                                        <v-card v-if="userPopover">
                                            <v-list>
                                                <v-list-tile avatar :to="'/profile/'+owner.id">
                                                    <v-list-tile-avatar>
                                                        <img :src="owner.avatar" alt="avatar">
                                                    </v-list-tile-avatar>
                                                    <v-list-tile-content>
                                                        <v-list-tile-title>{{owner.name+" "+owner.forename}}</v-list-tile-title>
                                                        <v-list-tile-sub-title v-if="owner.role==='admin'">Founder of Weltimo</v-list-tile-sub-title>
                                                        <v-list-tile-sub-title v-else></v-list-tile-sub-title>
                                                    </v-list-tile-content>
                                                    <v-list-tile-action>
                                                        <v-btn
                                                                icon
                                                                v-if="user.id!==owner.id"
                                                                :class="owner.followed ? 'blue--text' : ''"
                                                                @click.native.stop.prevent="follow(owner)"
                                                        >
                                                            <v-icon>person_add</v-icon>
                                                        </v-btn>
                                                    </v-list-tile-action>
                                                </v-list-tile>
                                            </v-list>
                                            <v-divider></v-divider>
                                            <v-layout column>
                                                <v-flex lg12 xs12>
                                                    <v-avatar
                                                            size="200px"
                                                            :tile="true"
                                                            class="menuCover"
                                                            style="height: 150px"
                                                    >
                                                        <img :src="owner.cover" alt="cover picture">
                                                    </v-avatar>
                                                </v-flex>
                                                <v-flex lg12 xs12>
                                                    <v-layout row wrap style="margin: 10px" align-center justify-center>
                                                        <v-flex><p style="margin-bottom: 0px">Following</p><span style="color:#1B95E0 !important;font-size: 20px">{{owner.following_count}}</span></v-flex>
                                                        <v-flex><p style="margin-bottom: 0px">Followers</p><span style="color:#1B95E0 !important;font-size: 20px">{{owner.followers_count}}</span></v-flex>
                                                    </v-layout>
                                                </v-flex>
                                            </v-layout>
                                        </v-card>
                                    </v-menu>
                                    <small><timeago :since="topicresponse.created_at" :auto-update="61" :max-time="86400 * 365"></timeago></small>
                                </div>
                                <v-menu>
                                    <v-btn slot="activator" icon><v-icon>more_vert</v-icon></v-btn>
                                    <v-list>
                                        <v-list-tile @click="copie">
                                            <v-list-tile-action>
                                                <v-icon>link</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>copie the link</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile @click="openDialogShare=true">
                                            <v-list-tile-action>
                                                <v-icon>share</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Share</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile  @click="openDialogEditForm=true" v-if="user.id===owner.id">
                                            <v-list-tile-action>
                                                <v-icon>edit</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Edit</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile  @click="masquer">
                                            <v-list-tile-action>
                                                <v-icon>cancel</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Hide</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile  @click="">
                                            <v-list-tile-action>
                                                <v-icon>info</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Signal</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile  @click="topicDelete = true" v-if="user.id===owner.id">
                                            <v-list-tile-action>
                                                <v-icon>delete</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Delete</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-menu>
                            </div>
                        </v-flex>
                        <v-divider></v-divider>
                        <v-flex lg12 style="height: inherit;white-space: pre-wrap">{{JSON.parse(topicresponse.response)[0].text}}</v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-dialog v-model="topicDelete" max-width="290">
            <v-card>
                <v-progress-linear :indeterminate="true" v-if="loading" style="margin:0"></v-progress-linear>
                <v-card-title class="headline">Deleting the  response.</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    Are you sure you want to delete this response?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat="flat" @click.native="topicDelete = false">Cancel</v-btn>
                    <v-btn color="primary" flat="flat" @click.native="destroy">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <dialog-forum-response-edit-form :open="openDialogEditForm" :topicresponse="topicresponse" @close="openDialogEditForm=false"></dialog-forum-response-edit-form>
        <dialog-share :open="openDialogShare" :url="urlTopicResponse($route.params.id,topicresponse.id)" @close="openDialogShare=false"></dialog-share>
    </v-layout>
</template>

<script>
    import dialogShare from '../../share/DialogShare.vue'
    import dialogForumResponseEditForm from './ForumResponseEditForm.vue'
    export default{
        components:{dialogShare,dialogForumResponseEditForm},
        props:{
            topicresponse: Object
        },
        data: ()=>({
            openDialogShare: false,
            topicDelete: false,
            loading: false,
            openDialogEditForm: false,
            userPopover: false
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            owner(){
                return this.$store.state.users.users.find(user=>user.id===this.topicresponse.user_id) || {}
            },
        },
        methods:{
            masquer(){
                this.$store.dispatch("topicresponse/delete",{id:this.topicresponse.id})
            },
            copie(){
                let textarea = document.querySelector("#textareaClipboard")
                textarea.value = this.urlTopicResponse(parseInt(this.$route.params.id),this.topicresponse.id)
                textarea.select()
                document.execCommand('copy')
                textarea.blur()
            },
            destroy(){
                this.loading = true
                this.$http.delete('user/forum/topic/'+parseInt(this.$route.params.id)+'/topicresponse/'+this.topicresponse.id).then(response=>{
                    if(response.body.status === 1){
                        this.$store.dispatch('topicresponse/delete', this.topicresponse)
                        this.loading = false
                        this.topicDelete = false
                    }
                })
            },
        }
    }
</script>