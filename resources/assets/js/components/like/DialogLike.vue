<template>
    <v-dialog v-model="dialog" scrollable max-width="510px">
        <v-card>
            <v-toolbar class="dialogLiketoolbar" dark card prominent>
                <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear></v-toolbar>
            <v-card-title>Reactions <v-spacer></v-spacer><span @click="dialog=false">x</span></v-card-title>
            <v-divider></v-divider>
            <div>
                <v-tabs fixed class="tabs__like" centered>
                    <v-tabs-bar class="cyan" dark>
                        <v-tabs-item
                                v-for="reaction,i in reactions"
                                :key="i"
                                :href="'#'+reaction.name"
                                @click="load(reaction.type)"
                                ripple
                        >
                            <div style="width: 48px;height: 48px" :class="reaction.className"></div>
                        </v-tabs-item>
                        <v-tabs-slider color="yellow"></v-tabs-slider>
                    </v-tabs-bar>
                    <v-tabs-items class="overflow" :style="$vuetify.breakpoint.smAndUp||'height:230px !important'" v-scroll="{callback: this.loadMore}">
                        <v-tabs-content
                                v-for="reaction,i in reactions"
                                :key="i"
                                :id="reaction.name"
                        >
                            <v-card flat>
                                <v-card-text>
                                    <v-list>
                                        <liker :key="i" v-for="like,i in likes" :like="like"></liker>
                                    </v-list>
                                </v-card-text>
                            </v-card>
                        </v-tabs-content>
                    </v-tabs-items>
                </v-tabs>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import liker from './Liker.vue'
    export default{
        components:{liker},
        props:{
            article: Object,
            open: Boolean
        },
        data: ()=>({
            reactions: [
                {name:"love",className:"amo",type:8},
                {name:"like",className:"gusta",type:7},
                {name:"haha",className:"divierte",type:6},
                {name:"wow",className:"asombro",type:5},
                {name:"glad",className:"alegre",type:4},
                {name:"brother",className:"asusta",type:3},
                {name:"sad",className:"triste",type:2},
                {name:"angry",className:"molesto",type:1}
            ],
            dialog: false,
            ready: true,
            type: 8,
            loading: false
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            likes(){
                return this.$store.state.like.likes.filter(like=>like.likable_id===this.article.id && like.type===this.type)
            },
            end(){
                return this.$store.state.query.queries.find(e=>(e.name==="dialogLike" && !e.next && e.type===this.type && e.id===this.article.id))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==="dialogLike" && e.type===this.type && e.id===this.article.id))
            },
        },
        methods:{
            loadMore(type){
                if((window.innerHeight + window.scrollY) >= document.body.offsetHeight-100){
                    if(!this.end && this.ready){
                        this.ready = false
                        this.loading = true
                        this.$http.get(this.query.next).then(response=>{
                            if(typeof response.body === "object"){
                                let users = []
                                response.body.data.map(article=>{
                                    users.push(article.user)
                                    delete article.user
                                })
                                this.$store.dispatch("like/save", response.body.data)
                                this.$store.dispatch("users/save", users)
                                this.$store.dispatch("query/save",{name:'dialogLike',next:response.body.next_page_url,id:this.article.id,type:type})
                            }
                            this.ready = true
                            this.loading = false
                        })
                    }
                }
            },
            load(type){
                this.type = type
                this.dialog = true
                if(!this.query && this.ready){
                    this.ready = false
                    this.loading = true
                    this.$http.get('/user/article/'+this.article.id+'/likers/'+type).then(response=>{
                        if(Array.isArray(response.body.data)){
                            let users = []
                            response.body.data.map(like=>{
                                users.push(like.user)
                                delete like.user
                            })
                            this.$store.dispatch('like/save',response.body.data)
                            this.$store.dispatch("users/save", users)
                            this.$store.dispatch("query/save",{name:'dialogLike',next:response.body.next_page_url,id:this.article.id,type:type})
                        }
                        this.loading = false
                        this.ready = true
                    })
                }
            },
        },
        mounted(){
            this.load(8)
        },
        watch:{
            open(data){
                if(data) this.dialog = true
            },
            dialog(data){
                if(!data) this.$emit('close')
            },
        }
    }
</script>

<style>
    .tabs__like .tabs__wrapper, .tabs__bar{
        overflow: hidden;
        height: 55px;
    }
    .tabs__like .tabs__container{
        display: -webkit-box;
    }
    .tabs__like .tabs__items{
        overflow-y: auto !important;
        height: 490px !important;
    }
    .dialogLiketoolbar .toolbar__content{
        height: auto !important;
    }
</style>