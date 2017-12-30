<template>
    <div>
        <v-card class="cardFont">
            <v-card-actions>
                <v-menu
                        offset-x
                        :close-on-content-click="false"
                        :nudge-width="200"
                        open-on-hover
                >
                    <v-avatar
                            size="40px"
                            slot="activator"
                    >
                        <img :src="owner.avatar" alt="avatar">
                    </v-avatar>
                    <v-card>
                        <v-list>
                            <v-list-tile avatar :to="'/user/profile/'+owner.id">
                                <v-list-tile-avatar>
                                    <img :src="owner.avatar" alt="avatar">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{owner.name+" "+owner.forename}}</v-list-tile-title>
                                    <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <v-btn
                                            icon
                                            v-if="user.id!==owner.id"
                                            :class="owner.followed ? 'blue--text' : ''"
                                            @click.native.stop.prevent="follow(owner)"
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
                            <img :src="owner.cover" alt="cover picture">
                        </v-avatar>
                    </v-card>
                </v-menu>
                <v-layout style="margin-left: 4px;text-align:left;font-family:monospace" column>
                    <v-flex style="padding:0">
                        <b style="font-weight:100">{{owner.name+" "+owner.forename}}</b>
                    </v-flex>
                    <v-flex style="padding:0">
                        <small><timeago :since="article.created_at" :auto-update="61" :max-time="86400 * 365"></timeago></small>
                    </v-flex>
                </v-layout>
                <v-spacer></v-spacer>
                <v-menu>
                    <v-btn slot="activator" icon>
                        <v-icon>more_horiz</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile @click="">
                            <v-list-tile-action>
                                <v-icon>share</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Partager</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile  @click="" v-if="user.id===owner.id">
                            <v-list-tile-action>
                                <v-icon>edit</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Edit</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile  @click="masquer">
                            <v-list-tile-action>
                                <v-icon>cancel</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Masquer</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile  @click="">
                            <v-list-tile-action>
                                <v-icon>info</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Signaler</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile  @click="destroy" v-if="user.id===owner.id">
                            <v-list-tile-action>
                                <v-icon>delete</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Delete</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-card-actions>
            <div style="width:100%;text-align: left;padding-left: 10px;padding-right:10px" v-if="article.image">
                <span v-for="message,i in JSON.parse(article.message)" :key="i">{{message.text}}<span  v-if="message.url"><img :src="message.url" style="margin-bottom:-5px;height: 30px;width: 30px"></span></span>
            </div>
            <v-card-media :src="(article.image) ? article.image.path : ''" :class="article.image ? null : article.color" :style="(darked) ? 'color:white !important' : null" height="378px">
                <div style="width:100%;text-align: center;" v-if="!article.image">
                    <span v-for="message,i in JSON.parse(article.message)" :key="i">{{message.text}}<span  v-if="message.url"><img :src="message.url" style="margin-bottom:-5px;height: 30px;width: 30px"></span></span>
                </div>
            </v-card-media>
            <v-card-actions style="justify-content:space-between">
                <v-menu
                    :open-on-hover="true"
                    :close-on-content-click="true"
                    :nudge-left="133"
                    :nudge-top="103"
                    origin="center center"
                    transition="scale-transition"
                    style="font-size:16px"
                    offset-y
                    offset-x
                    :dark="true"
                >
                    <div  slot="activator" style="display:flex;align-items: center">
                    <v-btn v-if="facemotion" @click.native="deleteLike" icon><div dato-descripcion="alegre" id-referencia="1513812312742" :class="'Selector selectorFace '+facemotion"></div></v-btn>
                    <v-btn flat icon v-if="!facemotion" @click.native="like($event,'amo')"><v-icon>favorite_border</v-icon></v-btn> &nbsp; <a>{{text ? text :'Love'}} </a>
                    </div>
                    <div class="faceMocion" @click="like">
                        <div class="amo" dato-descripcion="Love"></div>
                        <div class="gusta" dato-descripcion="Like"></div>
                        <div class="divierte" dato-descripcion="Haha"></div>
                        <div class="asombro" dato-descripcion="Wow"></div>
                        <div class="alegre" dato-descripcion="Glad"></div>
                        <div class="asusta" dato-descripcion="Bother"></div>
                        <div class="triste" dato-descripcion="Sad"></div>
                        <div class="molesto" dato-descripcion="Angry"></div>
                    </div>
                </v-menu>
                <v-spacer></v-spacer>
                <v-btn flat @click.native="$emit('comment',article)" icon><v-icon>comment</v-icon></v-btn>
            </v-card-actions>
            <v-card-actions>
                &nbsp; &nbsp; {{article.likes_count}} <a>{{plural('Reaction',article.likes_count)}}</a>
                <v-spacer></v-spacer>
                {{article.comments_count}} <a @click="$emit('comment',article)">{{plural('Comment',article.comments_count)}}</a>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import "../faceMotion/FaceMotion.css"
    import cardMixin from "../mixin/cardMixin"
    export default{
        mixins:[cardMixin],
        data: ()=>({

        }),
    }
</script>

<style>
.cardFont .card__media__content{
    margin: 0 !important;
    padding: 10px !important;
}
.cardFont .card__media__content span{
    word-wrap: break-word;
}
.faceMocion{
    top: 0 !important;
    left: 0 !important;
    transform: scale(.8);
    position: relative;
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    height: initial !important;
}
.selectorFace{margin:0;margin-top: -6px;}
.menu__content[menu=like]{box-shadow:none}
.selectorFace{
    transform: scale(.6)
}
</style>