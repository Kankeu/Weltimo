<template>
  <div>
    <v-btn @click.native="open()" color="primary">Open the Dashboard</v-btn>
  
      <markdowneditor v-if="ready" @close="openDialog=false" :openDialog="openDialog"></markdowneditor>
  
  </div>
</template>

<script>

export default {
  components:{},
  data(){
    return{
      openDialog:false,
      ready:false
    }
  },
  methods:{
    open(){
        import("../MarkdownEditor/App").then((markdowneditor)=>{
            this.$options.components['markdowneditor'] = markdowneditor
            this.ready = true
            this.openDialog = true
        })
    }
  }
}
</script>
