<template>
    <v-container grid-list-md text-xs-center fluid>
        <v-parallax src="/img/default/logoLg.jpg">
            <v-layout column align-center justify-center>
                <v-btn outline round color="indigo"><v-icon>insert_photo</v-icon> Cover picture</v-btn>
            </v-layout>
        </v-parallax>
        <v-layout>
            <v-flex xs0 lg3></v-flex>
            <v-flex xs12 lg6>
                <v-container grid-list-md text-xs-center fluid>
                    <v-layout column>
                      <v-flex lg12>                          
                        <card-publication></card-publication>
                      </v-flex>
                      <v-flex lg12 v-for="n in 10" :key="n">
                          <card :article="{n,popover:false,menu:false,like:false,show:false,fav:false}"></card>
                      </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs0 lg3></v-flex>
        </v-layout>
            
    </v-container>
</template>

<script>
    import card from '../card/Card.vue'
    import cardPublication from '../card/CardPublication.vue'
    export default{
        components:{card,cardPublication},
        data: ()=>({

        }),
        computed:{
            user(){
                return this.$store.state.user.user
            }
        },
    }
</script>

<style scoped>

</style>