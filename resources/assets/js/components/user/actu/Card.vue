<template>
    <div>
        <v-card class="cardFont" :id="'article'+actuality.id">
            <v-card-actions>
                <v-menu
                        offset-x
                        :close-on-content-click="false"
                        :nudge-width="200"
                        v-model="userPopover"
                >
                    <v-avatar
                            size="40px"
                            slot="activator"
                    >
                        <img :src="owner.avatar" alt="avatar">
                    </v-avatar>
                    <v-card v-if="userPopover">
                        <v-list>
                            <v-list-tile avatar :to="'/profile/'+owner.id">
                                <v-list-tile-avatar>
                                    <img :src="owner.avatar" alt="avatar">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{owner.name+" "+owner.forename}}</v-list-tile-title>
                                    <v-list-tile-sub-title v-if="owner.role==='admin'">Founder of Weltimo</v-list-tile-sub-title>
                                    <v-list-tile-sub-title v-else></v-list-tile-sub-title>
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
                    <v-flex style="padding:0" @click="$router.push('profile/'+owner.id)">
                        <b style="font-weight:100;cursor: pointer">{{owner.name+" "+owner.forename}}</b>
                    </v-flex>
                    <v-flex style="padding:0">
                        <small><timeago :since="actuality.created_at" :auto-update="61" :max-time="86400 * 365"></timeago></small>
                    </v-flex>
                </v-layout>
                <v-spacer></v-spacer>
                <v-menu>
                    <v-btn slot="activator" icon>
                        <v-icon>more_horiz</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile @click="copie">
                            <v-list-tile-action>
                                <v-icon>link</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>copie the link</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile @click="openDialogShare=true">
                            <v-list-tile-action>
                                <v-icon>share</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Share</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile  @click="$emit('edit',actuality)" v-if="user.id===owner.id">
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
                                <v-list-tile-title>Hide</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile  @click="">
                            <v-list-tile-action>
                                <v-icon>info</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Signal</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile  @click="actualityDelete = true" v-if="user.id===owner.id">
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
            <div style="font-size:17px;width:100%;text-align: left;padding-left: 10px;padding-right:10px" v-if="actuality.image">
                <span>{{actuality.title}}</span>
            </div>
            <v-card-media :src="(actuality.image) ? actuality.image.path : ''" :class="actuality.image ? null : actuality.color" :style="(darked) ? 'color:white !important;' : null" :height="!actuality.image ? '100px' : $vuetify.breakpoint.smAndUp ? '278px' : '250px'">
                <div style="width:100%;text-align: center;overflow: auto;" v-if="!actuality.image">
                    <span>{{actuality.title}}</span>
                </div>
            </v-card-media>
            <v-card-actions style="justify-content:space-between">
                <v-menu
                        :open-on-hover="$vuetify.breakpoint.smAndUp"
                        :close-on-content-click="true"
                        :nudge-left="133"
                        :nudge-top="103"
                        origin="center center"
                        transition="scale-transition"
                        :content-class="$vuetify.breakpoint.smAndUp || 'menuLikeEmoji'"
                        style="font-size:16px"
                        offset-y
                        offset-x
                        full-width
                        :dark="true"
                >
                    <div  slot="activator" style="display:flex;align-items: center">
                        <v-btn v-if="facemotion" @click.native.stop.prevent="deleteLike" icon><div :class="'Selector selectorFace '+facemotion"></div></v-btn>
                        <v-btn flat icon v-if="!facemotion" @click.native.stop.prevent="like($event,'amo')"><v-icon>favorite_border</v-icon></v-btn> &nbsp; <a>{{text ? text :'Love'}} </a>
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
                <v-btn v-if="actuality.message" icon @click.native="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-slide-y-transition v-if="actuality.message">
                <v-card-text v-show="show">
                    {{JSON.parse(actuality.message)[0].text}}
                </v-card-text>
            </v-slide-y-transition>
            <v-card-actions>
                &nbsp; &nbsp; {{actuality.likes_count}} <a @click="$emit('like',actuality)">{{plural('Reaction',actuality.likes_count)}}</a>
                <v-spacer></v-spacer>
                {{actuality.comments_count}} <a @click="$emit('comment',actuality)">{{plural('Comment',actuality.comments_count)}}</a>
            </v-card-actions>
        </v-card>
        <v-dialog v-model="actualityDelete" max-width="290">
            <v-card>
                <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin:0"></v-progress-linear>
                <v-card-title class="headline">Deleting the actuality</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    Are you sure you want to delete this actuality?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat="flat" @click.native="actualityDelete = false">Cancel</v-btn>
                    <v-btn color="primary" flat="flat" @click.native="destroy">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <dialog-share :open="openDialogShare" :url="urlArticle(actuality.id,actuality.user_id)" :message="actuality.message" @close="openDialogShare=false"></dialog-share>
    </div>
</template>

<script>
    import actualityMixin from '../../mixin/actualityMixin'
    import dialogShare from '../../share/DialogShare.vue'
    export default {
        mixins:[actualityMixin],
        components:{dialogShare},
        props:{
            actuality: Object
        },
        data: () => ({
            show: false,
            openDialogShare: false
        }),
    }
</script>

<style>
    .menuLikeEmoji{
        max-width: 251px !important;
        display: flex;
        justify-content: center;
    }
    .menuLikeEmoji .faceMocion{
        transform: scale(.55);
        min-width: 451px;
    }
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
