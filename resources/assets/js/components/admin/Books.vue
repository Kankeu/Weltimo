<template>
    <v-layout>
        <v-flex lg2></v-flex>
        <v-flex lg8>
            <div>
                <v-card>
                    <v-card-text>
                        <v-subheader>Publication</v-subheader>
                        <v-container fluid>
                            <v-form @submit.prevent="publish">
                                <v-layout column>
                                    <v-flex>
                                        <v-text-field
                                                name="title"
                                                label="Title"
                                                required
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex>
                                        <v-text-field
                                                v-model="message"
                                                label="Message"
                                                textarea
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex>
                                        <v-text-field
                                                name="url"
                                                label="URL"
                                                type="url"
                                                required
                                                counter="190"
                                                maxlength="190"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex>
                                        <input type="text" name="level" style="display: none" :value="level.text" required>
                                        <v-select
                                                v-bind:items="levels"
                                                v-model="level"
                                                label="Level"
                                                single-line
                                                bottom
                                        ></v-select>
                                    </v-flex>
                                    <v-flex>
                                        <input type="text" name="type" style="display: none" :value="type.text" required>
                                        <v-select
                                                v-bind:items="types"
                                                v-model="type"
                                                label="Type"
                                                single-line
                                                bottom
                                        ></v-select>
                                    </v-flex>
                                    <v-flex>
                                        <v-dialog
                                                lazy
                                                full-width
                                                width="290px"
                                        >
                                            <v-text-field
                                                    slot="activator"
                                                    label="Date"
                                                    v-model="date"
                                                    prepend-icon="event"
                                            ></v-text-field>
                                            <v-date-picker type="date" v-model="date" scrollable actions>
                                            </v-date-picker>
                                        </v-dialog>
                                    </v-flex>
                                    <v-flex>
                                        <v-dialog
                                                lazy
                                                full-width
                                                width="290px"
                                        >
                                            <v-text-field
                                                    slot="activator"
                                                    label="Time"
                                                    v-model="time"
                                                    prepend-icon="access_time"
                                            ></v-text-field>
                                            <v-time-picker v-model="time" scrollable actions>
                                            </v-time-picker>
                                        </v-dialog>
                                    </v-flex>
                                    <v-flex style="display: flex">
                                        <v-btn color="primary" @click="select">Photo</v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn color="success" type="submit">Publish</v-btn>
                                    </v-flex>
                                    <v-flex>
                                        <v-avatar size="200px" tile>
                                            <img :src="url">
                                        </v-avatar>
                                    </v-flex>
                                </v-layout>
                                <input type="file" id="photo" name="image" style="display:none" @change="preview">
                                <input type="text" name="published_at" :value="published_at" style="display:none">
                                <input type="text" name="message" :value="messageParsed" style="display:none">
                            </v-form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </div>
        </v-flex>
        <v-flex lg2></v-flex>
    </v-layout>
</template>

<script>
    export default{
        data: ()=>({
            url: null,
            file: null,
            time: "",
            date: "",
            levels:[
                {text: "A1"},
                {text: "A2"},
                {text: "B1"},
                {text: "B2"},
                {text: "C1"},
                {text: "C2"}
            ],
            types:[
                {text: "test"},
                {text: "course"},
                {text: "exercise"},
            ],
            type: {},
            level: {},
            message: null
        }),
        computed:{
            published_at(){
                let time = this.time.replace('pm', ' pm')
                time = time.replace('am', ' am')
                return new Date(this.date+" "+time)
            },
            messageParsed(){
                return this.message
            },
        },
        methods:{
            preview(event){
                this.file = event.target.files[0]
                this.url = window.URL.createObjectURL(event.target.files[0]);
            },
            select(){
                this.$el.querySelector("#photo").click()
            },
            publish(event){
                if(this.published_at >= new Date()){
                    let formdata = new FormData(event.target)
                    this.$http.post('/admin/book',formdata).then(response=>{

                    })
                }else{
                    alert("Date incorrect")
                }
            }
        }
    }
</script>