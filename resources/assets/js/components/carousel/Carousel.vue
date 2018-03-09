<template>
    <v-dialog v-model="dialog" width="935px">
        <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear>
        <v-carousel style="position: inherit;height: 597px;background: transparent" v-model="index" :cycle="false" :hide-controls="images.length<2" hide-delimiters>
            <v-carousel-item  src=" " class="carousel_item" v-for="image,i in images" :key="i">
                <v-card height="600px" style="width:935px;" v-if="i===index">
                    <v-container class="notSpace" style="overflow: hidden"  grid-list-md>
                       <img :src="image.path" width="100%" height="100%">
                        <div class="nbr-photos" v-if="getArticle(image) && JSON.parse(getArticle(image).message).length>0">
                            <div style="width:100%;text-align: center;overflow: auto;">
                                <span v-for="message,i in JSON.parse(getArticle(image).message)" :key="i">{{message.text}}<span  v-if="message.url"><img :src="message.url" style="margin-bottom:-5px;height: 30px;width: 30px"></span></span>
                            </div>
                        </div>
                    </v-container>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-dialog>
</template>

<script>
    export default{
        props:{
            open: Boolean,
            image: Object,
            images: Array
        },
        data: ()=>({
            dialog: false,
            index: -1,
            loading: false
        }),
        methods:{
            getArticle(image){
                return image.imagable_type==="App\\Article" ? this.$store.state.article.articles.find(article=>article.id===image.imagable_id) : null
            }
        },
        watch:{
            open(data){
                if(data) {
                    this.index = this.images.indexOf(this.image)
                    this.dialog = data
                }
            },
            dialog(data){
                if(!data) {
                    this.$emit('close')
                }
            },
            image(image){
                this.index = this.images.indexOf(image)
            },
            index(index){
                this.$scrollTo('#image'+this.images[index].id,10,{container:'body'})
            }
        }
    }
</script>

<style scoped>
    .nbr-photos{
        position:absolute;
        width: 100%;
        height: 25%;
        display:none;
        bottom: 0;
        background-color: rgba(0, 0, 0, .4);
        text-align: center;
        color: #fff;
        border-radius: 4px;
        font-size: 18px;
    }
    div:hover > .nbr-photos{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nbr-photos:hover{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<style>
    .carousel_item{
        position: relative !important
    }
</style>