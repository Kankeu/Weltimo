<template>
    <div style="display: flex;flex-direction: row;">
        <div>
            <v-avatar
                    @click="$router.push('user/profile/'+comment.user_id)"
                    style="margin-right: 10px"
                    size="40px"
            >
                <img :src="owner.avatar" alt="avatar">
            </v-avatar>
        </div>
        <div style="display: flex;flex-direction: column;width: 290px;word-wrap: break-word">
            <div>
                {{owner.name+" "+owner.forename}}
            </div>
            <div>
                <div style="width:100%;text-align: left;word-wrap: break-word;color:#616161">
                    <span v-for="message,i in JSON.parse(comment.message)" :key="i">
                        <span class="text-xs-center" @click="$router.push('user/profile/'+comment.comment_id)" v-if="comment.comment_id && i===0">
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
            <div style="display:flex;justify-content: space-between;width: 310px">
                <div>
                    {{comment.likes_count}}
                    <v-btn icon flat @click.native="deleteLike" v-if="comment.liked" style="color:red"><v-icon>favorite</v-icon></v-btn>
                    <v-btn icon flat @click.native="like" v-else><v-icon>favorite_border</v-icon></v-btn>
                </div>
                <v-btn icon flat @click.native="reply"><v-icon>reply</v-icon></v-btn>
                <v-btn icon flat @click.native="destroy"><v-icon>delete</v-icon></v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import store from './state'
    export default{
        props:{
            comment: Object
        },
        data(){
            return {
                store: store.state
            }
        },
        computed:{
           owner(){
               return this.$store.state.users.users.find(user=>user.id===this.comment.user_id)
           },
            replyed_user(){
                return this.$store.state.users.users.find(user=>user.id===this.comment.comment_id)
            },
        },
        methods:{
            reply(){
                store.set("replyUser_id",this.owner.id)
            },
            destroy(){
                store.set('loading',true)
                this.$http.delete('user/article/'+this.comment.article_id+'/comment/'+this.comment.id).then(response=>{
                    if(response.body.status === 1){
                        this.$store.dispatch('comment/delete',this.comment)
                    }
                    store.set('loading',false)
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
                this.$http.delete('user/article/'+this.comment.article_id+'/comment/'+this.comment.id+'/like/').then(response=>{
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