<template>
    <v-dialog :width="$vuetify.breakpoint.smAndUp ? '50%' : '90%'" content-class="overflow" v-model="dialog">
        <card-form-edit :article="article" v-if="dialog" @switchDialog="dialog=false"></card-form-edit>
    </v-dialog>
</template>

<script>
    import cardFormEdit from './CardFormEdit.vue'
    export default{
        components:{cardFormEdit},
        props:{
            open: Boolean,
            article: Object
        },
        data: ()=>({
            dialog: false
        }),
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