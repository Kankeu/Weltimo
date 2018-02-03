<template>
    <v-layout row wrap :style="$vuetify.breakpoint.smAndUp ? 'margin-top:50px'  : 'justify-content:space-between;'">
        <v-flex v-for="follower in followers" :key="follower.id" xs12 lg6>
            <v-card>
                <v-container :style="$vuetify.breakpoint.smAndUp || 'padding:0;padding-top:8px'" fluid grid-list-lg>
                    <v-layout row>
                        <v-flex xs7>
                            <div>
                                <div class="headline"><a style="text-decoration: none" :href="'/#/user/profile/'+follower.id">{{follower.name+" "+follower.forename}}</a></div>
                                <br><br>
                                <div>
                                    <v-btn
                                            :loading="follower.loadingSubs"
                                            :color="follower.followed ? null :'primary'"
                                            @click.stop.prevent="follow(follower)"
                                            v-if="user.id!==follower.id && !follower.followed"
                                            slot="activator"
                                            outline
                                    >
                                        <v-icon v-if="!follower.followed">person_add</v-icon>{{follower.followed ? "Unfollow" : "Follow"}}
                                    </v-btn>
                                    <v-tooltip top>
                                        <v-btn
                                                :loading="follower.loadingSubs"
                                                color="danger"
                                                @click.stop.prevent="remove(follower)"
                                                slot="activator"
                                                v-if="profile.id===user.id"
                                                outline
                                        >
                                            <v-icon>delete</v-icon>Delete
                                        </v-btn>
                                        <span>Click here to remove of followers list</span>
                                    </v-tooltip>
                                </div>
                            </div>
                        </v-flex>
                        <v-flex xs5>
                            <v-card-media
                                    :src="follower.avatar"
                                    height="125px"
                                    contain
                            ></v-card-media>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default{
        data(){
            return{
                followers: []
            }
        },
        computed:{
            user(){
                return this.$store.state.user.user
            },
            query(){
                return this.$store.state.query.queries.find(e=>e.name==="cardFollower")
            },
            profile(){
                return this.$store.state.users.users.find(user=>user.id===parseInt(this.$route.params.id))
            },
            scrollTop(){
                let scroll = this.$store.state.setting.scrollTops.find(e=>e.name==="cardFollower") || {}
                return scroll.scrollTop
            }

        },
        methods:{
            load(){
                if(!this.query){
                    this.$http.get('/user/profile/'+this.profile.id+'/follower').then(response=>{
                        if(response.body instanceof Object){
                            this.followers = response.body.data
                            this.$nextTick(()=> document.body.scrollTop = this.scrollTop)
                        }
                    })
                }
            },
            remove(user){
                this.$set(user, "loadingSubs",true)
                this.$http.delete("user/deletefollower/"+ user.id).then(response=>{
                    if(response.body.status === 1){
                        user.loadingSubs = false
                        let index = this.followers.indexOf(this.followers.find(follower=>follower.id===user.id))
                        if(index>-1) this.followers.splice(index,1)
                        this.$store.dispatch('users/removeFollower', this.user)
                    }
                })
            },
            follow(user){
                this.$set(user, "loadingSubs",true)
                this.$http.post('user/subscription',{receiver_id:user.id}).then(response=>{
                    if(response.body.id){
                        user.followed = response.body
                        this.$store.dispatch('users/addFollowing', this.user)
                        this.$set(user, "loadingSubs",false)
                    }
                })
            }
        },
        mounted(){
            this.load()
            document.body.scrollTop = this.scrollTop
        },
        destroyed(){
            this.$store.dispatch('setting/addScrollTop',{scrollTop:document.body.scrollTop,name:"cardFollower"})
        },
    }
</script>