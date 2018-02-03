window.Vue = require('vue')
import vueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vueResource from 'vue-resource'
import App from "./components/route/Route.vue"

Vue.use(Vuetify)
Vue.use(vueRouter)
Vue.use(vueResource)
let token = document.head.querySelector('meta[name="csrf-token"]');
window.Vue.http.headers.common['X-CSRF-TOKEN'] = token.content
window.Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.Vue.http.options.emulateHTTP = true

const router = new vueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            component: resolve => require(['./components/app/App.vue'], resolve),
            children:[
                {
                    path: "/",
                    component: resolve => require(['./components/app/Home.vue'], resolve),
                },
                {
                    path: "/sign_in",
                    component: resolve => require(['./components/app/Inscription.vue'], resolve),
                    name: "Inscription",
                },
            ]
        },
        {
            path: "*/:text",
            redirect: "/"
        }
    ],
})

const app = new Vue({
    components: {App},
    el: "#main",
    router,
})
