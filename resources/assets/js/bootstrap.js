window.Vue = require('vue')
//global.faker = require('faker')

import vueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VeeValidate from 'vee-validate'
import vueResource from 'vue-resource'
let store = require('./components/store/store')


Vue.use(VeeValidate);
Vue.use(Vuetify)
Vue.use(vueRouter)
Vue.use(vueResource)
let token = document.head.querySelector('meta[name="csrf-token"]');
window.Vue.http.headers.common['X-CSRF-TOKEN'] = token.content
window.Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const router = new vueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            component: resolve => require(['./components/app/App.vue'], resolve),
            children:[
                {
                    path: "/",
                    component: resolve => require(['./components/Home.vue'], resolve),
                },
                {
                    path: "/sign_in",
                    component: resolve => require(['./components/Inscription.vue'], resolve),
                    name: "Inscription",
                },
                {
                    path: "/actus",
                    component: resolve => require(['./components/Actu.vue'], resolve),
                    name: "Actus",
                },
                {
                    path: "/about",
                    component: resolve => require(['./components/Info.vue'], resolve),
                    name: "About",
                },
            ]
        },
        {
            path: "/admin",
            component: resolve => require(['./components/admin/Admin.vue'], resolve),
            name: "Admin",
        },
        {
            path: "/admind",
                component: resolve => require(['./components/admin/adminDashboard.vue'], resolve),
            name: "Admind",
        },
        {
            path: "/user",
            component: resolve => require(['./components/user/User.vue'], resolve),
            beforeEnter: (to, from, next) => {
                let connected = (store.default.state.user.user) ? store.default.state.user.user.confirmated : 0
                if(connected===1){
                    next()
                }else{
                    Vue.http.get('/log_in').then(response=>{
                        if(response.body.confirmated === 1){
                            store.default.dispatch("user/save", response.body)
                            next()
                        }else{
                            next('/')
                        }
                        console.log("request login")
                    })
                }
            },
            children:[
                {
                    path:"/",
                    component: resolve => require(['./components/user/Home.vue'], resolve),
                },
                {
                    path:"profile",
                    component: resolve => require(['./components/user/Profile.vue'], resolve),
                    name:"Profile",
                },
                {
                    path: "*",
                    redirect: "/"
                }
            ]
        },
        {
            path: "*/:text",
            redirect: "/"
        }
    ],
})

export {
    router
}