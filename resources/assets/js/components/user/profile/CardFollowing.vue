
<template>
    <v-layout row wrap :style="$vuetify.breakpoint.smAndUp ? 'margin-top:50px'  : 'justify-content:space-between;'">
        <v-flex v-for="following in followings" :key="following.id" xs12 lg6>
            <v-card>
                <v-container :style="$vuetify.breakpoint.smAndUp || 'padding:0;padding-top:8px'" fluid grid-list-lg>
                    <v-layout row>
                        <v-flex xs7>
                            <div>
                                <div class="headline"><a style="text-decoration: none" :href="'/#/profile/'+following.id">{{following.name+" "+following.forename}}</a></div>
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
            },
            scrollTop(){
                let scroll = this.$store.state.setting.scrollTops.find(e=>e.name==="cardFollowing") || {}
                return scroll.scrollTop
            }
        },
        methods:{
            load(){
                if(!this.query){
                    this.$http.get('/user/profile/'+this.profile.id+'/following').then(response=>{
                        if(response.body instanceof Object){
                            this.followings = response.body.data
                            this.$nextTick(()=> document.body.scrollTop = this.scrollTop)
                        }
                    })
                }
            },
            follow(user){
                this.$set(user, "loadingSubs",true)
                if(user.followed){
                    this.$http.get("user/unfollow/"+ user.id).then(response=>{
                        if(response.body.status === 1){
                            this.$set(user, "loadingSubs",false)
                            let index = this.followings.indexOf(this.followings.find(following=>following.id===user.id))
                            if(index>-1) this.followings.splice(index,1)
                            this.$store.dispatch('users/removeFollowing', this.user)
                        }
                    })
                }
            },
        },
        mounted(){
            this.load()
            document.body.scrollTop = this.scrollTop
        },
        destroyed(){
            this.$store.dispatch('setting/addScrollTop',{scrollTop:document.body.scrollTop,name:"cardFollowing"})
        },
    }
</script>