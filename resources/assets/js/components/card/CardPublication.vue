<template>
    <div>
        <CardPublicationForm :dialog="false" @switchDialog="switchDialog"></CardPublicationForm>
        <v-dialog width="50%" content-class="notOverflow" v-model="dialog">
            <CardPublicationForm :dialog="true" @switchDialog="switchDialog"></CardPublicationForm>
        </v-dialog>
    </div>
</template>



<script>
    import CardPublicationForm from "./CardPublicationForm.vue"
    export default{
        components:{"CardPublicationForm":CardPublicationForm},
        data: ()=>({
            dialog:false
        }),
        methods:{
            switchDialog(){
                this.dialog = !this.dialog
            }
        }
    }
</script>

<style>
    .notOverflow{
        overflow: initial !important
    }
</style>

