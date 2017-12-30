
<template>
    <v-layout row wrap layout_block style="justify-content:space-between">
        <v-flex v-for="following in followings" :key="following.id" xs6>
            <v-card>
                <v-container fluid grid-list-lg>
                    <v-layout row>
                        <v-flex xs7>
                            <div>
                                <div class="headline"><a style="text-decoration: none" :href="'/#/user/profile/'+following.id">{{following.name+" "+following.forename}}</a></div>
                                <br><br>
                                <div>
                                    <v-tooltip top>
                                        <v-btn
                                                :loading="following.loadingSubs"
                                                :color="following.followed ? null :'primary'"
                                                @click.stop.prevent="follow(following)"
                                                v-if="following.followed"
                                                slot="activator"
                                                outline
                                        >
                                            <v-icon v-if="!following.followed">person_add</v-icon>{{following.followed ? "Unfollow" : "Follow"}}
                                        </v-btn>
                                        <span v-if="!following.followed">Click here to unfollow</span><span v-else>Click here to follow</span>
                                    </v-tooltip>
                                </div>
                            </div>
                        </v-flex>
                        <v-flex xs5>
                            <v-card-media
                                    :src="following.avatar"
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
            return {
                followings: []
            }
        },
        computed:{
            user(){
                return this.$store.state.user.user
            },
            query(){
                return this.$store.state.query.queries.find(e=>e.name==="cardFollowing" && e.id===this.profile.id)
            },
            profile(){
                return this.$store.state.users.users.find(user=>user.id===parseInt(this.$route.params.id))
            }
        },
        methods:{
            load(){
                if(!this.query){
                    this.$http.get('/user/profile/'+this.profile.id+'/following').then(response=>{
                        if(response.body instanceof Object){
                            this.followings = response.body.data
                           // this.$store.dispatch('users/addFollowing', {id:this.profile.id,data:response.body.data})
                            //this.$store.dispatch('query/save', {name:"cardFollowing", id:this.profile.id})
                        }
                    })
                }
            },
            follow(user){
                this.$set(user, "loadingSubs",true)
                if(user.followed){
                    this.$http.delete("user/subscription/"+ user.followed.id).then(response=>{
                        if(response.body.status === 1){
                            this.$set(user, "loadingSubs",false)
                            let index = this.followings.indexOf(this.followings.find(following=>following.id===user.id))
                            if(index>-1) this.followings.splice(index,1)
                            //this.$store.dispatch('users/unfollow', user.id)
                        }
                    })
                }else{
                    this.$http.post('user/subscription',{receiver_id:user.id}).then(response=>{
                        if(response.body.id){
                             this.followings.unshift(response.body)
                            //this.$store.dispatch('users/follow', {id:user.id,followed:response.body})
                            this.$set(user, "loadingSubs",false)
                        }
                    })
                }
            },
        },
        mounted(){
            this.load()
        }
    }
</script>