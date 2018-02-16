
<template>
    <div>
        <span v-if="!end && article.comments_count!==0 && $vuetify.breakpoint.smAndUp"><a @click="loadMore">Load more comments</a><br><br></span>
        <blockquote :id="(comment.user_id!==user.id) ? comment.idName : null" v-for="comment,i in comments" :key="i">
            <comment :comment="comment" :article="article"></comment>
        </blockquote>
        <span v-if="!end && article.comments_count!==0 && !$vuetify.breakpoint.smAndUp"><a @click="loadMore">Load more comments</a><br><br></span>
    </div>
</template>

<script>
    import comment from './Comment.vue'
    import store from './state'
    export default{
        components:{comment},
        props:{
            article: Object,
            open: Boolean
        },
        data: ()=>({
            ready: true
        }),
        computed: {
            comments(){
                return this.$store.state.comment.comments.filter(comment=>comment.commentable_id===this.article.id && comment.commentable_type===this.commentableType)
            },
            end(){
                return this.$store.state.query.queries.find(e=>(e.name==="comment"+this.name && !e.next && e.id===this.article.id))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==="comment"+this.name && e.id===this.article.id))
            },
            user(){
                return this.$store.state.user.user
            },
            name(){
                return (this.article.type) ? this.article.type : 'article'
            },
            commentableType(){
                return "App\\"+this.name[0].toUpperCase()+this.name.substring(1)
            }
        },
        methods:{
            loadMore(){
                if(!this.end && this.ready){
                    store.set('loading',true)
                    this.ready = false
                    this.$http.get(this.query.next).then(response=>{
                        if(response.body && typeof response.body === "object"){
                            let users = []
                            let replyed_users = []
                            response.body.data.map(comment=>{
                                users.push(comment.user)
                                delete comment.user
                                if(comment.replyed_user){
                                    replyed_users.push(comment.replyed_user)
                                    delete comment.replyed_user
                                }
                            })
                            this.$store.dispatch('users/save',users)
                            this.$store.dispatch('users/save',replyed_users)
                            this.$store.dispatch('comment/save',response.body.data)
                            this.$store.dispatch("query/save",{name:'comment'+this.name,next:response.body.next_page_url,id:this.article.id})
                            this.$nextTick(()=>{
                                this.$scrollTo('#showComment',1000,{container:'#comments'})
                            })
                        }
                        store.set('loading',false)
                        this.ready = true
                    })
                }
            },
            load(){
                if(!this.query && this.ready){
                    store.set('loading',true)
                    this.ready = false
                    this.$http.get('/user/'+this.name+'/'+this.article.id+'/comment').then(response=>{
                        if(response.body && typeof response.body.data === "object"){
                            let users = []
                            let replyed_users = []
                            response.body.data.map(comment=>{
                                users.push(comment.user)
                                delete comment.user
                                if(comment.replyed_user){
                                    replyed_users.push(comment.replyed_user)
                                    delete comment.replyed_user
                                }
                            })
                            this.$store.dispatch('users/save',users)
                            this.$store.dispatch('users/save',replyed_users)
                            this.$store.dispatch('comment/save',response.body.data)
                            this.$store.dispatch("query/save",{name:'comment'+this.name,next:response.body.next_page_url,id:this.article.id})
                            this.$nextTick(()=>{
                                this.$scrollTo('#showComment',1000,{container:'#comments'})
                            })
                        }
                        store.set('loading',false)
                        this.ready = true
                    })
                }else{
                    this.$nextTick(()=>{
                        this.$scrollTo('#showComment',1000,{container:'#comments'})
                    })
                }
            }
        },
        mounted(){
            this.load()
        },
        watch:{
            open(data){
                alert(document.querySelector('#showComment'))
                if(data===true){
                    this.$nextTick(()=>{
                        this.$scrollTo('#showComment',1000,{container:'#comments'})
                    })
                }
            }
        }
    }
</script>

<style scoped>
    #showComment {
        padding-left: 10px;
        margin-left: -10px;
        border-left: 5px solid turquoise;
    }
</style>