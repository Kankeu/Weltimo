<template>
	<div class="outputer" v-if="html" v-html="html(ripeTxt)"></div>
</template>

<script>
  export default {
    data :() =>{
      return {
        scrollTrigger: false,
        html: null
      }
    },
    computed:{
      ripeTxt(){
        return this.$store.getters['dashboard/articleMd']
      }
    },
    mounted(){
        import("marked").then((marked)=>{
            import("highlight.js").then((highlight)=>{
                marked.setOptions({
                    highlight: function (code) {
                        return highlight.highlightAuto(code).value
                    }
                })
               this.html = marked
				console.log(this)
            })
        })
    },
	  watch:{
        ripeTxt(data){
            this.$forceUpdate()
            //Vue.compile(this.$el)
		}
	  }
  }
</script>

<style scoped lang="less">
	.outputer {
  	box-sizing: border-box;
  	height: 100%;
  	width: 50%;
    padding: 15px;
    resize: none;
    border: none;
    background-color: #f5f5f5;
    outline: none;
    font-family: inherit;
    font-size: 18px;
    color: #616161;
    box-shadow: 4px 5px 3px #aaa;
    white-space: normal;
    overflow-y: scroll;
    word-wrap: break-word;
	}
</style>