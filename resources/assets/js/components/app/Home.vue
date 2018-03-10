<template>
    <div>
        <div>
            <div :class="$vuetify.breakpoint.smAndUp ? 'blogBg' : 'xsBlogBg'">
                <div style="background-size: 100%;z-index:1;height: 100%;width:100%;background: black;opacity: .4;position: absolute;top: 0;bottom:0;right:0;left:0;">
                </div>
                <v-layout style="z-index: 2;height: 100%"  column>
                    <v-flex style="height: 100%">
                        <v-layout class="title center" style="height: 60%;z-index: 2;" column  align-center justify-center>
                            <h1 class="white--text">Hello and welcome on Weltimo</h1>
                            <h3 class="white--text">Travel to Germany with confidence thanks to</h3>
                            <h3 class="white--text">our courses and follow-up offers.</h3>
                            <div style="margin-top: 50px;">
                                <v-btn href="/login/google" color="red" outline large>Log in with Google</v-btn><br>
                                <v-btn href="/login/github" large>Log in with Github</v-btn><br>
                                <v-btn  color="primary" to="sign_in" large>Sign in</v-btn>
                            </div>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </div>
            <v-layout column>
                <v-flex>
                    <v-container :class="$vuetify.breakpoint.smAndUp || 'noPadding'" grid-list-lg text-xs-center fluid>
                        <v-layout column>
                            <v-flex lg12>
                                <v-container grid-list-lg text-xs-center :class="$vuetify.breakpoint.smAndUp || 'noPadding'" fluid>
                                    <v-layout column>
                                        <v-flex lg12 style="background: #f1f1f1;">
                                            <v-container fluid>
                                                <v-layout style="flex-wrap: wrap-reverse"  row>
                                                    <v-flex lg1></v-flex>
                                                    <v-flex lg5>
                                                        <v-card-text style="text-align: left">
                                                            <h1>Prise en charge de dossiers</h1>
                                                            Grâce à nos contactes dans les universités allemandes
                                                            nos sommes capable de vous offrir des preinscriptions,
                                                            des inscriptions... mais aussi les foyés d'accueil pour
                                                            les filles oper et les comptes bloqués pour les cautions.
                                                            Tout ceux ci dans le but de planifier et d'organiser vos
                                                            etudes en allemagne.
                                                        </v-card-text>
                                                    </v-flex>
                                                    <v-flex lg5>
                                                        <img src="/img/default/dossier.jpg" width="100%" height="200px">
                                                    </v-flex>
                                                    <v-flex lg1></v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-flex>
                                        <v-flex lg12>
                                            <v-container fluid>
                                                <v-layout wrap row>
                                                    <v-flex lg1></v-flex>
                                                    <v-flex lg5>
                                                        <img src="/img/default/ebook.jpg" width="100%" height="200px">
                                                    </v-flex>
                                                    <v-flex lg5>
                                                        <v-card-text style="text-align: left">
                                                            <h1>Cours d'allemand</h1>
                                                            Avec nos nombreux livres et exercices  la prise en main
                                                            de la langue allemande n'a jamais été aussi facile. De
                                                            plus nos programmes allant du A1 au C2 vous permet d'apprendre
                                                            la grammaire allemande de la base jusqu'au sommet. Ce qui vous
                                                            prépare ainsi pour vos differents examens (ZDAF,Mittelstufe, DSH).
                                                        </v-card-text>
                                                    </v-flex>
                                                    <v-flex lg1></v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-flex>
                                        <v-flex style="background: #f1f1f1;" lg12>
                                            <v-container fluid>
                                                <v-layout style="flex-wrap: wrap-reverse" row>
                                                    <v-flex lg1></v-flex>
                                                    <v-flex lg5>
                                                        <v-card-text style="text-align: left">
                                                            <h1>Reseau social</h1>
                                                            Toujours dans la même optique de vous offir
                                                            un cadre convenable et adequa pour l'apprentissage
                                                            de la langue allemande, nous avons mis sur pied
                                                            un reseau social dans lequel vous pourriez non seulement
                                                            partager les moments favoris de votre vie mais aussi rencontrer
                                                            d'autres apprenants de la langue allemande du monde entier. Ce qui
                                                            facilitera l'apprentissage des allemands termes simple qui nous
                                                            sont utile dans la vie de tous les jours.
                                                        </v-card-text>
                                                    </v-flex>
                                                    <v-flex lg5>
                                                        <img src="/img/default/network.jpg" width="100%" height="200px">
                                                    </v-flex>
                                                    <v-flex lg1></v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-flex>
                                        <v-flex lg12>
                                            <v-container fluid>
                                                <v-layout wrap row>
                                                    <v-flex lg1></v-flex>
                                                    <v-flex lg5>
                                                        <img src="/img/default/forum.jpg" width="100%" height="200px">
                                                    </v-flex>
                                                    <v-flex lg5>
                                                        <v-card-text style="text-align: left">
                                                            <h1>Forum</h1>
                                                            Pour vos questions et problemes au sujet de la
                                                            langue allemande ou des dossiers, vous pouvez
                                                            les poser sur notre forum afin de beneficier des
                                                            réponses et des conseils de toute la communauté
                                                            Weltimo.
                                                        </v-card-text>
                                                    </v-flex>
                                                    <v-flex lg1></v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-flex>
                            <v-flex lg12>
                                <v-container grid-list-lg text-xs-center fluid>
                                    <v-layout wrap row>
                                        <v-flex v-for="article,i in articles" :key="i" lg4>
                                            <presentation-card :color="colors[i] || ''" :article="article"></presentation-card>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-flex>
                            <v-flex>
                                <v-flex style="align-items: center;margin-top: 80px">
                                    Join us and discover a new way to learn German.
                                    #German in a fun way :)<br><br><br><br>
                                    <v-btn  color="orange" to="sign_in" outline large>Sign in</v-btn>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
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
                articles: [],
                colors: [
                    "cyan",
                    "blue",
                    "amber"
                ]
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
    .noPadding{
        padding: 0 !important;
    }
    .blogBg{
        position: relative;
        height: 170vh;
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
        background-size: cover;
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
        text-align: center;
        margin-top: 60px
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
