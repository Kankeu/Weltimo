<template>
  <div>
    <v-layout row wrap>
        <v-container fluid grid-list-md>
          <v-layout row wrap justify-center>
            <v-flex xs12 lg10>
              <v-carousel style="height:250px" :lazy="true" hide-delimiters :interval="time" @mouseenter.native="time=30000" @mouseout="time=3000">
                <v-carousel-item style="background-size: 100% 250px !important;"  v-for="(image,i) in images" :src="image" :key="i"></v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-layout>
        </v-container>
        <v-flex xs0 lg2>

        </v-flex>
        <v-flex xs12 lg8>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
          <v-flex v-for="article,i in articles" :key="i" xs12>
            <v-card>
              <v-card-media
                :src="article.image"
                height="200px"
              >
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{faker.name.findName()}}</div>
                  <span class="grey--text">{{faker.name.findName()}}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn icon><v-icon>favorite</v-icon></v-btn>
                <v-btn icon><v-icon>comment</v-icon></v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click.native="article.show = !article.show">
                  <v-icon>{{ article.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-slide-y-transition>
                <v-card-text v-show="article.show">
                  {{faker.lorem.paragraphs()}}
                </v-card-text>
              </v-slide-y-transition>
            </v-card>
          </v-flex>
          </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs0 lg2>

        </v-flex>
    </v-layout>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        faker: window.faker,
        articles: [],
        images:[],
        time:3000,
      }
    },
    created(){
        for(let i=1; i<12; i++)
        {
            this.articles.push({image:"/img/articles/"+i+".jpg",show:false})
        }
        for(let i=1; i<12; i++)
        {
            this.images.push("/img/articles/"+i+".jpg")
        }
    },

  }
</script>

<style scoped>
  .block{
    display: block;
  }
  .md-card{
    margin-bottom: 10px;
  }
    .md-card-media img{
        height: 400px;
    }
</style>
