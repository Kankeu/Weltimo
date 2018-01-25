<template>
    <div style="height: 100%">
        <div style="height: 100%">
                    <div :class="$vuetify.breakpoint.smAndUp ? 'blogBg' : 'xsBlogBg'">
                        <div style="background-size: 100%;z-index:1;height: 100%;width:100%;background: black;opacity: .4;position: absolute;top: 0;bottom:0;right:0;left:0;">
                        </div>
                        <v-layout style="z-index: 2;height: 100%"  column>
                            <v-flex style="height: 100%">
                                <v-layout class="title center" style="height: 60%;z-index: 2;" column  align-center justify-center>
                                    <h1 class="white--text">Hello and welcome on Weltimo</h1>
                                    <h3 class="white--text">Travel to Germany with confidence thanks to</h3>
                                    <h3 class="white--text">our courses and follow-up offers.</h3>
                                    <div style="margin-top: 50px">
                                        <v-btn  color="primary" large>Sign in</v-btn>
                                        <v-btn  color="white" large outline>Android</v-btn>
                                    </div>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </div>
            <v-layout column>
                <v-flex>
                    <v-container grid-list-md text-xs-center fluid>
                        <v-layout column>
                            <v-flex>
                                <v-layout wrap row>
                                    <v-flex lg4 v-for="article,i in articles" :key="i">
                                        <presentation-card :article="article"></presentation-card>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex>
                                <v-flex style="align-items: center;margin-top: 80px">
                                    Join us and discover a new way to learn German
                                    learn German in a fun way :)<br><br><br><br>
                                    <v-btn  color="orange" outline large>Sign in</v-btn>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
                   <!-- <div class="body">
                        <v-layout class="title center" column  align-center justify-center>
                            <h1 class="white--text">Hello and welcome on Weltimo</h1>
                            <h4 class="white--text">Join us and discover a new way to learn German</h4>
                            <h4 class="white--text">learn German in a fun way  :)</h4>
                        </v-layout>

                        <div id="background-wrap">
                            <div class="x1">
                                <div class="cloud"></div>
                            </div>

                            <div class="x2">
                                <div class="cloud"></div>
                            </div>

                            <div class="x3">
                                <div class="cloud"></div>
                            </div>

                            <div class="x4">
                                <div class="cloud"></div>
                            </div>

                            <div class="x5">
                                <div class="cloud"></div>
                            </div>
                        </div>
                    </div>
                </v-flex>
                <v-flex style="margin-top: 25px;font-family: 'Tangerine', cursive;color:#ff9800!important;font-size: 30px;text-align: center" color="deep-orange"><h1>Our offers</h1></v-flex>
                <v-flex lg12>
                    <v-container grid-list-md text-xs-center fluid>
                        <v-layout wrap row>
                            <v-flex lg4 v-for="article,i in articles" :key="i">
                                <presentation-card :article="article"></presentation-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
                <v-flex>
                    <v-layout class="title center" column  align-center justify-center>
                        <v-avatar size="200px" tile>
                            <img style="height:154px" src="/img/default/weltimo.png">
                        </v-avatar>
                    </v-layout>-->

        </div>
    </div>
</template>

<script>
    import presentationCard from './PresentationCard.vue'
    export default {
        components:{presentationCard},
        data(){
            return {
                images: [],
                articles: []
            }
        },
        mounted(){
            this.$http.get('/offer').then(response=>{
                this.articles.push(...response.body)
            })
        }

    }
</script>

<style scoped lang="scss">
    .blogBg{
        position: relative;
        height: 75%;
        width: 100%;
        background-image: url('/img/default/weltimoBackground.jpg');
        display: flex;
        justify-content: center;
        align-items: center
    }
    .blogBg .center{
        font-size: 28px !important;
    }
    .xsBlogBg{
        position: relative;
        width: 100%;
        background-image: url('/img/default/weltimoBackground.jpg');
        background-size: 100%;
        display: flex;
        justify-content: center;
        align-items: center
    }
    .xsBlogBg .center{
        font-size: 15px !important;
        padding: 5px;
    }
    .logo{
        font-size: 200px !important
    }
    .center{
        text-align: center
    }
    .body {
        background: #00b4ff;
        color: #333;
        font: 100% Arial, Sans Serif;
        height: 400px;
        margin: -10px;
        margin-top: 55px;
        padding: 0;
        position:sticky;
        overflow: hidden;
    }
    .title{
        height:100%;
        font-family: monospace;
    }

    #background-wrap {
        bottom: 0;
        left: 0;
        padding-top: 50px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
    }

    /* KEYFRAMES */

    @-webkit-keyframes animateCloud {
        0% {
            margin-left: -600px;
        }
        100% {
            margin-left: 100%;
        }
    }

    @-moz-keyframes animateCloud {
        0% {
            margin-left: -600px;
        }
        100% {
            margin-left: 100%;
        }
    }

    @keyframes animateCloud {
        0% {
            margin-left: -600px;
        }
        100% {
            margin-left: 100%;
        }
    }

    /* ANIMATIONS */

    .x1 {
        -webkit-animation: animateCloud 25s linear infinite;
        -moz-animation: animateCloud 25s linear infinite;
        animation: animateCloud 25s linear infinite;

        -webkit-transform: scale(0.65);
        -moz-transform: scale(0.65);
        transform: scale(0.65);
    }

    .x2 {
        -webkit-animation: animateCloud 15s linear infinite;
        -moz-animation: animateCloud 15s linear infinite;
        animation: animateCloud 15s linear infinite;

        -webkit-transform: scale(0.3);
        -moz-transform: scale(0.3);
        transform: scale(0.3);
    }

    .x3 {
        -webkit-animation: animateCloud 20s linear infinite;
        -moz-animation: animateCloud 20s linear infinite;
        animation: animateCloud 20s linear infinite;

        -webkit-transform: scale(0.5);
        -moz-transform: scale(0.5);
        transform: scale(0.5);
    }

    .x4 {
        -webkit-animation: animateCloud 8s linear infinite;
        -moz-animation: animateCloud 8s linear infinite;
        animation: animateCloud 8s linear infinite;

        -webkit-transform: scale(0.4);
        -moz-transform: scale(0.4);
        transform: scale(0.4);
    }

    .x5 {
        -webkit-animation: animateCloud 15s linear infinite;
        -moz-animation: animateCloud 15s linear infinite;
        animation: animateCloud 15s linear infinite;

        -webkit-transform: scale(0.55);
        -moz-transform: scale(0.55);
        transform: scale(0.55);
    }

    /* OBJECTS */

    .cloud {
        background: #fff;
        background: -moz-linear-gradient(top,  #fff 5%, #f1f1f1 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(5%,#fff), color-stop(100%,#f1f1f1));
        background: -webkit-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
        background: -o-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
        background: -ms-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
        background: linear-gradient(top,  #fff 5%,#f1f1f1 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );

        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;

        -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
        box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

        height: 120px;
        position: relative;
        width: 350px;
    }

    .cloud:after, .cloud:before {
        background: #fff;
        content: '';
        position: absolute;
        z-indeX: -1;
    }

    .cloud:after {
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;

        height: 100px;
        left: 50px;
        top: -50px;
        width: 100px;
    }

    .cloud:before {
        -webkit-border-radius: 200px;
        -moz-border-radius: 200px;
        border-radius: 200px;

        width: 180px;
        height: 180px;
        right: 50px;
        top: -90px;
    }
</style>
