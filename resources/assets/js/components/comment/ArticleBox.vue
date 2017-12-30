<template>
    <div class="articleBox" style="height: 600px">
        <v-card-media class="notSpace" :src="(article.image) ? article.image.path : null" :class="(article.image) ? null : article.color" height="600px">
            <div style="width:100%;text-align: center;" v-if="!article.image">
                <span v-for="message,i in JSON.parse(article.message)" :key="i">{{message.text}}<a  v-if="message.url"><img :src="message.url" style="margin-bottom:-5px;height: 30px;width: 30px"></a></span>
            </div>
        </v-card-media>
    </div>
</template>

<script>
    import cardMixin from '../mixin/cardMixin'
    export default{
        mixins:[cardMixin],
        mounted(){

        }
    }
</script>

<style>
    .articleBox .notSpace{
        padding: 0;
        margin: 0;
    }
    .articleBox .card__media__content{
        margin: 0 !important;
        padding: 10px;
    }
    .articleBox .card__media__content span{
        word-wrap: break-word;
    }
</style>