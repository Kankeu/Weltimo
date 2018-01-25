<template>
    <v-layout>
        <v-flex xs0 lg3></v-flex>
        <v-flex xs12 lg6>
            <v-container grid-list-md text-xs-center fluid>
                <v-layout v-scroll="{callback: this.loadMore}" column>
                    <v-flex lg12></v-flex>
                    <v-flex lg12 v-for="actuality,i in actualities" :key="i">
                        <actu-card :actuality="actuality" @comment="openComment"></actu-card>
                    </v-flex>
                    <dialog-comment :open="openDialogComment" @close="openDialogComment=!openDialogComment" :article="actuality" :articles="actualities"></dialog-comment>
                </v-layout>
            </v-container>
        </v-flex>
        <v-flex xs0 lg3></v-flex>
    </v-layout>
</template>

<script>
    import dialogComment from "../comment/DialogComment.vue"
    import actuCard from './actu/Card.vue'
    export default {
        components:{actuCard,dialogComment},
        data: () => ({
            ready: true,
            actuality: {},
            openDialogComment: false
        }),
        computed:{
            end(){
                return this.$store.state.query.queries.find(e=>(e.name==="actu" && !e.next))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==="actu"))
            },
            actualities(){
                return this.$store.state.article.articles.filter(article=>article.type==="actuality")
            },
            scrollTop(){
                let scroll = this.$store.state.setting.scrollTops.find(e=>e.name==="actuality") || {}
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
                                this.$store.dispatch("article/save", response.body.data)
                                this.$store.dispatch("query/save",{name:'actu',next:response.body.next_page_url})
                            }
                            this.$store.dispatch('setting/setLoading',false)
                            this.ready = true
                        })
                    }
                }
            },
            load(){
                if(!this.query && this.ready){
                    this.ready = false
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.get('/user/actuality').then(response=>{
                        if(typeof response.body === "object"){
                            this.$store.dispatch("article/save", response.body.data)
                            this.$store.dispatch("query/save",{name:'actu',next:response.body.next_page_url})
                        }
                        this.$store.dispatch('setting/setLoading',false)
                        this.ready = true
                    })
                }
            },
            openComment(actuality){
                this.openDialogComment = true
                this.actuality = actuality
            },
        },
        mounted(){
            this.load()
            document.body.scrollTop = this.scrollTop
        },
        destroyed(){
            this.$store.dispatch('setting/addScrollTop',{scrollTop:document.body.scrollTop,name:"actuality"})
        },
    }
</script>


