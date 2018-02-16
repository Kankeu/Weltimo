<template>
    <v-layout row>
        <v-flex lg2 xs0></v-flex>
        <v-flex lg8 xs12>
            <v-container grid-list-md text-xs-left fluid>
                <v-layout column>
                    <v-flex v-for="n in 5" :key="n" lg12>
                        <v-card to="/" hover>
                            <v-card-media src="https://www.tu-ilmenau.de/fileadmin/startseite/Fotos_330x614px5.jpg" height="200px">
                            </v-card-media>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">Ilmenau</h3>
                                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat color="orange">Share</v-btn>
                                <v-btn flat color="orange">Explore</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
        <v-flex lg2 xs0></v-flex>
    </v-layout>
</template>

<script>
    export default{

    }
</script>