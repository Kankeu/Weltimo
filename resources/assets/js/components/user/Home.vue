<template>
    <v-container fluid>
        <v-alert color="success" icon="check_circle" v-if="msgFlash" v-model="alert" outline dismissible>
            {{msgFlash}}
        </v-alert>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
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
        data: ()=>({
            size: "md",
            alert:true,
        }),
        computed:{
            msgFlash(){
                let msg = this.$store.state.msgFlash
                this.$store.dispatch("msgflash/delete")
                return msg
            }
        }
    }
</script>