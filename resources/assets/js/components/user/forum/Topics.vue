<template>
    <v-card flat  v-scroll="{callback: this.loadMore}" height="auto">
        <v-card-title class="headline">
            {{$route.params.type}} {{plural('topic',topics.length)}}
        </v-card-title>
        <v-divider></v-divider>
        <v-list two-line>
            <div v-for="topic in topics" :key="topic.id">
                <topic :topic="topic"></topic>
                <v-divider></v-divider>
            </div>
        </v-list>
    </v-card>
</template>

<script>
    import topic from './Topic'
    export default{
        components:{topic},
        data: ()=>({
            ready: true
        }),
        computed:{
            end(){
                return this.$store.state.query.queries.find(e=>(e.name===this.name && !e.next))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name===this.name))
            },
            topics(){
                return this.$store.state.topic.topics
            },
            name(){
                return 'topics'+this.$route.params.type
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
                                response.body.data.map(topic=>{
                                    users.push(topic.user)
                                    delete topic.user
                                })
                                let categories = topic.categories
                                delete topic.categories
                                this.$store.dispatch("topic/save", response.body.data)
                                this.$store.dispatch("category/save", categories)
                                this.$store.dispatch("users/save", users)
                                this.$store.dispatch("query/save",{name:this.name,next:response.body.next_page_url})
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
                    this.$http.get('/user/forum/'+this.$route.params.type).then(response=>{
                        if(typeof response.body.data[0] === "object"){
                            let users = []
                            response.body.data.map(topic=>{
                                users.push(topic.user)
                                delete topic.user
                                this.$store.dispatch("category/save", topic.categories)
                                delete topic.categories
                            })
                            this.$store.dispatch("topic/save", response.body.data)
                            this.$store.dispatch("users/save", users)
                            this.$store.dispatch("query/save",{name:this.name,next:response.body.next_page_url})
                        }
                        this.ready = true
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            },
        },
        mounted(){
            this.load()
        },
        watch:{
            '$route.params.type'(data){
                this.load()
            }
        }
    }
</script>