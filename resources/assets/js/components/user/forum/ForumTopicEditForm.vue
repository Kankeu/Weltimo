<template>
    <v-dialog v-model="dialog" max-width="800">
        <v-card>
            <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
            <v-card-title>
                Edit the Topic<v-spacer></v-spacer><v-btn icon @click="dialog=false"><v-icon>close</v-icon></v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-layout column>
                    <v-flex>
                        <v-layout row wrap>
                            <v-flex lg6>
                                <v-text-field label="Title" v-model.trim="title" counter="190" maxlength="190" required box></v-text-field>
                            </v-flex>
                            <v-flex lg6>
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
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex>
                        <v-text-field multi-line box label="Question" v-model.trim="question" required></v-text-field>
                    </v-flex>
                    <v-flex lg12>
                        <v-btn color="success" @click="edit" style="margin-left: 0px" lg>
                            Edit Topic
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default{
        props:{
            open: Boolean,
            topic: Object
        },
        data: ()=>({
            dialog: false,
            categories: [],
            title:null,
            question: null,
            loading: false,
            defaultCatogories: [
                'Grammatik',
                'Übung',
                'Vokabel',
                'Konjugation',
                'Unterlagen'
            ]
        }),
        computed:{
            questionParsed(){
                return JSON.stringify([{text:this.question.trim()}])
            },
            topicCategories(){
                return this.$store.state.category.categories.filter(category=>category.topic_id===this.topic.id)
            }
        },
        methods:{
            edit(){
                if(this.question && this.question.length>0 && this.categories.length>0 && this.title.length>0){
                    this.loading = true
                    let data = {question: this.questionParsed, categories: this.categories, title:this.title}
                    this.$http.put('/user/forum/topic/'+this.topic.id,data).then(response=>{
                        if(typeof response.body === "object"){
                            let categories = response.body.categories
                            delete response.body.categories
                            this.$store.dispatch("topic/save", response.body)
                            this.$store.dispatch("category/save", categories)
                        }
                        this.loading = false
                    })
                }
            }
        },
        mounted(){
            this.question = JSON.parse(this.topic.question)[0].text
            this.topic.categories
            this.topicCategories.map(category=>{
                this.categories.push(category.type)
            })
            this.title = this.topic.title
        },
        watch:{
            open(data){
                if(data) this.dialog=true
            },
            dialog(data){
                if(!data) this.$emit('close')
            }
        }
    }
</script>