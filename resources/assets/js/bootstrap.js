window.Vue = require('vue')

import vueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VeeValidate from 'vee-validate'
import vueResource from 'vue-resource'
import './components/mixin/config'
import GlobalMixin from './components/mixin/GlobalMixin'
import './components/faceMotion/FaceMotion.css'
import $ from "jquery"
import VueScrollTo from 'vue-scrollto'
import VueTimeago from 'vue-timeago'
import Echo from "laravel-echo"
import "emojionearea"
import "emojionearea/dist/emojionearea.css"
window.Pusher = require('pusher-js')
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'c44c08157a6c9f6414cf',
    secret: "b3e43f210686fa6a90ff",
    cluster: "eu"
})
let store = require('./components/store/store')
Vue.use(VueScrollTo)

Vue.use(VeeValidate);
Vue.use(Vuetify)
Vue.use(vueRouter)
Vue.use(vueResource)
let token = document.head.querySelector('meta[name="csrf-token"]');
window.Vue.http.headers.common['X-CSRF-TOKEN'] = token.content
window.Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.Vue.http.options.emulateHTTP = true

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
            path: "/user",
            component: resolve => require(['./components/user/User.vue'], resolve),
            beforeEnter: (to, from, next) => {
                let connected = (store.default.state.user.user) ? store.default.state.user.user.confirmated : 0
                if(connected===1){
                    next()
                }else{
                    Vue.http.get('/log_in').then(response=>{
                        if(parseInt(response.body.confirmated) === 1){
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
                    path: "actus",
                    component: resolve => require(['./components/user/Actu.vue'], resolve),
                    name: "Actus",
                },
                {
                    path:"profile/:id",
                    component: resolve => require(['./components/user/Profile.vue'], resolve),
                    name:"Profile",
                    children:[
                        {
                            path:"/",
                            component: resolve => require(['./components/user/profile/Home.vue'], resolve),
                            children:[
                                {
                                    path:"article/:article",
                                    component: resolve => require(['./components/card/Article.vue'], resolve),
                                },
                            ]
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
                        },
                    ]
                },
                {
                    path: "admin",
                    component: resolve => require(['./components/admin/Admin.vue'], resolve),
                    name: "Admin",
                    children:[
                        {
                            path:"/",
                            component: resolve => require(['./components/admin/Home.vue'], resolve)
                        },
                        {
                            path:"users",
                            component: resolve => require(['./components/admin/Users.vue'], resolve)
                        },
                        {
                            path:"edit",
                            component: resolve => require(['./components/admin/Edit.vue'], resolve)
                        },
                        {
                            path:"server",
                            component: resolve => require(['./components/admin/Server.vue'], resolve)
                        },
                        {
                            path: "*",
                            redirect: "/user"
                        }
                    ]
                },
                {
                    path:"account",
                    component: resolve => require(['./components/user/Account.vue'], resolve),
                    name: "Account"
                },
                {
                    path: "about",
                        component: resolve => require(['./components/app/Info.vue'], resolve),
                    name: "About",
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