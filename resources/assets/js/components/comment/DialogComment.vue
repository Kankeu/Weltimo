<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" width="935px">
            <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear>
            <v-carousel v-model="index" style="position: inherit;height: 600px;background: transparent" :cycle="false" :hide-controls="articles.length<2" hide-delimiters>
                <v-carousel-item src=" " v-for="article,i in articles" class="carousel_item" :key="i">
                    <v-card height="600px" style="width:935px" v-if="i===index">
                        <v-container class="notSpace" style="overflow: hidden"  grid-list-md>
                            <v-layout class="notSpace" row>
                                <v-flex class="notSpace" lg7>
                                    <article-box :article="article"></article-box>
                                </v-flex>
                                <v-flex class="notSpace" lg5>
                                    <comment-box @loading="(v)=>loading=v" :article="article"></comment-box>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-carousel-item>
            </v-carousel>
        </v-dialog>
    </v-layout>
</template>

<script>
    import articleBox from './ArticleBox.vue'
    import commentBox from './CommentBox.vue'
    import store from './state'
    export default{
        components:{articleBox,commentBox},
        props:{
            open: Boolean,
            article: Object,
            articles: Array
        },
        data: ()=>({
            dialog: false,
            index: -1,
            store: store.state
        }),
        computed:{
            loading(){
                return  this.store.loading
            }
        },
        watch:{
            open(data){
                if(data) {
                    this.index = this.articles.indexOf(this.article)
                    this.dialog = data
                }
            },
            dialog(data){
               if(!data) {
                   this.$emit('close')
               }
            },
            article(data){
                this.index = this.articles.indexOf(data)
            },
        }
    }
</script>

<style>
    .notSpace{
        padding: 0 !important;
        margin: 0 !important;
    }
    .dialog--active{
        overflow: hidden;
    }
    .carousel_item{
        position: relative !important
    }
</style>