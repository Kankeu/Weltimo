<template>
    <v-container grid-list-md text-xs-center fluid>
        <v-layout column>
            <v-flex v-if="user.id===profile.id" lg12>
                <cardPublication></cardPublication>
            </v-flex>
            <v-flex lg12 v-for="article in articles" :key="article.id">
                <cardFont :article="article"  @comment="open"></cardFont>
            </v-flex>
            <dialog-comment :open="openDialogComment" @close="openDialogComment=!openDialogComment" :article="article" :articles="articles"></dialog-comment>
        </v-layout>
    </v-container>
</template>

<script>
    import cardFont from '../../card/CardFont.vue'
    import cardPublication from '../../card/CardPublication.vue'
    import dialogComment from "../../comment/DialogComment.vue"
    export default{
        components:{cardFont,cardPublication,dialogComment},
        data: ()=>({
            openDialogComment: false,
            article:{}
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            query(){
                return this.$store.state.query.queries.find(e=>e.name==="profileBody" && e.id===this.$route.params.id)
            },
            articles(){
                return this.$store.state.article.articles.filter(article => article.user_id == this.$route.params.id)
            },
            profile(){
                return this.$store.state.users.users.find(user=>user.id===parseInt(this.$route.params.id))
            },
        },
        methods:{
            load(){
                if(!this.query){
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.get('/user/profile/'+this.$route.params.id).then(response=>{
                        if(response.body[0] && typeof response.body === "object"){
                            let users = []
                            response.body.map(article=>{
                                users.push(article.user)
                                delete article.user
                            })
                            this.$store.dispatch("article/save", response.body)
                            this.$store.dispatch("users/save", users)
                            this.$store.dispatch("query/save",{name:'profileBody',id:this.$route.params.id})
                        }
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            },
            open(article){
                this.openDialogComment = true
                this.article = article
            }
        },
        mounted(){
            this.load()
        },
        watch:{
            $route(){
                this.load()
            }
        },
    }
</script>
