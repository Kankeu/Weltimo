<template>
    <v-container fluid layout_block>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-container fluid md>
                        <v-layout row wrap>
                            <v-flex
                                    xs4
                                    v-for="n in 9"
                                    :key="n"
                            >
                                <v-card flat tile>
                                    <v-card-media
                                            :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                                            height="150px"
                                    >
                                    </v-card-media>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default{

    }
</script>