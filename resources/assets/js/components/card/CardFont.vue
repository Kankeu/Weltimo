<template>
    <div>
        <v-card>
            <v-card-actions>
                <v-menu
                        offset-x
                        :close-on-content-click="false"
                        :nudge-width="200"
                >
                    <v-avatar
                            size="40px"
                            slot="activator"
                    >
                        <img :src="user.avatar" alt="avatar">
                    </v-avatar>
                    <v-card>
                        <v-list>
                            <v-list-tile avatar>
                                <v-list-tile-avatar>
                                    <img :src="user.avatar" alt="avatar">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{user.name+" "+user.forename}}</v-list-tile-title>
                                    <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <v-btn
                                            icon
                                            :class="subscribed ? 'blue--text' : ''"
                                            @click.native="subscribed = !subscribed"
                                    >
                                        <v-icon>person_add</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list>
                        <v-divider></v-divider>
                    </v-card>
                </v-menu>
                <v-layout style="margin-left: 4px;text-align:left;font-family:monospace" column>
                    <v-flex style="padding:0">
                        <b style="font-weight:100">Bob Job</b>
                    </v-flex>
                    <v-flex style="padding:0">
                        <small>12 Fevrier 2016</small>
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
                        <v-list-tile  @click="">
                            <v-list-tile-action>
                                <v-icon>edit</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Edit</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile  @click="">
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
                        <v-list-tile  @click="">
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
            <v-card-media src="" :class="article.color" height="378px">
                <div style="width:100%" >
                    <span v-for="message,i in JSON.parse(article.message)" :key="i">{{message.text}}<span  v-if="message.url"><img :src="message.url" style="margin-bottom:-5px;height: 30px;width: 30px"></span></span>
                </div>
            </v-card-media>
            <v-card-actions style="justify-content:space-between">
                <v-menu
                    :open-on-hover="true"
                    :close-on-content-click="true"
                    top
                    origin="center center"
                    transition="scale-transition"
                    style="font-size:16px"
                    :dark="true"
                >
                    <div  slot="activator" style="display:flex;align-items: center">
                    <v-btn v-if="facemotion" @click.native="deleteLike" icon><div dato-descripcion="alegre" id-referencia="1513812312742" :class="'Selector selectorFace '+facemotion"></div></v-btn>
                    <v-btn slot="activator" flat icon v-if="!facemotion" @click.native="like($event,'amo')"><v-icon>favorite_border</v-icon></v-btn> &nbsp; <a>{{text ? text :'Love'}} </a>
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
                <v-btn flat icon><v-icon>comment</v-icon></v-btn>
            </v-card-actions>
            <v-card-actions>
                &nbsp; &nbsp; {{article.likes_count}} <a>{{plural('Reaction',article.likes_count)}}</a>
                <v-spacer></v-spacer>
                0 <a>Comment</a>
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
.menu__content[menu=like]{box-shadow:none !important;top:1350px !important;left: 417px !important;}
.selectorFace{
    transform: scale(.6)
}
.card__media__content{
    white-space: pre-line;
    margin-bottom: -4px;
    padding-left: 10px;
    margin-top: -4px;
    margin: -4px;
        -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
        -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
        -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
        display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}
.card__media{
    color: rgba(255,255,255,1.00);
    font-size: 30px;
    line-height: 1.2000em;
    text-align: center;
    font-family: monospace
}
.background0{
    background-color: #ddd;
}
.background1{
    background-color: transparent !important;
    color: black;
    text-align: left !important;
}
.background2{
    background-color:rgba(0,244,255,1.00);background-image:-webkit-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(0,244,255,1.00) 0%),color-stop(rgba(17,55,173,1.00) 100%));background-image:linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);
    color: white !important;
    text-align: center !important;
    justify-content: center;
    flex-direction: column;
    font-size: 30px !important;
}
.background3{
    background-color:rgba(23,172,255,1.00);background-image:-webkit-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(102,244,133,1.00) 0%),color-stop(rgba(23,172,255,1.00) 100%));background-image:linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);
    color: white !important;
    text-align: center !important;
    justify-content: center;
    flex-direction: column;
    font-size: 30px !important;
}
.background4{
    background-color:rgba(5,174,53,1.00);background-image:-webkit-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(248,240,35,1.00) 0%),color-stop(rgba(5,174,53,1.00) 100%));background-image:linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);
    color: white !important;
    text-align: center !important; 
    justify-content: center;
    flex-direction: column;  
    font-size: 30px !important;
}
.background5{
    background-color:rgba(255,0,71,1.00);background-image:-webkit-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(255,0,71,1.00) 0%),color-stop(rgba(44,52,199,1.00) 100%));background-image:linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);
    color: white !important;
    text-align: center !important;
    justify-content: center;
    flex-direction: column;
    font-size: 30px !important;
}
.background6{
    background-color:rgba(115,33,173,1.00);background-image:-webkit-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-moz-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-ms-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-o-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-webkit-gradient(left top,right bottom,color-stop(rgba(115,33,173,1.00) 0%),color-stop(rgba(72,229,169,1.00) 100%));background-image:linear-gradient(135deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);
    color: white !important;
    text-align: center !important;
    justify-content: center;
    flex-direction: column;
    font-size: 30px !important;
}
.background7{
    background-color:rgba(167,183,216,1.00);background-image:-webkit-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(167,183,216,1.00) 0%),color-stop(rgba(22,24,29,1.00) 100%));background-image:linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);
    color: white !important;
    text-align: center !important;
    justify-content: center;
    flex-direction: column;
    font-size: 30px !important;
}
.background8{
    background-color:rgba(93,63,218,1.00);background-image:-webkit-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(252,54,253,1.00) 0%),color-stop(rgba(93,63,218,1.00) 100%));background-image:linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);
    color: white !important;
    text-align: center !important;
    justify-content: center;
    flex-direction: column;
    font-size: 30px !important;
}
</style>