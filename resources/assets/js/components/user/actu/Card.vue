<template>
    <v-card>
        <v-card-media
                v-if="actuality.image"
                :src="actuality.image.path"
                height="300px"
        >
        </v-card-media>
        <v-card-title primary-title>
            <div>
                <div class="headline">{{actuality.title}}</div>
                <span class="grey--text" v-if="actuality.image"><timeago :since="actuality.published_at" :auto-update="61" :max-time="86400 * 365"></timeago></span>
            </div>
        </v-card-title>
        <v-card-text v-if="!actuality.image">
            {{JSON.parse(actuality.message)[0].text}}
        </v-card-text>
        <span class="grey--text" style="text-align: left;width: 100%;display: block;padding-left: 17px;" v-if="!actuality.image"><timeago :since="actuality.published_at" :auto-update="61" :max-time="86400 * 365"></timeago></span>
        </v-card-title>
        <v-card-actions>
            <div>
                <v-btn icon flat @click.native="deleteLike" v-if="actuality.liked" style="color:red"><v-icon>favorite</v-icon></v-btn>
                <v-btn icon flat @click.native="like" v-else><v-icon>favorite_border</v-icon></v-btn>
            </div>
            <v-spacer v-if="!actuality.image"></v-spacer>
            <v-btn icon flat><v-icon>comment</v-icon></v-btn>
            <v-spacer v-if="actuality.image"></v-spacer>
            <v-btn v-if="actuality.image" icon @click.native="show = !show">
                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-slide-y-transition v-if="actuality.image">
            <v-card-text v-show="show">
                {{JSON.parse(actuality.message)[0].text}}
            </v-card-text>
        </v-slide-y-transition>
        <v-card-actions>
            &nbsp; &nbsp; {{actuality.likes_count}} <a @click="$emit('like',actuality)">{{plural('Reaction',actuality.likes_count)}}</a>
            <v-spacer></v-spacer>
            {{actuality.comments_count}} <a @click="$emit('comment',actuality)">{{plural('Comment',actuality.comments_count)}}</a>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props:{
            actuality: Object
        },
        data: () => ({
            show: false
        }),
        methods:{
            like(){
                this.$http.get('user/article/'+this.actuality.id+'/like/8').then(response=>{
                    if(response.body.id){
                       this.$store.dispatch('actuality/addLike',{actuality:this.actuality,like:response.body})
                    }
                })
            },
            deleteLike(){
                this.$http.delete('user/article/'+this.actuality.id+'/like').then(response=>{
                    if(response.body.status === 1){
                        this.$store.dispatch('article/deleteLike',{actuality:this.actuality})
                    }
                })
            },
        }

    }
</script>


