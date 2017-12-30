<template>
    <v-layout layout_bloc row>
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
                        <cardFont :article="article" @comment="open"></cardFont>
                    </v-flex>
                    <dialog-comment :open="openDialogComment" @close="openDialogComment=!openDialogComment" :article="article" :articles="articles"></dialog-comment>
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
    export default{
        components:{cardFont,cardPublication,dialogComment},
        data: ()=>({
            alert:true,
            openDialogComment: false,
            article: {}
        }),
        methods:{
            load(){
                if(!this.query){
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.get("user/article").then(response=>{
                        if(response.body[0] && typeof response.body === "object"){
                            let users = []
                            response.body.map(article=>{
                                users.push(article.user)
                                delete article.user
                            })
                            this.$store.dispatch("article/save", response.body)
                            this.$store.dispatch("users/save", users)
                            this.$store.dispatch("query/save",{name:'home',id:this.user.id})
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
        computed:{
            user(){
                return this.$store.state.user.user
            },
            query(){
                return this.$store.state.query.queries.find(e=>e.name==="home")
            },
            msgFlash(){
                let msg = this.$store.state.msgFlash
                this.$store.dispatch("msgflash/delete")
                return msg
            },
            articles(){
                return this.$store.state.article.articles
            },
        },
        mounted(){
            this.load()
        }
    }
</script>


<style>
    .layout_bloc{
        margin-top: 60px !important;
    }
</style>