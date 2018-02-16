<template>
    <div style="overflow: hidden;height: 250px;width: 500px;display: inline-block">
        <markdown-editor :openDialog="open" @close="open=false"></markdown-editor>
    </div>
</template>

<script>
    import markdownEditor from '../MarkdownEditor/App.vue'
    export default{
        components:{markdownEditor},
        data: ()=>({
            open: true
        }),
        mounted(){

        }
    }
</script>
