<template>
    <v-layout v-scroll="{callback: this.loadMore}" row>
        <v-flex lg3 xs0></v-flex>
        <v-flex lg6 xs12>
            <v-container style="overflow: visible;" grid-list-md text-xs-center fluid>
                <v-alert color="success" icon="check_circle" v-if="msgFlash" v-model="alert" outline dismissible>
                    {{msgFlash}}
                </v-alert>
                <v-layout column>
                    <v-flex lg12>
                        <cardPublication></cardPublication>
                    </v-flex>
                    <v-flex lg12 v-for="article in articles" :key="article.id">
                        <cardFont :article="article" @like="openLike" @edit="openFormEdit" @comment="openComment"></cardFont>
                    </v-flex>
                    <dialog-comment :open="openDialogComment" @close="openDialogComment=!openDialogComment" :article="article" :articles="articles" v-if="$vuetify.breakpoint.smAndUp"></dialog-comment>
                    <xs-dialog-comment :open="openDialogComment" @close="openDialogComment=!openDialogComment" :article="article" v-else></xs-dialog-comment>
                    <dialog-like v-if="openDialogLike" :open="openDialogLike" @close="openDialogLike=!openDialogLike" :article="article"></dialog-like>
                    <dialog-form-edit :article="article" :open="dialogFormEdit" @close="dialogFormEdit=false"></dialog-form-edit>
                </v-layout>
            </v-container>
        </v-flex>
        <v-flex lg3 xs0></v-flex>
    </v-layout>
</template>

<script>
    import cardFont from '../card/CardFont.vue'
    import cardPublication from '../card/CardPublication.vue'
    import dialogComment from "../comment/DialogComment.vue"
    import dialogLike from "../like/DialogLike.vue"
    import dialogFormEdit from '../card/DialogFormEdit.vue'
    import xsDialogComment from '../comment/XsDialogComment.vue'
    export default{
        components:{cardFont,cardPublication,dialogComment,dialogLike,dialogFormEdit,xsDialogComment},
        data: ()=>({
            alert:true,
            openDialogComment: false,
            openDialogLike: false,
            dialogFormEdit: false,
            article: {},
            ready: true
        }),
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
                                this.$store.dispatch("query/save",{name:'home',next:response.body.next_page_url})
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
                    this.$http.get("/user/article").then(response=>{
                        if(typeof response.body === "object"){
                            let users = []
                            response.body.data.map(article=>{
                                users.push(article.user)
                                delete article.user
                            })
                            this.$store.dispatch("article/save", response.body.data)
                            this.$store.dispatch("users/save", users)
                            this.$store.dispatch("query/save",{name:'home',next:response.body.next_page_url})
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
        computed:{
            user(){
                return this.$store.state.user.user
            },
            msgFlash(){
                let msg = this.$store.state.msgFlash
                this.$store.dispatch("msgflash/delete")
                return msg
            },
            articles(){
                return this.$store.state.article.articles
            },
            end(){
                return this.$store.state.query.queries.find(e=>(e.name==="home" && !e.next))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==="home"))
            },
            scrollTop(){
                let scroll = this.$store.state.setting.scrollTops.find(e=>e.name==="home") || {}
                return scroll.scrollTop
            }
        },
        mounted(){
            this.load()
            document.body.scrollTop = this.scrollTop
        },
    }
</script>
