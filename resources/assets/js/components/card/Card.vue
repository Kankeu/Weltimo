<template>
    <div>
        <v-card>
            <v-card-actions>
                <v-avatar
                        size="40px"
                >
                    <img :src="user.avatar" @click="article.popover = true" alt="avatar">
                </v-avatar>
                <v-layout style="margin-left: 4px;text-align:left;font-family:monospace" column>
                    <v-flex style="padding:0">
                        <b>Bob Job</b>
                    </v-flex>
                    <v-flex style="padding:0">
                        <small>12 Fevrier 2016</small>
                    </v-flex>
                </v-layout>
                <v-spacer></v-spacer>
                <v-btn @click.native="article.menu = true" icon>
                    <v-icon>more_horiz</v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-media
                    height="400px"
                    :src="'/img/articles/'+article.n+'.jpg'"
            >
            </v-card-media>
            <v-card-title primary-title>
                <div>
                    <div style="font-size: 17px">Top western road trips</div>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn flat icon>
                    <v-icon v-if="article.like" class="red--text">favorite</v-icon>
                    <v-icon v-else>favorite_border</v-icon>
                </v-btn>
                <v-btn flat icon><v-icon>comment</v-icon></v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click.native="article.show = !article.show">
                    <v-icon>{{ article.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
                <v-card-text v-show="article.show" style="text-align: left">
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
            </v-slide-y-transition>
        </v-card>
        <v-menu
                offset-x
                :close-on-content-click="false"
                :nudge-width="200"
                v-model="article.popover"
        >
            <v-card>
                <v-list>
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img :src="user.avatar" alt="avatar">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>John Leider</v-list-tile-title>
                            <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn
                                    icon
                                    :class="article.fav ? 'blue--text' : ''"
                                    @click.native="article.fav = !article.fav"
                            >
                                <v-icon>person_add</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
                <v-divider></v-divider>
            </v-card>
        </v-menu>
        <v-menu v-model="article.menu">
            <v-list>
                <v-list-tile>
                    <v-list-tile-title><v-icon>share</v-icon> Partager</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-title><v-icon>trash</v-icon> Delete</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-title>Masquer</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-title><v-icon>info</v-icon> Signaler</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default{
        props:{
            article: Object
        },
        data: ()=>({

        }),
        computed:{
            user(){
                return this.$store.state.user.user
            }
        }
    }
</script>