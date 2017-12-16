import {router} from "./bootstrap"
import App from "./components/route/Route.vue"
import store from './components/store/store'

const app = new Vue({
    components: {App},
    el: "#main",
    router,
    store
})
