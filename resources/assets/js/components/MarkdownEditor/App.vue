<template>
    <v-dialog
      v-model="openDialog"
      fullscreen
      transition="dialog-bottom-transition"
      :overlay="false"
      scrollable
    >   
  <div id="app" style="width:100%" :class="[showMenu ? 'show-menu' : '', 'app']">
    <sideMenu />
    <main>
      <navBar @close="$emit('close')" /> 
      <section>
        <inputer />
        <outputer />
      </section>
    </main>
  </div>
  </v-dialog>
</template>

<script>
import sideMenu from './components/sideMenu.vue'
import navBar from './components/navBar.vue'
import inputer from './components/inputer.vue'
import outputer from './components/outputer.vue'

export default {
  components: {
    sideMenu,
    navBar,
    inputer,
    outputer
  },
  props:{
    openDialog: Boolean
  },
  mounted () {
    this.$store.dispatch('dashboard/loadCache')
  },
  computed: {
    showMenu () {
      return this.$store.state.dashboard.showMenu
    }
  }
}
</script>

<style lang="less" scoped>
 
  .app {
    position: relative;
    left: -220px;
    height: 100%;
    transition: all ease .5s;
    &.show-menu {
      left: 0;
      main {
        section {
          padding-right: 230px;
        }
      }
    }
    main {
      margin-left: 220px;
      width: 100%;
      height: 100%;
      background-color: #e0e0e0;
      section {
        box-sizing: border-box;
        height: 100%;
        padding: 10px;
        padding-bottom: 55px;
        display: flex;
        justify-content: center;
        transition: all ease .5s;
      }
    }
  }

  *::-webkit-scrollbar {
      display: block;
      width: 5px;
      background: #FAFAFA;
  }
  *::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: #E0E0E0;
  }
  *::-webkit-scrollbar-thumb:hover {
      background: #BDBDBD;
  }
</style>
