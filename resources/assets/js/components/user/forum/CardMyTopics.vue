<template>
    <v-card hover to="/forum/mytopics">
        <v-card-title :class="darked || 'grey lighten-2'">
            My topics
        </v-card-title>
        <v-divider></v-divider>
        <v-list style="max-height:220px;overflow: auto">
            <div v-for="topic in topics" :key="topic.id">
                <v-list-tile :to="'/forum/topic/'+topic.id">
                    <v-list-tile-content>
                        <v-list-tile-title>{{topic.title}}</v-list-tile-title>
                        <v-list-tile-sub-title>{{JSON.parse(topic.question)[0].text}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <div style="display: flex">
                            <div style="color:#1B95E0 !important;font-size: 20px">{{topic.topicresponses_count}}</div>
                            <small style="align-self:center;margin-left: 5px"><v-icon>message</v-icon></small>
                        </div>
                    </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
            </div>
        </v-list>
    </v-card>
</template>

<script>
    export default{
        computed:{
            darked(){
                return this.$store.state.setting.darked
            },
            end(){
                return this.$store.state.query.queries.find(e=>(e.name==='mytopics' && !e.next))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==='mytopics'))
            },
            user(){
                return this.$store.state.user.user
            },
            topics(){
                return this.$store.state.topic.topics.filter((topic,i)=>topic.user_id===this.user.id && i<3)
            },
        },
        methods:{
            load(){
                if(!this.query){
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.get('/user/forum/mytopics').then(response=>{
                        if(typeof response.body.data[0] === "object"){
                            let users = []
                            let categories = []
                            response.body.data.map(topic=>{
                                users.push(topic.user)
                                delete topic.user
                                this.$store.dispatch("category/save", topic.categories)
                                delete topic.categories
                            })
                            this.$store.dispatch("topic/save", response.body.data)
                            this.$store.dispatch("category/save", categories)
                            this.$store.dispatch("users/save", users)
                            this.$store.dispatch("query/save",{name:'mytopics',next:response.body.next_page_url})
                        }
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            }
        },
        mounted(){
            this.load()
        }
    }
</script>