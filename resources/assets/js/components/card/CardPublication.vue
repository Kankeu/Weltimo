<template>
    <div>
        <CardPublicationForm :dialog="false" v-if="!onlyDialog" @switchDialog="switchDialog"></CardPublicationForm>
        <v-dialog width="50%" content-class="notOverflow" v-model="dialog">
            <CardPublicationForm :dialog="true" @switchDialog="switchDialog"></CardPublicationForm>
        </v-dialog>
    </div>
</template>



<script>
    import CardPublicationForm from "./CardPublicationForm.vue"
    export default{
        components:{"CardPublicationForm":CardPublicationForm},
        props:{
            open: Boolean,
            onlyDialog: Boolean
        },
        data: ()=>({
            dialog:false
        }),
        methods:{
            switchDialog(){
                this.dialog = !this.dialog
            },
        },
        watch:{
            open(data){
                if(data) this.dialog = data
            },
            dialog(data){
                if(!data) this.$emit('close')
            }
        }
    }
</script>

<style>
    .notOverflow{
        overflow: initial !important
    }
</style>

