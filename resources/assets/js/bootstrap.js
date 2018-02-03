window.Vue = require('vue')

import vueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vueResource from 'vue-resource'
import 'emojionearea/dist/emojionearea.css'
import 'emojionearea'
import './components/mixin/config'
import GlobalMixin from './components/mixin/GlobalMixin'
import './components/faceMotion/FaceMotion.css'
import VueScrollTo from 'vue-scrollto'
import VueTimeago from 'vue-timeago'
import Echo from "laravel-echo"
window.Pusher = require('pusher-js')
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'c44c08157a6c9f6414cf',
    secret: "b3e43f210686fa6a90ff",
    cluster: "eu"
})
let store = require('./components/store/store')
Vue.use(VueScrollTo)
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
const router = new vueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
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
                    path: "actualities",
                    component: resolve => require(['./components/user/Actualities.vue'], resolve),
                    name: "Actualities",
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
                    path: "courses",
                    component: resolve => require(['./components/user/Courses.vue'], resolve),
                    children:[
                        {
                            path:"/",
                            component: resolve => require(['./components/user/courses/Overview.vue'], resolve),
                            name: "Courses"
                        },
                        {
                            path:":level/:book?",
                            component: resolve => require(['./components/user/courses/Books.vue'], resolve),
                            name: "Books"
                        }
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
                            path:"books",
                            component: resolve => require(['./components/admin/Books.vue'], resolve)
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
                    path: "forum",
                    component: resolve => require(['./components/user/Forum.vue'], resolve),
                    name: "Forum",
                    children: [
                        {
                            path: "/",
                            component: resolve => require(['./components/user/forum/Home.vue'], resolve),
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
    ],
})
router.afterEach((to,from)=>{
    store.default.dispatch('setting/setLoading',false)
})
router.beforeEach((to,from,next)=>{
    if(from.name) store.default.dispatch('setting/addScrollTop',{scrollTop:document.body.scrollTop,name:from.name.toLowerCase()})
    store.default.dispatch('setting/setLoading',true)
    next()
})

export {
    router
}