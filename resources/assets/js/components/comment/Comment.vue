<template>
    <div style="display: flex;flex-direction: row;">
        <div>
            <v-avatar
                    @click="$router.push('/user/profile/'+comment.user_id)"
                    style="margin-right: 10px"
                    size="40px"
            >
                <img :src="owner.avatar" alt="avatar">
            </v-avatar>
        </div>
        <div style="display: flex;flex-direction: column;width: 80%;word-wrap: break-word">
            <div>
                {{owner.name+" "+owner.forename}}
            </div>
            <div>
                <div style="width:100%;text-align: left;word-wrap: break-word;">
                    <span v-for="message,i in JSON.parse(comment.message)" :key="i">
                        <span class="text-xs-center" @click="$router.push('/user/profile/'+comment.comment_id)" v-if="comment.comment_id && i===0">
                          <v-chip class="chipComment">
                            <v-avatar style="height: 25px !important;width: 25px !important;min-width: 25px !important;">
                              <img :src="replyed_user.avatar" alt="avatar">
                            </v-avatar>
                            {{replyed_user.name+" "+replyed_user.forename}}
                          </v-chip>
                        </span>
                        {{message.text}}
                        <span  v-if="message.url">
                            <img :src="message.url" style="margin-bottom:-5px;height: 20px;width: 20px">
                        </span>
                    </span>
                </div>
            </div>
            <div class="commentActions">
                <div>
                    {{comment.likes_count}}
                    <v-btn icon flat @click.native="deleteLike" v-if="comment.liked" style="color:red"><v-icon>favorite</v-icon></v-btn>
                    <v-btn icon flat @click.native="like" v-else><v-icon>favorite_border</v-icon></v-btn>
                </div>
                <v-btn icon flat @click.native="reply"><v-icon>reply</v-icon></v-btn>
                <v-btn icon flat @click.native="commentDelete=true" v-if="user.id===comment.user_id"><v-icon>delete</v-icon></v-btn>
            </div>
        </div>
        <v-dialog v-model="commentDelete" max-width="290">
            <v-card>
                <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin:0"></v-progress-linear>
                <v-card-title class="headline">Deleting the comment</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    Are you sure you want to delete this comment?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat="flat" @click.native="commentDelete = false">Cancel</v-btn>
                    <v-btn color="primary" flat="flat" @click.native="destroy">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import store from './state'
    export default{
        props:{
            article: Object,
            comment: Object
        },
        data(){
            return {
                store: store.state,
                commentDelete: false,
                loading: false,
            }
        },
        computed:{
           owner(){
               return this.$store.state.users.users.find(user=>user.id===this.comment.user_id)
           },
            replyed_user(){
                return this.$store.state.users.users.find(user=>user.id===this.comment.comment_id)
            },
            user(){
                return this.$store.state.user.user
            },
        },
        methods:{
            reply(){
                store.set("replyUser_id",this.owner.id)
            },
            destroy(){
                this.loading = true
                this.$http.delete('user/article/'+this.comment.article_id+'/comment/'+this.comment.id).then(response=>{
                    if(response.body.status === 1){
                        this.$store.dispatch('comment/delete',this.comment)
                        this.$store.dispatch('article/deleteComment',this.article)
                    }
                    this.loading = false
                    this.commentDelete = false
                })
            },
            like(){
                store.set('loading',true)
                this.$http.get('user/article/'+this.comment.article_id+'/comment/'+this.comment.id+'/like/'+8).then(response=>{
                    if(response.body.id){
                        this.$store.dispatch('comment/addLike',{comment:this.comment,like:response.body})
                    }
                    store.set('loading',false)
                })
            },
            deleteLike(){
                store.set('loading',true)
                this.$http.get('user/article/'+this.comment.article_id+'/comment/'+this.comment.id+'/like/').then(response=>{
                    if(response.body.status === 1){
                        this.$store.dispatch('comment/deleteLike',{comment:this.comment})
                    }
                    store.set('loading',false)
                })
            },
        },
    }
</script>

<style scoped>
    .icon{
        font-size: 18px;
    }
</style>

<style>
    .commentActions{
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 80%;
    }
    .commentActions button{
        margin: 0;
    }
    .chipComment{
        height: 25px !important;
    }
    .chipComment .chip__content{
        cursor: pointer !important;
    }
    .chipComment .avatar{
        width: 25px !important;
        height: 25px !important;
        min-width: 25px !important;
    }
</style>