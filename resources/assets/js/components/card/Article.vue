<template>
    <v-layout row justify-center>
        <v-dialog v-model="openDialogComment" width="935px">
            <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear>
            <v-carousel  style="position: inherit;height: 597px;background: transparent" :cycle="false" :key="article.id" hide-controls hide-delimiters>
                <v-carousel-item src=" " class="carousel_item">
                    <v-card height="600px" style="width:935px">
                        <v-container class="notSpace" style="overflow: hidden"  grid-list-md>
                            <v-layout class="notSpace" row v-if="article.id">
                                <v-flex class="notSpace" lg7>
                                    <article-box :article="article"></article-box>
                                </v-flex>
                                <v-flex class="notSpace" lg5>
                                    <comment-box :open="openDialogComment" :article="article"></comment-box>
                                </v-flex>
                            </v-layout>
                            <v-layout column style="height: 600px" align-center justify-center v-else>
                                <h1>Not found : (</h1>
                                <h4>May be is the publication delete.</h4>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-carousel-item>
            </v-carousel>
        </v-dialog>
    </v-layout>
</template>

<script>
    import articleBox from '../comment/ArticleBox.vue'
    import commentBox from '../comment/CommentBox.vue'
    import store from '../comment/state'
    export default{
        components:{articleBox,commentBox},
        data:()=>({
            openDialogComment:false,
            store: store.state,
        }),
        computed:{
            loading(){
                return  this.store.loading
            },
            user(){
                return this.$store.state.user.user
            },
            article(){
                return this.$store.state.article.articles.find(article => article.id === parseInt(this.$route.params.article)) || {}
            },
            profile(){
                return this.$store.state.users.users.find(user=>user.id===parseInt(this.$route.params.id))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==="article" && e.id===parseInt(this.$route.params.article)))
            },
        },
        methods:{
            load(){
                if(!this.query){
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.get('/user/profile/'+this.$route.params.id+'/article/'+this.$route.params.article).then(response=>{
                        if(response.body.id){
                            this.$store.dispatch("article/save", response.body)
                            this.$store.dispatch("query/save",{name:'article', id:parseInt(this.$route.params.article)})
                        }
                        this.openDialogComment = true
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            },
        },
        mounted(){
            this.load()
        },
        watch:{
            '$route'(){
                this.load()
            },
            openDialogComment(data){
                if(!data) this.$router.go(-2)
            }
        },
    }
</script>