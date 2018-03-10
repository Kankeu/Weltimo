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
                    Vue.http.get('/login').then(response=>{
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
                    path: "exercises",
                    component: resolve => require(['./components/user/Courses.vue'], resolve),
                    children:[
                        {
                            path:"/",
                            component: resolve => require(['./components/user/courses/Overview.vue'], resolve),
                            name: "Exercises"
                        },
                        {
                            path:":level/:book?",
                            component: resolve => require(['./components/user/courses/Books.vue'], resolve),
                            name: "Books"
                        }
                    ]
                },
                {
                    path: "box",
                    component: resolve => require(['./components/user/Box.vue'], resolve),
                    name: "Box"
                },
                {
                    path: "forum",
                    component: resolve => require(['./components/user/Forum.vue'], resolve),
                    name: "Forum",
                    children: [
                        {
                            path: "/",
                            component: resolve => require(['./components/user/forum/Home.vue'], resolve),
                        },
                        {
                            path: ":type",
                            component: resolve => require(['./components/user/forum/Topics.vue'], resolve),
                        },
                        {
                            path: "topic/:id",
                            component: resolve => require(['./components/user/forum/ShowTopic.vue'], resolve),
                        },
                        {
                            path: "topic/:id/response/:response_id",
                            component: resolve => require(['./components/user/forum/ShowTopic.vue'], resolve),
                        }
                    ]
                },
                {
                    path: 'university',
                    component: resolve => require(['./components/user/University.vue'], resolve),
                    children:[
                        {
                            path: '/',
                            component: resolve => require(['./components/user/university/Home.vue'], resolve),
                            name: "Universities"
                        },
                        {
                            path: 'berlin',
                            component: resolve => require(['./components/user/university/Berlin.vue'], resolve),
                            name: 'Berlin'
                        },
                        {
                            path: 'ilmenau',
                            component: resolve => require(['./components/user/university/Ilmenau.vue'], resolve),
                            name: 'Ilmenau'
                        },
                        {
                            path: 'bochum',
                            component: resolve => require(['./components/user/university/Bochum.vue'], resolve),
                            name: 'Bochum'
                        },
                        {
                            path: 'bremen',
                            component: resolve => require(['./components/user/university/Bremen.vue'], resolve),
                            name: 'Bremen'
                        },
                        {
                            path: 'clausthal',
                            component: resolve => require(['./components/user/university/Clausthal.vue'], resolve),
                            name: 'Clausthal'
                        },
                        {
                            path: 'mannheim',
                            component: resolve => require(['./components/user/university/Mannheim.vue'], resolve),
                            name: 'Mannheim'
                        },
                        {
                            path: 'kaiserslautern',
                            component: resolve => require(['./components/user/university/Kaiserslautern.vue'], resolve),
                            name: 'Kaiserslautern'
                        },
                        {
                            path: 'paderborn',
                            component: resolve => require(['./components/user/university/Paderborn.vue'], resolve),
                            name: 'Paderborn'
                        },
                        {
                            path: 'munich',
                            component: resolve => require(['./components/user/university/Munich.vue'], resolve),
                            name: 'Munich'
                        },
                        {
                            path: 'siegen',
                            component: resolve => require(['./components/user/university/Siegen.vue'], resolve),
                            name: 'Siegen'
                        },
                        {
                            path: "*",
                            redirect: "/university"
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
                            path:"university",
                            component: resolve => require(['./components/admin/University.vue'], resolve)
                        },
                        {
                            path: "*",
                            redirect: "/"
                        }
                    ]
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