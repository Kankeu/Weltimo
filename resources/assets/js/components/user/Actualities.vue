<template>
    <v-layout>
        <v-flex xs0 sm2 lg3></v-flex>
        <v-flex xs12 sm8 lg6>
            <v-container grid-list-md text-xs-center fluid>
                <v-layout v-scroll="{callback: this.loadMore}" v-if="actualities.length>0" column>
                    <v-flex lg12></v-flex>
                    <v-flex lg12 v-for="actuality,i in actualities" :key="i">
                        <actu-card :actuality="actuality"  @like="openLike" @edit="openFormEdit" @comment="openComment"></actu-card>
                    </v-flex>
                    <dialog-comment :open="openDialogComment" @close="openDialogComment=!openDialogComment" :article="actuality" :articles="actualities" v-if="$vuetify.breakpoint.smAndUp"></dialog-comment>
                    <xs-dialog-comment :open="openDialogComment" @close="openDialogComment=!openDialogComment" :article="actuality" v-else></xs-dialog-comment>
                    <dialog-like v-if="openDialogLike" :open="openDialogLike" @close="openDialogLike=!openDialogLike" :article="actuality"></dialog-like>
                    <dialog-form-edit :article="actuality" :open="dialogFormEdit" @close="dialogFormEdit=false"></dialog-form-edit>
                </v-layout>
                <v-layout column style="height: 200px" align-center justify-center v-else>
                    <h1>No actualities</h1>
                </v-layout>
            </v-container>
        </v-flex>
        <v-flex xs0 sm2 lg3></v-flex>
    </v-layout>
</template>

<script>
    import dialogComment from "../comment/DialogComment.vue"
    import dialogLike from "../like/DialogLike.vue"
    import dialogFormEdit from '../card/DialogFormEdit.vue'
    import xsDialogComment from '../comment/XsDialogComment.vue'
    import actuCard from './actu/Card.vue'
    export default {
        components:{actuCard,dialogComment,dialogLike,dialogFormEdit,xsDialogComment},
        data: () => ({
            ready: true,
            actuality: {},
            openDialogComment: false,
            openDialogLike: false,
            dialogFormEdit: false,
        }),
        computed:{
            end(){
                return this.$store.state.query.queries.find(e=>(e.name==="actualities" && !e.next))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==="actualities"))
            },
            actualities(){
                return this.$store.state.actuality.actualities.filter(actuality=>actuality.type==="actuality")
            },
            scrollTop(){
                let scroll = this.$store.state.setting.scrollTops.find(e=>e.name==="actualities") || {}
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
                                this.$store.dispatch("actuality/save", response.body.data)
                                this.$store.dispatch("query/save",{name:'actualities',next:response.body.next_page_url})
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
                            this.$store.dispatch("actuality/save", response.body.data)
                            this.$store.dispatch("query/save",{name:'actualities',next:response.body.next_page_url})
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
            openLike(actuality){
                this.openDialogLike = true
                this.actuality = actuality
            },
            openFormEdit(actuality){
                this.dialogFormEdit = true
                this.actuality = actuality
            }
        },
        mounted(){
            this.load()
            document.body.scrollTop = this.scrollTop
        },
    }
</script>


