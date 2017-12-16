<template>
    <v-container fluid>
        <v-layout row>
            <v-flex xs0 md0 lg0></v-flex>
            <v-flex xs0 md0 lg0>
                <v-card>
                    <v-parallax src="/img/default/logoLg.jpg">
                        <v-layout column align-center justify-center>
                            <h1 class="white--text">Weltimo</h1>
                            <h4 class="white--text">Join the community!</h4>
                        </v-layout>
                    </v-parallax>
                    <v-card-title>
                        <div>
                            <v-layout class="center" column  align-center justify-center>
                                <p class="typo">
                                    <b>Weltimo</b> is a platform developed by <b>Kankeu Ivan, Loïc et Dannick</b> for
                                    the purpose of facilitating the learning of the German language.
                                    indeed, this platform aims not only to teach you this language
                                    but also to love it. This is why our educational system is
                                    entirely playful and accessible to the general public.
                                </p>
                            </v-layout>
                            <v-container
                                    fluid
                                    grid-list-lg
                            >
                                <h1>Team dev</h1>
                                <v-layout row wrap>
                                    <v-flex xs12 lg4>
                                        <v-card color="blue-grey darken-2" class="white--text">
                                            <v-container fluid grid-list-lg>
                                                <v-layout row>
                                                    <v-flex xs7>
                                                        <div>
                                                            <div class="headline">Loïc</div>
                                                            <div>Concepteur, développeur</div>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex xs5>
                                                        <v-card-media
                                                                src="/img/default/avatar.jpg"
                                                                height="125px"
                                                                contain
                                                        ></v-card-media>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 lg4>
                                        <v-card color="cyan darken-2" class="white--text">
                                            <v-container fluid grid-list-lg>
                                                <v-layout row>
                                                    <v-flex xs7>
                                                        <div>
                                                            <div class="headline">Ivan Kankeu</div>
                                                            <div>Concepteur, développeur</div>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex xs5>
                                                        <v-card-media
                                                                src="/img/default/author1.jpg"
                                                                height="125px"
                                                                contain
                                                        ></v-card-media>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 lg4>
                                        <v-card color="purple" class="white--text">
                                            <v-container fluid grid-list-lg>
                                                <v-layout row>
                                                    <v-flex xs7>
                                                        <div>
                                                            <div class="headline">Dannick</div>
                                                            <div>Concepteur, développeur</div>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex xs5>
                                                        <v-card-media
                                                                src="/img/default/avatar.jpg"
                                                                height="125px"
                                                                contain
                                                        ></v-card-media>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs0 md0 lg0></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    .typo{
        font-family: monospace
    }
    .center{
        padding: 25px
    }
</style>
