<template>
    <v-container fluid md :style="$vuetify.breakpoint.smAndUp || 'padding:0;padding-top:8px'">
        <v-layout>
            <v-flex xs12 sm10 offset-sm1 offset-xs0>
                <v-card>
                    <v-container grid-list-md text-xs-center fluid>
                        <v-layout :column="!$vuetify.breakpoint.smAndUp" :row="$vuetify.breakpoint.smAndUp" wrap v-if="images.length>0">
                            <v-flex
                                    xs12
                                    lg4
                                    v-for="image,i in images"
                                    :key="i"
                            >
                                <v-card flat tile>
                                    <v-card-media
                                            :src="image.path"
                                            height="150px"
                                    >
                                    </v-card-media>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-layout column style="height: 200px" align-center justify-center v-else>
                            <h1>Album empty</h1>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default{
        data: ()=>({
            ready: true,
            images: []
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==="album" && e.id===this.$route.params.id))
            },
            profile(){
                return this.$store.state.users.users.find(user=>user.id===parseInt(this.$route.params.id))
            },
            end(){
                return this.$store.state.query.queries.find(e=>(e.name==="album" && !e.next && e.id===parseInt(this.$route.params.id)))
            },
            scrollTop(){
                let scroll = this.$store.state.setting.scrollTops.find(e=>e.name==="album") || {}
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
                                this.$store.dispatch("query/save",{name:'album',next:response.body.next_page_url,id:parseInt(this.$route.params.id)})
                                this.images.push(...response.body.data)
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
                    this.$http.get('/user/profile/'+this.$route.params.id+'/album').then(response=>{
                        if(response.body.data instanceof Object){
                            this.$store.dispatch("query/save",{name:'album',next:response.body.next_page_url,id:parseInt(this.$route.params.id)})
                            this.images = response.body.data
                        }
                        this.ready = true
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            }
        },
        mounted(){
            this.load()
            document.body.scrollTop = this.scrollTop
        },
        destroyed(){
            this.$store.dispatch('setting/addScrollTop',{scrollTop:document.body.scrollTop,name:"album"})
        },
        watch:{
            '$route.params.id'(){
                this.load()
            }
        }
    }
</script>