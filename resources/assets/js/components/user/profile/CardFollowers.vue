<template>
    <v-layout row wrap layout_block style="justify-content:space-between">
        <v-flex v-for="follower in followers" :key="follower.id" xs6>
            <v-card>
                <v-container fluid grid-list-lg>
                    <v-layout row>
                        <v-flex xs7>
                            <div>
                                <div class="headline"><a style="text-decoration: none" :href="'/#/user/profile/'+follower.id">{{follower.name+" "+follower.forename}}</a></div>
                                <br><br>
                                <div>
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
            }
        },
        methods:{
            load(){
                if(!this.query){
                    this.$http.get('/user/profile/'+this.profile.id+'/follower').then(response=>{
                        if(response.body instanceof Object){
                            this.followers = response.body.data
                            //this.$store.dispatch('users/addFollowers', {id:this.profile.id,data:response.body.data})
                            //this.$store.dispatch('query/save', {name:"cardFollower", id:this.profile.id})
                        }
                    })
                }
            },
            remove(user){
                this.$set(user, "loadingSubs",true)
                this.$http.delete("user/subscription/"+ user.followed.id).then(response=>{
                    if(response.body.status === 1){
                        user.loadingSubs = false
                        let index = this.followers.indexOf(this.followers.find(follower=>follower.id===user.id))
                        if(index>-1) this.followers.splice(index,1)
                        //this.$store.dispatch('users/unfollower', user.id)
                    }
                })
            },
        },
        mounted(){
            this.load()
        }
    }
</script>