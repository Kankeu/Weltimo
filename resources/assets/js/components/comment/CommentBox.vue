<template>
    <v-layout column>
        <v-flex>
            <v-card>
                <v-toolbar :color="(!darked) ? 'white' : 'theme--dark'">
                    <v-avatar
                            @click="$router.push('user/profile/'+owner.id)"
                            style="margin-left: 10px;margin-right: 10px"
                            size="40px"
                    >
                        <img :src="owner.avatar" alt="avatar">
                    </v-avatar>
                    <div>
                        {{"  "+owner.name+" "+owner.forename+"  "}}
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn
                            :loading="owner.loadingSubs"
                            :color="owner.followed ? null :'primary'"
                            @click.stop.prevent="follow(owner)"
                            v-if="user.id!==owner.id"
                            outline
                    >
                        <v-icon v-if="!owner.followed">person_add</v-icon>{{owner.followed ? "Unfollow" : "Follow"}}
                    </v-btn>
                    <v-menu>
                        <v-btn flat slot="activator" icon>
                            <v-icon>more_vert</v-icon>
                        </v-btn>
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
                            <v-list-tile  @click="dialogFormEdit=true" v-if="user.id===owner.id">
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
                            <v-list-tile  @click="destroy" v-if="user.id===owner.id">
                                <v-list-tile-action>
                                    <v-icon>delete</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>Delete</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding: 10px;overflow-x:hidden;overflow-y: auto;height:410px" id="comments">
                    <div style="margin-bottom: 10px">
                        <div style="width:100%;text-align: left;color:rgb(97, 97, 97)" v-if="article.image">
                            <b style="color:black">{{owner.name+" "+owner.forename}}</b>
                            <span v-for="message,i in JSON.parse(article.message)" :key="i">{{message.text}}<span  v-if="message.url"><img :src="message.url" style="margin-bottom:-5px;height: 30px;width: 30px"></span></span>
                        </div>
                    </div>
                    <comments :article="article" :open="open"></comments>
                </div>
            </v-card>
        </v-flex>
        <v-flex>
            <div style="display: flex;justify-content: space-between;align-items: center">
                <v-menu
                        :open-on-hover="true"
                        :close-on-content-click="true"
                        :nudge-left="133"
                        :nudge-top="103"
                        origin="center center"
                        transition="scale-transition"
                        style="font-size:16px"
                        offset-y
                        offset-x
                        :dark="true"
                >
                    <div  slot="activator" style="display:flex;align-items: center">
                        <v-btn v-if="facemotion" @click.native="deleteLike" icon><div dato-descripcion="alegre" id-referencia="1513812312742" :class="'Selector selectorFace '+facemotion"></div></v-btn>
                        <v-btn flat icon v-if="!facemotion" @click.native="like($event,'amo')"><v-icon>favorite_border</v-icon></v-btn> &nbsp; <a>{{text ? text :'Love'}} </a>
                    </div>
                    <div class="faceMocion" @click="like">
                        <div class="amo" dato-descripcion="Love"></div>
                        <div class="gusta" dato-descripcion="Like"></div>
                        <div class="divierte" dato-descripcion="Haha"></div>
                        <div class="asombro" dato-descripcion="Wow"></div>
                        <div class="alegre" dato-descripcion="Glad"></div>
                        <div class="asusta" dato-descripcion="Bother"></div>
                        <div class="triste" dato-descripcion="Sad"></div>
                        <div class="molesto" dato-descripcion="Angry"></div>
                    </div>
                </v-menu>
                <div style="margin-right: 10px"><timeago :since="article.created_at" :auto-update="61" :max-time="86400 * 365"></timeago></div>
            </div>
            <div style="display: flex;justify-content: space-between;margin-left: 10px;margin-right: 10px;">
                <div>{{article.likes_count}} <a @click="openDialogLike=true">{{plural('Reaction',article.likes_count)}}</a></div><div>{{article.comments_count}} <a>{{plural('Comment',article.comments_count)}}</a></div>
            </div>
        </v-flex>
        <v-flex>
            <comment-form :article="article"></comment-form>
        </v-flex>
        <dialog-share :open="openDialogShare" :url="urlArticle(article.id,article.user_id)" @close="openDialogShare=false"></dialog-share>
        <dialog-like v-if="openDialogLike" :open="openDialogLike" @close="openDialogLike=!openDialogLike" :article="article"></dialog-like>
        <dialog-form-edit :article="article" :open="dialogFormEdit" @close="dialogFormEdit=false"></dialog-form-edit>
    </v-layout>
</template>

<script>
    import comments from './Comments.vue'
    import commentForm from './CommentForm.vue'
    import cardMixin from '../mixin/cardMixin'
    import dialogShare from '../share/DialogShare.vue'
    import dialogLike from "../like/DialogLike.vue"
    import dialogFormEdit from '../card/DialogFormEdit.vue'
    export default{
        components:{commentForm,comments,dialogShare,dialogLike,dialogFormEdit},
        mixins:[cardMixin],
        props:{
            open: Boolean
        },
        data: ()=>({
            openDialogShare: false,
            openDialogLike: false,
            dialogFormEdit: false
        }),
        mounted(){

        },
    }
</script>

<style scoped>
    .toolbar{
        box-shadow: none;
    }
</style>