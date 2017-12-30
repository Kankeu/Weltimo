<template>
    <div>
        <comment :comment="comment" @loading="(v)=>$emit('loading',v)"  v-for="comment in comments" :key="comment.id"></comment>
    </div>
</template>

<script>
    import comment from './Comment.vue'
    import store from './state'
    export default{
        components:{comment},
        props:{
            article: Object
        },
        computed: {
            comments(){
                return this.$store.state.comment.comments.filter(comment=>comment.article_id===this.article.id)
            },
            query(){
                return this.$store.state.query.queries.find(e=>e.name==="comment" && e.id===this.article.id)
            },
        },
        mounted(){
            if(!this.query){
                store.set('loading',true)
                this.$http.get('user/article/'+this.article.id+'/comment').then(response=>{
                    if(response.body[0] && typeof response.body === "object"){
                        let users = []
                        let replyed_users = []
                        response.body.map(comment=>{
                            users.push(comment.user)
                            replyed_users.push(comment.replyed_user)
                            delete comment.user
                            delete comment.replyed_user
                        })
                        this.$store.dispatch('users/save',users)
                        this.$store.dispatch('comment/save',response.body)
                        this.$store.dispatch("query/save",{name:'comment',id:this.article.id})
                    }
                    store.set('loading',false)
                })
            }
        }
    }
</script>