<template>
    <v-card class="presentation_card" height="100%">
        <v-card-media :src="article.image.path" height="200px" v-if="article.image">
        </v-card-media>
        <v-card-media :class="color" style="display: block" height="100px" v-else>
            <v-chip color="orange" text-color="white">
                Special offer
                <v-icon right>star</v-icon>
            </v-chip>
        </v-card-media>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{article.title}}</h3>
                <div>{{JSON.parse(article.message)[0].text}}</div>
            </div>
        </v-card-title>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" to="log_in">Los geht! <v-icon>chevron_right</v-icon></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default{
        props:{
            article: Object,
            color: String
        },
        data: ()=>({

        }),
        mounted(){

        }
    }
</script>

<style scss>
    .presentation_card .card__media__content{
        justify-content: center;
        height: inherit;
    }
    .presentation_card{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .presentation_card .card__media__content .chip{
        align-self: center;
    }
</style>