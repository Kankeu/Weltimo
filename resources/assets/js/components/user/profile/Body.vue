<template>
    <v-container :style="$vuetify.breakpoint.smAndUp || 'padding:0;padding-top:8px'" grid-list-md text-xs-center fluid>
        <v-layout v-scroll="{callback: this.loadMore}" v-if="articles.length>0" column>
            <v-flex v-if="user.id===profile.id" lg12>
                <cardPublication></cardPublication>
            </v-flex>
            <v-flex lg12 v-for="article,i in articles" :key="article.id">
                <cardFont :article="article" @like="openLike" @edit="openFormEdit" @comment="openComment"></cardFont>
                <xs-card-more v-if="i%3 && !$vuetify.breakpoint.smAndUp"></xs-card-more>
            </v-flex>
            <dialog-comment :open="openDialogComment" @close="openDialogComment=!openDialogComment" :article="article" :articles="articles" v-if="$vuetify.breakpoint.smAndUp"></dialog-comment>
            <xs-dialog-comment :open="openDialogComment" @close="openDialogComment=!openDialogComment" :article="article" v-else></xs-dialog-comment>
            <dialog-like v-if="openDialogLike" :open="openDialogLike" @close="openDialogLike=!openDialogLike" :article="article"></dialog-like>
            <dialog-form-edit :article="article" :open="dialogFormEdit" @close="dialogFormEdit=false"></dialog-form-edit>
        </v-layout>
        <v-layout column style="height: 200px" align-center justify-center v-else>
            <h1>No publication</h1>
        </v-layout>
        <v-layout column v-if="articles.length<1 && !$vuetify.breakpoint.smAndUp">
            <v-flex lg12>
                <xs-card-more></xs-card-more>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import cardFont from '../../card/CardFont.vue'
    import cardPublication from '../../card/CardPublication.vue'
    import dialogComment from "../../comment/DialogComment.vue"
    import dialogLike from "../../like/DialogLike.vue"
    import dialogFormEdit from '../../card/DialogFormEdit.vue'
    import xsDialogComment from '../../comment/XsDialogComment.vue'
    import xsCardMore from './XsCardMore.vue'
    export default{
        components:{cardFont,cardPublication,dialogComment,dialogLike,dialogFormEdit,xsDialogComment,xsCardMore},
        data: ()=>({
            openDialogComment: false,
            openDialogLike: false,
            dialogFormEdit: false,
            article:{},
            ready:true
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            articles(){
                return this.$store.state.article.articles.filter(article => article.user_id === parseInt(this.$route.params.id))
            },
            profile(){
                return this.$store.state.users.users.find(user=>user.id===parseInt(this.$route.params.id))
            },
            end(){
                return this.$store.state.query.queries.find(e=>(e.name==="profileBody" && !e.next && e.id===parseInt(this.$route.params.id)))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==="profileBody" && e.id===parseInt(this.$route.params.id)))
            },
            scrollTop(){
                let scroll = this.$store.state.setting.scrollTops.find(e=>e.name==="profileBody") || {}
                return scroll.scrollTop
            }
        },
        methods:{
            loadMore(){
                if((window.innerHeight + window.scrollY) >= document.body.offsetHeight-600){
                    if(!this.end && this.ready){
                        this.ready = false
                        this.$store.dispatch('setting/setLoading',true)
                        this.$http.get(this.query.next).then(response=>{
                            if(typeof response.body === "object"){
                                let users = []
                                response.body.data.map(article=>{
                                    users.push(article.user)
                                    delete article.user
                                })
                                this.$store.dispatch("article/save", response.body.data)
                                this.$store.dispatch("users/save", users)
                                this.$store.dispatch("query/save",{name:'profileBody',next:response.body.next_page_url,id:parseInt(this.$route.params.id)})
                            }
                            this.ready = true
                            this.$store.dispatch('setting/setLoading',false)
                        })
                    }
                }
            },
            load(){
                if(!this.query && this.ready){
                    this.ready = false
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.get('/user/profile/'+this.$route.params.id).then(response=>{
                        if(typeof response.body === "object"){
                            let users = []
                            response.body.data.map(article=>{
                                users.push(article.user)
                                delete article.user
                            })
                            this.$store.dispatch("article/save", response.body.data)
                            this.$store.dispatch("users/save", users)
                            this.$store.dispatch("query/save",{name:'profileBody',next:response.body.next_page_url,id:parseInt(this.$route.params.id)})
                        }
                        this.ready = true
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            },
            openComment(article){
                this.openDialogComment = true
                this.article = article
            },
            openLike(article){
                this.openDialogLike = true
                this.article = article
            },
            openFormEdit(article){
                this.dialogFormEdit = true
                this.article = article
            }
        },
        mounted(){
            this.load()
            document.body.scrollTop = this.scrollTop
        },
        watch:{
            '$route.params.id'(){
                this.load()
            }
        },
    }
</script>
