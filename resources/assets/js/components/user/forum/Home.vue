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
                <v-card>
                    <v-card-title :class="darked || 'cyan'">
                        Last visited topics
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-list style="max-height:220px;overflow: auto">
                        <div v-for="n in 5" :key="n">
                            <v-list-tile to=" ">
                                <v-list-tile-content>
                                    <v-list-tile-title>Laravel {{n}}</v-list-tile-title>
                                    <v-list-tile-sub-title>dsffsdfsdfsfdsfdfs00</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider></v-divider>
                        </div>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex lg12>
                <v-layout row>
                    <v-flex lg6>
                        <v-card>
                            <v-card-title :class="darked || 'blue'">
                                The best Topics
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-list style="max-height:440px;overflow: auto">
                                <div v-for="n in 12" :key="n">
                                    <v-list-tile to=" ">
                                        <v-list-tile-content>
                                            <v-list-tile-title>Laravel {{n}}</v-list-tile-title>
                                            <v-list-tile-sub-title>dsffsdfsdfsfdsfdfs00</v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-divider></v-divider>
                                </div>
                            </v-list>
                        </v-card>
                    </v-flex>
                    <v-flex lg6>
                        <v-card>
                            <v-card-title :class="darked || 'light-blue'">
                                The new Topics
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-list style="max-height:440px;overflow: auto">
                                <div v-for="n in 12" :key="n">
                                    <v-list-tile to=" ">
                                        <v-list-tile-content>
                                            <v-list-tile-title>Laravel {{n}}</v-list-tile-title>
                                            <v-list-tile-sub-title>dsffsdfsdfsfdsfdfs00</v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-divider></v-divider>
                                </div>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex>
                <h1> Create a subject </h1>
            </v-flex>
            <v-flex>
                <v-card>
                    <v-layout column>
                        <v-flex>
                            <v-layout row wrap>
                                <v-flex lg6>
                                    <v-container fluid>
                                        <v-text-field label="Title" v-model="title" box></v-text-field>
                                    </v-container>
                                </v-flex>
                                <v-flex lg6>
                                    <v-container fluid>
                                        <v-select
                                                label="Categories"
                                                chips
                                                class="input_forum_category"
                                                tags
                                                autocomplete
                                                required
                                                v-model="catogories"
                                                clearable
                                                deletable-chips
                                                :items="defaultCatogories"
                                        ></v-select>
                                    </v-container>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex>
                            <v-container fluid>
                                <v-text-field box multi-line label="Question" v-model="question" required></v-text-field>
                            </v-container>
                        </v-flex>
                        <v-flex lg12>
                            <v-container fluid>
                                <v-checkbox v-model="emailReceive" label="Receive an email alert when someone answers about it."></v-checkbox>
                            </v-container>
                        </v-flex>
                        <v-flex lg12>
                            <v-container fluid>
                                <v-btn color="success" style="margin-left: 0px" lg>
                                    create the subject
                                </v-btn>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default{
        data: ()=>({
            catogories: [],
            msgAlert: true,
            question: null,
            title: null,
            emailReceive: false,
            defaultCatogories: [
                'Grammatik',
                'Übung',
                'Vokabel',
                'Konjugation'
            ]
        }),
        computed:{
            darked(){
                return this.$store.state.setting.darked
            }
        },
    }
</script>

<style>
    .input_forum_category input{
        min-height: 55px;
    }
</style>