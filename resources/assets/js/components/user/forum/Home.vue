<template>
    <v-container grid-list-lg text-xs-left fluid>
        <v-layout column>
            <v-flex lg12>
                <v-alert outline :color="darked || 'info'" dismissible v-model="msgAlert" icon="info" >
                    Hello and Welcome on the Weltimos forum.
                    Here you can help and get from with the whole community
                </v-alert>
            </v-flex>
            <v-flex lg12>
                <v-container fluid>
                    <v-text-field
                        prepend-icon="search"
                        label="search topics in the forum"
                    ></v-text-field>
                </v-container>
            </v-flex>
            <v-flex lg12>
                <card-my-topics></card-my-topics>
            </v-flex>
            <v-flex lg12>
                <v-layout wrap row>
                    <v-flex xs12 lg6>
                        <card-best-topics></card-best-topics>
                    </v-flex>
                    <v-flex xs12 lg6>
                       <card-new-topics></card-new-topics>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex>
                <h1> Create a subject </h1>
            </v-flex>
            <v-flex>
                <v-layout column>
                    <v-flex>
                        <v-layout row wrap>
                            <v-flex lg6>
                                <v-container :class="$vuetify.breakpoint.smAndUp || 'noPadding'" fluid>
                                    <v-text-field label="Title" v-model.trim="title" counter="190" maxlength="190" required box></v-text-field>
                                </v-container>
                            </v-flex>
                            <v-flex lg6>
                                <v-container :class="$vuetify.breakpoint.smAndUp || 'noPadding'" fluid>
                                    <v-select
                                            label="Categories"
                                            chips
                                            class="input_forum_category"
                                            tags
                                            autocomplete
                                            required
                                            v-model="categories"
                                            clearable
                                            deletable-chips
                                            :items="defaultCatogories"
                                    ></v-select>
                                </v-container>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex>
                        <v-container :class="$vuetify.breakpoint.smAndUp || 'noPadding'" fluid>
                            <v-text-field multi-line box label="Question" v-model.trim="question" required></v-text-field>
                        </v-container>
                    </v-flex>
                    <v-flex lg12>
                        <v-container :class="$vuetify.breakpoint.smAndUp || 'noPadding'" fluid>
                            <v-checkbox v-model="emailReceive" label="Receive an email alert when someone answers about it."></v-checkbox>
                        </v-container>
                    </v-flex>
                    <v-flex lg12>
                        <v-container :class="$vuetify.breakpoint.smAndUp || 'noPadding'" fluid>
                            <v-btn color="success" @click="publish" style="margin-left: 0px" lg>
                                create the subject
                            </v-btn>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import cardMyTopics from './CardMyTopics.vue'
    import cardNewTopics from './CardNewTopics.vue'
    import cardBestTopics from './CardBestTopics.vue'
    export default{
        components:{cardBestTopics,cardNewTopics,cardMyTopics},
        data: ()=>({
            categories: [],
            msgAlert: true,
            question: null,
            title: null,
            emailReceive: false,
            defaultCatogories: [
                'Grammatik',
                'Übung',
                'Vokabel',
                'Konjugation',
                'Unterlagen'
            ]
        }),
        computed:{
            darked(){
                return this.$store.state.setting.darked
            },
            questionParsed(){
                return JSON.stringify([{text:this.question.trim()}])
            },
            user(){
                return this.$store.state.user.user
            }
        },
        methods:{
            publish(){
                if(this.question && this.question.length>0 && this.categories.length>0 && this.title.length>0){
                    let data = {question: this.questionParsed, categories: this.categories, title:this.title,emailReceive:this.emailReceive}
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.post('/user/forum/topic/',data).then(response=>{
                        if(typeof response.body === "object"){
                            let categories = response.body.categories
                            delete response.body.categories
                            this.$store.dispatch("topic/save", response.body)
                            this.$store.dispatch("category/save", categories)
                            this.question = null
                            this.title = null
                            this.emailReceive = false
                            this.categories = []
                        }
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            }
        },
    }
</script>

<style>
    .input_forum_category input{
        min-height: 55px;
    }
    .noPadding{
        padding: 0 !important;
    }
</style>