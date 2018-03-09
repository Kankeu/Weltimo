<template>
    <div>
        <v-container grid-list-lg text-xs-left fluid>
            <v-layout column>
                <v-flex lg12>
                    <v-text-field label="Title" counter="190" maxlength="190" required box></v-text-field>
                </v-flex>
                <v-flex lg12>
                    <v-text-field multi-line box label="Message" required></v-text-field>
                </v-flex>
                <v-flex lg12>
                    <div style="position: relative">
                        <div class="nbr-photos">
                            <div v-if="url">
                                <v-btn round color="danger" @click="clear">Cancel</v-btn>
                            </div>
                            <v-btn round color="primary" @click.native="select" icon v-else><v-icon>insert_photo</v-icon></v-btn>
                        </div>
                        <img :src="url" width="100%" height="400px" alt="image">
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
        <input type="file" id="image" style="display:none" @change="preview">
    </div>
</template>

<script>
    export default{
        data: ()=>({
            open: false,
            url: null,
            file: null,
        }),
        methods:{
            preview(event){
                this.file = event.target.files[0]
                this.url= window.URL.createObjectURL(event.target.files[0]);
            },
            select(){
                this.$el.querySelector("#image").click()
            },
            clear(){
                this.file = null
                this.url = null
                this.$el.querySelector("#image").value = null
            },
        },
    }
</script>

<style scoped>
    .nbr-photos{
        position:absolute;
        width: 100%;
        height: 100%;
        display:none;
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