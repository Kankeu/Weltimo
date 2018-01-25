<template>
    <v-container grid-list-md text-xs-center fluid>
        <v-layout column>
            <v-flex lg12>
                <v-card>
                    <v-toolbar>
                        <v-toolbar-title class="text-xs-center">About me</v-toolbar-title>
                    </v-toolbar>
                    <v-list style="text-align: left" subheader>
                        <v-list-tile class="list__item">
                            <v-list-tile-avatar >
                                Name:
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                {{profile.name+" "+profile.forename}}
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile class="list__item" v-if="profile.role==='admin' || profile.title">
                            <v-list-tile-content>
                                {{(profile.role==="admin") ? "Founder of Weltimo" : profile.title}}
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-subheader v-if="profile.biography" style="display: inherit;margin-bottom: 10px"><span style=" color: black;font-weight: 400;">Biography: </span>{{profile.biography}}</v-subheader>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex lg12>
                <v-card>
                    <v-toolbar :color="(darked) ? null : 'primary'" dark>
                        <v-toolbar-title class="text-xs-center">Suggestions</v-toolbar-title>
                    </v-toolbar>
                    <v-list v-if="morePersons.length>0" subheader>
                        <v-subheader>Who to follow</v-subheader>
                        <v-menu
                                v-for="morePerson in morePersons" :key="morePerson.id"
                                right
                                offset-x
                                :close-on-content-click="false"
                                open-on-hover
                                style="width:100%"
                        >
                            <v-list-tile slot="activator" avatar :to="'/user/profile/'+morePerson.id">
                                <v-list-tile-avatar >
                                    <img v-bind:src="morePerson.avatar"/>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{morePerson.name+" "+morePerson.forename}}</v-list-tile-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
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
                                </v-list-tile-action>
                            </v-list-tile>
                            <v-card>
                                <v-list>
                                    <v-list-tile avatar :to="'/user/profile/'+morePerson.id">
                                        <v-list-tile-avatar>
                                            <img :src="morePerson.avatar" alt="avatar">
                                        </v-list-tile-avatar>
                                        <v-list-tile-content>
                                            <v-list-tile-title>{{morePerson.name+" "+morePerson.forename}}</v-list-tile-title>
                                            <v-list-tile-sub-title v-if="morePerson.role==='admin'">Founder of Weltimo</v-list-tile-sub-title>
                                            <v-list-tile-sub-title v-else></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                        <v-list-tile-action>
                                            <v-btn
                                                    icon
                                                    :class="morePerson.followed ? 'blue--text' : ''"
                                                    @click.native.stop.prevent="follow(morePerson)"
                                            >
                                                <v-icon>person_add</v-icon>
                                            </v-btn>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                </v-list>
                                <v-divider></v-divider>
                                <v-avatar
                                        size="200px"
                                        :tile="true"
                                        class="menuCover"
                                >
                                    <img :src="morePerson.cover" alt="cover picture">
                                </v-avatar>
                            </v-card>
                        </v-menu>
                    </v-list>
                    <v-divider></v-divider>
                    <v-list subheader>
                        <v-subheader>Universities</v-subheader>
                        <v-list-tile avatar target="_blank" href="https://www.tu-ilmenau.de">
                            <v-list-tile-avatar>
                                <img src="https://www.tu-ilmenau.de/fileadmin/startseite/Fotos_330x614px5.jpg"/>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>TU-Ilmenau</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default{
        computed:{
            user(){
                return this.$store.state.user.user
            },
            darked(){
                return this.$store.state.setting.darked
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

<style>
    .list__item div{
        align-items: baseline !important;
        height: 100% !important;
        margin-top: 10px;
        text-align: center;
    }
</style>
