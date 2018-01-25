<template>
    <v-list-tile style=" display: flex;flex-wrap: wrap;justify-content: center" :to="'/user/profile/'+liker.id" avatar>
        <v-list-tile-avatar>
            <img :src="liker.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
            {{liker.name+" "+liker.forename}}
        </v-list-tile-content>
        <v-list-tile-action >
            <v-btn
                    :loading="liker.loadingSubs"
                    :color="liker.followed ? null :'primary'"
                    @click.stop.prevent="follow(liker)"
                    v-if="user.id!==liker.id"
                    slot="activator"
                    style="width: 113px"
                    outline
            >
                <v-icon v-if="!liker.followed">person_add</v-icon>{{liker.followed ? "Unfollow" : "Follow"}}
            </v-btn>
        </v-list-tile-action>
    </v-list-tile>
</template>

<script>
    export default{
        props:{
            like: Object
        },
        computed:{
            liker(){
                return this.$store.state.users.users.find(user=>user.id===this.like.user_id)
            },
            user(){
                return this.$store.state.user.user
            },

        },
        methods:{
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
        }
    }
</script>