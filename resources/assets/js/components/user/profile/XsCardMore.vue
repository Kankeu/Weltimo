<template>
    <v-layout column>
        <v-flex lg12>Suggestion (s)</v-flex>
        <v-flex>
            <v-layout style="overflow-x: auto" row>
                <v-flex xs6 v-for="morePerson,i in morePersons" :key="i">
                    <v-card height="190px">
                        <v-avatar size="77px" @click="$router.push('/user/profile/'+morePerson.id)">
                            <img :src="morePerson.avatar">
                        </v-avatar>
                        <v-card-text>
                            {{morePerson.name+" "+morePerson.forename}}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                    :loading="morePerson.loadingSubs"
                                    :color="morePerson.followed ? null :'primary'"
                                    @click.stop.prevent="follow(morePerson)"
                                    v-if="user.id!==morePerson.id"
                                    slot="activator"
                                    outline
                            >
                                <v-icon v-if="!morePerson.followed">person_add</v-icon>{{morePerson.followed ? "Unfollow" : "Follow"}}
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
    export default{
        computed:{
            user(){
                return this.$store.state.user.user
            },
            morePersons(){
                return this.$store.state.users.users.filter(user=>user.tofollow===true)
            },
            query(){
                return this.$store.state.query.queries.find(e=>e.name==="whotofollow")
            },
            profile(){
                return this.$store.state.users.users.find(user=>user.id===parseInt(this.$route.params.id))
            }
        },
        methods:{
            loadMorePerson(){
                if(!this.query){
                    this.$http.get("/user/subscription/"+this.profile.id).then(response=>{
                        response.body.map(user=>{
                            user.tofollow = true
                        })
                        this.$store.dispatch('users/save',response.body)
                    })
                }
            },
            follow(user){
                this.$set(user, "loadingSubs",true)
                if(user.followed){
                    this.$http.delete("user/subscription/"+ user.followed.id).then(response=>{
                        if(response.body.status === 1){
                            this.$set(user, "loadingSubs",false)
                            this.$set(user,'followed',null)
                            this.$store.dispatch('users/removeFollowing', this.user)
                        }
                    })
                }else{
                    this.$http.post('user/subscription',{receiver_id:user.id}).then(response=>{
                        if(response.body.id){
                            this.$store.dispatch('users/addFollowing', this.user)
                            this.$set(user, "loadingSubs",false)
                            this.$set(user,'followed',response.body)
                        }
                    })
                }
            },
        },
        mounted(){
            this.loadMorePerson()
        },
        watch:{
            '$route.params.id'(){
                this.loadMorePerson()
            }
        }
    }
</script>