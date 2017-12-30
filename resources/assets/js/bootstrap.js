window.Vue = require('vue')
//global.faker = require('faker')

import vueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VeeValidate from 'vee-validate'
import vueResource from 'vue-resource'
import './components/mixin/config'
import GlobalMixin from './components/mixin/GlobalMixin'
import $ from "jquery"
import VueTimeago from 'vue-timeago'
let store = require('./components/store/store')


Vue.use(VeeValidate);
Vue.use(Vuetify)
Vue.use(vueRouter)
Vue.use(vueResource)
let token = document.head.querySelector('meta[name="csrf-token"]');
window.Vue.http.headers.common['X-CSRF-TOKEN'] = token.content
window.Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.mixin(GlobalMixin)
Vue.use(VueTimeago, {
    name: 'timeago',
    locale: 'en-US',
    locales: {
        'en-US': require('vue-timeago/locales/en-US.json')
    }
})
window.jQuery = $
window.$ = $

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
                            store.default.dispatch("users/save", response.body)
                            next()
                        }else{
                            next('/')
                        }
                    })
                }
            },
            children:[
                {
                    path:"/",
                    component: resolve => require(['./components/user/Home.vue'], resolve),
                    name: "Home"
                },
                {
                    path:"profile/:id",
                    component: resolve => require(['./components/user/Profile.vue'], resolve),
                    name:"Profile",
                    children:[
                        {
                            path:"/",
                            component: resolve => require(['./components/user/profile/Home.vue'], resolve)
                        },
                        {
                            path:"following",
                            component: resolve => require(['./components/user/profile/CardFollowing.vue'], resolve),
                            name: "Following"
                        },
                        {
                            path:"followers",
                            component: resolve => require(['./components/user/profile/CardFollowers.vue'], resolve),
                            name: "Followers"
                        },
                        {
                            path:"albums",
                            component: resolve => require(['./components/user/profile/CardAlbums.vue'], resolve),
                            name: "Albums"
                        }
                    ]
                },
                {
                    path:"account",
                    component: resolve => require(['./components/user/Account.vue'], resolve),
                    name: "Account"
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
router.afterEach((to,from)=>{
    if(to.path.match(new RegExp('/user.*?',"g"))){
        store.default.dispatch('setting/setLoading',false)
    }
})
router.beforeEach((to,from,next)=>{
    if(to.path.match(new RegExp('/user.*?',"g"))){
        store.default.dispatch('setting/setLoading',true)
    }
    next()
})

export {
    router
}