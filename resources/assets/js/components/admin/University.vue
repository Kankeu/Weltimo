<template>
    <div>
        <my-form v-for="n in numb" :key="n"></my-form>
        <v-container fluid>
            <v-btn color="primary" @click="numb++" style="width: 100%;margin-left: 0px">More Form (+1)</v-btn>
        </v-container>
        <v-container fluid>
            <v-btn color="success" @click="publish" style="width: 100%;margin-left: 0px">Save</v-btn>
        </v-container>
    </div>
</template>

<script>
    import markdownEditor from '../MarkdownEditor/App.vue'
    import myForm from './university/Form.vue'
    export default{
        components:{markdownEditor,myForm},
        data: ()=>({
            numb: 1
        }),
        methods:{
            publish(){
                console.log(this)
            }
        },
        mounted(){

        }
    }
</script>

