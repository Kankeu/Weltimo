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
                        <cardPublication></cardPublication>                    
                      </v-flex>
                      <v-flex lg12 v-for="article,i in articles" :key="i">
                          <cardFont :article="article"></cardFont>
                      </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs0 lg3></v-flex>
        </v-layout>
            
    </v-container>
</template>

<script>
    import cardFont from '../card/CardFont.vue'
    import cardPublication from '../card/CardPublication.vue'
    export default{
        components:{cardFont,cardPublication},
        data: ()=>({
            articles: null
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            }
        },
        mounted(){
            this.$http.get('/user/profile').then(response=>{
                if(response.body[0] && typeof response.body === "object"){
                    this.articles = response.body
                    this.$store.dispatch("article/save", response.body)
                }
            })
        }
    }
</script>

<style scoped>

</style>