<template>
    <v-container grid-list-lg fluid  v-scroll="{callback: this.loadMoreResponses}" v-if="topic.id">
        <v-layout column>
            <v-flex lg12>
                <header-show-topic :topic="topic"></header-show-topic>
            </v-flex>
            <v-flex lg12>
                <h2 style="font-size: 21px;font-weight: 700;line-height: 1.2;">{{topic.topicresponses_count}} {{plural('Response',topic.topicresponses_count)}}</h2>
            </v-flex>
            <v-flex v-if="topicresponses.length>5" lg12>
                <forum-form></forum-form>
            </v-flex>
            <v-flex lg12>
                <v-layout column>
                    <v-flex v-for="topicresponse in topicresponses" :key="topicresponse.id" lg12>
                        <blockquote :id="topicresponse.id===parseInt($route.params.response_id) ? 'showTopicResponse' : null">
                            <topic-response :topicresponse="topicresponse"></topic-response>
                        </blockquote>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex lg12>
                <forum-form></forum-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import headerShowTopic from './HeaderShowTopic.vue'
    import topicResponse from './TopicResponse.vue'
    import forumForm from './ForumForm.vue'
    export default{
        components:{topicResponse,headerShowTopic,forumForm},
        data: ()=>({
            ready: true,
        }),
        computed:{
            end(){
                return this.$store.state.query.queries.find(e=>(e.name==='showTopic' && !e.next && e.id===parseInt(this.$route.params.id)))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==='showTopic' && e.id===parseInt(this.$route.params.id)))
            },
            topic(){
                return this.$store.state.topic.topics.find(topic=>topic.id===parseInt(this.$route.params.id)) || {}
            },
            topicresponses(){
                return this.$store.state.topicresponse.topicresponses.filter(topicresponse=>topicresponse.topic_id===this.topic.id)
            },
            owner(){
                return this.$store.state.users.users.find(user=>user.id===this.topic.user_id) || {}
            },
            user(){
                return this.$store.state.user.user
            }
        },
        methods:{
            loadMoreResponses(){
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
                                this.$store.dispatch("topicresponse/save", response.body.data)
                                this.$store.dispatch("users/save", users)
                                this.$store.dispatch("query/save",{name:'showTopic',next:response.body.next_page_url,id:parseInt(this.$route.params.id)})
                            }
                            this.ready = true
                            this.$store.dispatch('setting/setLoading',false)
                        })
                    }
                }
            },
            loadResponses(){
                if(!this.query && this.ready){
                    this.ready = false
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.get('/user/forum/topic/'+this.$route.params.id+'/topicresponse').then(response=>{
                        if(Array.isArray(response.body.data)){
                            let users = []
                            response.body.data.map(topic=>{
                                users.push(topic.user)
                                delete topic.user
                            })
                            this.$store.dispatch("topicresponse/save", response.body.data)
                            this.$store.dispatch("users/save", users)
                            this.$store.dispatch("query/save",{name:'showTopic',next:response.body.next_page_url,id:parseInt(this.$route.params.id)})
                            this.$nextTick(()=>{
                                if(this.$route.params.response_id){
                                    document.querySelector('#topicresponse'+this.$route.params.response_id).scrollIntoView(false)
                                }
                            })
                        }
                        this.ready = true
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            },
            load(){
                if(!this.query && this.ready){
                    this.ready = false
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.get('/user/forum/topic/'+this.$route.params.id).then(response=>{
                        this.ready = true
                        if(typeof response.body === "object"){
                            let user = response.body.user
                            delete response.body.user
                            let categories = response.body.categories
                            delete response.body.categories
                            this.$store.dispatch("topic/save", response.body)
                            this.$store.dispatch("category/save", categories)
                            this.$store.dispatch("users/save", user)
                            this.loadResponses()
                        }
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            },
        },
        mounted(){
            this.load()
            window.temp = this
        },
        watch:{
            '$route.params.id'(data){
                this.load()
            },
            '$route.params.response_id'(data){
                if(data){
                    document.querySelector('#topicresponse'+this.$route.params.response_id).scrollIntoView(false)
                }
            }
        }
    }
</script>

<style scoped>
    #showTopicResponse {
        padding-left: 10px;
        margin-left: -10px;
        border-left: 5px solid turquoise;
    }
</style>

<style>
    .elt_topic {
        color: #404852 !important;
        font-family: "Open Sans";
        font-size: 15px !important;
        font: status-bar;
    }
</style>
