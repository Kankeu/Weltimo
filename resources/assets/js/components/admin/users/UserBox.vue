<template>
    <v-layout column>
        <v-flex>
            <v-card class="elevation-0">
                <v-toolbar class="elevation-0" style="background: none">
                    <v-toolbar-title class="text-xs-center">About me</v-toolbar-title>
                </v-toolbar>
                <v-list subheader>
                    <v-subheader>Bio</v-subheader>
                    <v-list-tile>
                        <v-list-tile-avatar >
                            Name:
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            {{profile.name+" "+profile.forename}}
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
        <v-flex>
            <v-card class="elevation-0">
                <v-toolbar class="elevation-0" style="background: none">
                    <v-toolbar-title class="text-xs-center">Activities</v-toolbar-title>
                </v-toolbar>
                <v-layout row wrap>
                    <v-flex lg4>
                        <v-btn flat color="teal">Followers</v-btn>
                        <v-progress-circular
                                v-bind:size="100"
                                v-bind:width="15"
                                v-bind:rotate="360"
                                v-bind:value="profile.followers_count*100"
                                color="teal"
                        >
                            {{ profile.followers_count }}
                        </v-progress-circular>
                    </v-flex>
                    <v-flex lg4>
                        <v-btn flat color="primary">Following</v-btn>
                        <v-progress-circular
                                v-bind:size="100"
                                v-bind:width="15"
                                v-bind:rotate="360"
                                v-bind:value="profile.following_count*100"
                                color="primary"
                        >
                            {{ profile.following_count }}
                        </v-progress-circular>
                    </v-flex>
                    <v-flex lg4>
                        <v-btn flat color="red">Articles</v-btn>
                        <v-progress-circular
                                v-bind:size="100"
                                v-bind:width="15"
                                v-bind:rotate="360"
                                v-bind:value="profile.articles_count*100"
                                color="red"
                        >
                            {{ profile.articles_count }}
                        </v-progress-circular>
                    </v-flex>
                    <v-flex lg4>
                        <v-btn flat color="pink">Likes</v-btn>
                        <v-progress-circular
                                v-bind:size="100"
                                v-bind:width="15"
                                v-bind:rotate="360"
                                v-bind:value="profile.likes_count*100"
                                color="pink"
                        >
                            {{ profile.likes_count }}
                        </v-progress-circular>
                    </v-flex>
                    <v-flex lg4>
                        <v-btn flat color="cyan">Comments</v-btn>
                        <v-progress-circular
                                v-bind:size="100"
                                v-bind:width="15"
                                v-bind:rotate="360"
                                v-bind:value="profile.comments_count*100"
                                color="cyan"
                        >
                            {{ profile.comments_count }}
                        </v-progress-circular>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default{
        props:{
            user: Object
        },
        data(){
            return {
                profile: {}
            }
        },
        mounted(){
            this.$http.get('/admin/user/'+this.user.id).then(response=>{
                this.profile = response.body
            })
        }
    }
</script>

<style scoped>
    .progress-circular{
        margin: 1em;
    }
</style>