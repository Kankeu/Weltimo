<template>
    <v-card flat  v-scroll="{callback: this.loadMore}" height="auto">
        <v-toolbar flat>
            <v-toolbar-title>List of requests</v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
            <request @click.native="openBoxMessage(boxmessage)" :boxmessage="boxmessage" v-for="boxmessage in boxmessages" :key="boxmessage.id"></request>
        </v-list>
        <v-layout style="height: 300px;align-items: center" v-if="ready && boxmessages.length===0">
            <v-flex style="text-align: center;"><h2>No Request (for all pre-registrations or anything else please consult the section germain and some universities)</h2></v-flex>
        </v-layout>
        <dialog-message :open="openDialogMessage" @close="openDialogMessage=!openDialogMessage" :boxmessage="boxmessage" :boxmessages="boxmessages" v-if="$vuetify.breakpoint.smAndUp"></dialog-message>
    </v-card>
</template>

<script>
    import request from './Request.vue'
    import dialogMessage from './DialogMessage.vue'
    export default{
        components:{request,dialogMessage},
        data: ()=>({
            ready: true,
            openDialogMessage: false,
            boxmessage: {}
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            boxmessages(){
                return this.$store.state.boxmessage.boxmessages
            },
            end(){
                return this.$store.state.query.queries.find(e=>(e.name==="sentmessage" && !e.next))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==="sentmessage"))
            },
            scrollTop(){
                let scroll = this.$store.state.setting.scrollTops.find(e=>e.name==="sentmessage") || {}
                return scroll.scrollTop
            },
        },
        methods:{
            loadMore(){
                if((window.innerHeight + window.scrollY) >= document.body.offsetHeight-600){
                    if(!this.end && this.ready){
                        this.ready = false
                        this.$store.dispatch('setting/setLoading',true)
                        this.$http.get(this.query.next).then(response=>{
                            if(Array.isArray(response.body.data)){
                                let users = []
                                response.body.data.map(boxmessage=>{
                                    users.push(boxmessage.user)
                                    delete boxmessage.user
                                })
                                this.$store.dispatch("boxmessage/save", response.body.data)
                                this.$store.dispatch("users/save", users)
                                this.$store.dispatch("query/save",{name:'sentmessage',next:response.body.next_page_url})
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
                    let url = this.user.role==="admin" ? '/admin/request' : '/user/request'
                    this.$http.get(url).then(response=>{
                        if(Array.isArray(response.body.data)){
                            let users = []
                            response.body.data.map(boxmessage=>{
                                users.push(boxmessage.user)
                                delete boxmessage.user
                            })
                            this.$store.dispatch("boxmessage/save", response.body.data)
                            this.$store.dispatch("users/save", users)
                            this.$store.dispatch("query/save",{name:'sentmessage',next:response.body.next_page_url})
                        }
                        this.ready = true
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            },
            openBoxMessage(boxmessage){
                this.openDialogMessage = true
                this.boxmessage = boxmessage
            }
        },
        mounted(){
            this.load()
            document.body.scrollTop = this.scrollTop
        },
    }
</script>