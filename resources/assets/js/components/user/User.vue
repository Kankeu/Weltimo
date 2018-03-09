<template>
    <v-app :dark="darked"  id="showTop">
        <v-card :dark="darked"  :color="(darked) ? 'theme--dark' :'theme--light bg_app'" class="block_app" flat>
            <v-toolbar  :scroll-off-screen="!$vuetify.breakpoint.smAndUp" :dark="darked" :class="$vuetify.breakpoint.smAndUp || 'phone'" :style="(darked) ? 'z-index:8' : 'z-index:8;background: #00b4ff'" :color="(darked) ? 'theme--dark' : null"  prominent fixed flat extended>
                <v-toolbar-side-icon class="white--text" @click="($vuetify.breakpoint.smAndUp) ? mini=!mini : drawer=!drawer" v-if="$route.path==='/' || $vuetify.breakpoint.smAndUp"></v-toolbar-side-icon>
                <v-btn icon class="white--text" @click="$router.go(-1)" v-else><v-icon>chevron_left</v-icon></v-btn>
                <v-toolbar-title class="white--text" v-if="$vuetify.breakpoint.smAndUp">Weltimo</v-toolbar-title>
                <v-select
                        light
                        solo
                        @input.native="search"
                        :items="searchItems"
                        placeholder="Search"
                        multiple
                        chips
                        item-text="name"
                        item-value="id"
                        v-model="selectedUser"
                        max-height="auto"
                        v-if="!$vuetify.breakpoint.smAndUp"
                        prepend-icon="search"
                        autocomplete
                >
                    <template slot="selection" slot-scope="data">
                        <v-chip
                                close
                                @input="data.parent.selectItem(data.item)"
                                :selected="data.selected"
                                class="chip--select-multi"
                                :key="JSON.stringify(data.item)"
                        >
                            <v-avatar>
                                <img :src="data.item.avatar">
                            </v-avatar>
                            {{ data.item.name }}
                        </v-chip>
                    </template>
                    <template slot="item" slot-scope="data">
                        <template v-if="typeof data.item !== 'object'">
                            <v-list-tile-content v-text="data.item"></v-list-tile-content>
                        </template>
                        <template v-else>
                            <v-list-tile-avatar>
                                <img v-bind:src="data.item.avatar"/>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                            </v-list-tile-content>
                        </template>
                    </template>
                </v-select>
                <v-spacer v-else></v-spacer>
                <v-menu content-class="menuNotification" :close-on-content-click="false" max-height="350px">
                    <v-badge color="cyan" slot="activator" left>
                        <span slot="badge" v-if="notifications.length>0">{{notifications.length}}</span>
                        <v-icon class="white--text" icon>notifications</v-icon>
                    </v-badge>
                    <v-list v-if="notifications.length>0">
                        <v-list-tile avatar v-for="notification,i in notifications" :key="i" :to="'/profile/'+notification.user.id">
                            <v-list-tile-avatar >
                                <img :src="notification.user.avatar"/>
                            </v-list-tile-avatar>
                            <v-tooltip top>
                                <v-list-tile-content slot="activator" style="width:231px;margin-right:5px">
                                    <v-list-tile-title>{{ notification.message }}</v-list-tile-title>
                                </v-list-tile-content>
                                <span>{{ notification.message }}</span>
                            </v-tooltip>
                            <v-list-tile-action v-if="notification.isFollower">
                                <v-btn
                                        @click.prevent.stop=""
                                        :color="'primary'"
                                        slot="activator"
                                        outline
                                >
                                    <v-icon>person_add</v-icon>Follow
                                </v-btn>
                            </v-list-tile-action>
                            <v-list-tile-action v-if="notification.isNewsletter">
                                <v-btn
                                        @click.prevent.stop="show(notification)"
                                        :color="'primary'"
                                        slot="activator"
                                >Show
                                </v-btn>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar>
            <dialog-comment :open="openDialogComment" @close="openDialogComment=!openDialogComment" :article="article" :articles="articles"></dialog-comment>
            <v-layout style="margin-bottom: 65px;" row>
                <v-flex sm10 xs12 lg8 md8 offset-lg2 offset-sm1 offset-md2>
                    <v-card :dark="darked" :color="(darked) ? 'theme--dark' : 'theme--light bg_app'" style="height: 100%"  class="card--flex-toolbar">
                        <v-progress-linear v-bind:indeterminate="true" v-if="loading && !$vuetify.breakpoint.smAndUp" style="z-index: 8;margin-left: 0;top: 50px;position:fixed"></v-progress-linear>
                        <v-toolbar v-if="$vuetify.breakpoint.smAndUp" dark card :style="$vuetify.breakpoint.smAndDown ? 'z-index:8;width:83.5%;position:fixed' :'z-index:8;width:66.66666666666666%;position:fixed'" prominent>
                            <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin-left: 0;top:-14px;position:absolute"></v-progress-linear>
                            <v-toolbar-title class="body-2 grey--text">{{$route.name}}</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-select
                                    light
                                    solo
                                    @input.native="search"
                                    :items="searchItems"
                                    placeholder="Search"
                                    multiple
                                    chips
                                    item-text="name"
                                    item-value="id"
                                    v-model="selectedUser"
                                    max-height="auto"
                                    prepend-icon="search"
                                    autocomplete
                            >
                                <template slot="selection" slot-scope="data">
                                    <v-chip
                                            close
                                            @input="data.parent.selectItem(data.item)"
                                            :selected="data.selected"
                                            class="chip--select-multi"
                                            :key="JSON.stringify(data.item)"
                                    >
                                        <v-avatar>
                                            <img :src="data.item.avatar">
                                        </v-avatar>
                                        {{ data.item.name }}
                                    </v-chip>
                                </template>
                                <template slot="item" slot-scope="data">
                                    <template v-if="typeof data.item !== 'object'">
                                        <v-list-tile-content v-text="data.item"></v-list-tile-content>
                                    </template>
                                    <template v-else>
                                        <v-list-tile-avatar>
                                            <img v-bind:src="data.item.avatar"/>
                                        </v-list-tile-avatar>
                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                                        </v-list-tile-content>
                                    </template>
                                </template>
                            </v-select>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <div :class="$vuetify.breakpoint.smAndUp ? 'layout_bloc' : 'layout_phone'">
                            <router-view></router-view>
                        </div>
                    </v-card>
                </v-flex>
                <v-flex  lg2 sm1 md2>
                    <v-speed-dial
                            bottom
                            right
                            direction="top"
                            :hover="$vuetify.breakpoint.smAndUp"
                            fixed
                            v-model="speedDial"
                            :style="$vuetify.breakpoint.smAndUp ? 'z-index:8' : 'bottom:0;right:0;z-index:8'"
                    >
                        <v-btn
                                slot="activator"
                                color="blue darken-2"
                                dark
                                fab
                                hover
                                v-model="speedDial"
                        >
                            <v-icon>account_circle</v-icon>
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-btn
                                fab
                                dark
                                small
                                color="green"
                                @click.native="dialogPublication=true"
                        >
                            <v-icon>edit</v-icon>
                        </v-btn>
                        <v-btn
                                fab
                                dark
                                small
                                @click="drawerUsers=!drawerUsers"
                                color="indigo"
                        >
                            <v-icon>group</v-icon>
                        </v-btn>
                        <v-tooltip top>
                            <v-btn
                                    slot="activator"
                                    fab
                                    dark
                                    small
                                    color="red"
                                    @click="scrollToTop"
                            >
                                <v-icon>keyboard_arrow_up</v-icon>
                            </v-btn>
                            <span>Scroll to top!</span>
                        </v-tooltip>
                    </v-speed-dial>
                    <v-navigation-drawer
                            temporary
                            hide-overlay
                            class="menuDrawer"
                            right
                            app
                            :style="$vuetify.breakpoint.smAndUp||'margin-top:63px !important'"
                            v-model="drawerUsers"
                    >
                        <v-list class="pa-1">
                            <v-list-tile avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>Users online</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                        <v-list class="pt-0" dense>
                            <v-divider></v-divider>
                            <v-list-tile @click="" :to="'/profile/'+user.id" avatar v-for="user,i in users" :key="i">
                                <v-list-tile-action>
                                    <v-icon :style="(user.online) ? 'color:green': null">fiber_manual_record</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-avatar>
                                    <img :src="user.avatar" />
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{user.name+" "+user.forename}}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-navigation-drawer>
                </v-flex>
            </v-layout>
        </v-card>
        <v-navigation-drawer :mobile-break-point="700" fixed app :style="!$vuetify.breakpoint.smAndUp || 'margin-top:63px'" clipped :class="$vuetify.breakpoint.smAndUp ? 'menuDrawer' : null"  :dark="darked" :mini-variant.sync="mini" v-model="drawer">
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img :src="user.avatar" />
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{user.name+" "+user.forename}}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.native.stop="mini = !mini">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list dense>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Dashboard</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile to="/" exact>
                        <v-list-tile-action>
                            <v-icon>home</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Home</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile to="/box">
                        <v-list-tile-action>
                            <v-icon>email</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Box</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile :to="'/profile/'+user.id">
                        <v-list-tile-action>
                            <v-avatar
                                    size="30px"
                            >
                                <img :src="user.avatar" alt="avatar">
                            </v-avatar>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Profile</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>book</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Programms</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile to="/exercises">
                        <v-list-tile-content>
                            <v-list-tile-title>Exercises</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile to="/courses">
                        <v-list-tile-content>
                            <v-list-tile-title>Courses</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>school</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Germany and some universities</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile to=" ">
                        <v-list-tile-content>
                            <v-list-tile-title>About Germany</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile to=" ">
                        <v-list-tile-content>
                            <v-list-tile-title>Why Germany for study</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>Life in Germany</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile to="/university">
                        <v-list-tile-content>
                            <v-list-tile-title>Universities</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>apps</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>More</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile to="/actualities">
                        <v-list-tile-action>
                            <v-icon>whatshot</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Actualities</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile to="/forum">
                        <v-list-tile-action>
                            <v-icon>forum</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Forum</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>settings</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Parameters</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile to="/account">
                        <v-list-tile-action>
                            <v-icon>person</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Account</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="logout">
                        <v-list-tile-action>
                            <v-icon>exit_to_app</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Log out</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>settings_applications</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Application</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>bug_report</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Signal bug</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile to="/about">
                        <v-list-tile-action>
                            <v-icon>info</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>About us</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>invert_colors</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <v-tooltip top>
                                    <v-switch slot="activator" v-model="darked"></v-switch>
                                    <span>Change the background color to black</span>
                                </v-tooltip>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-group v-if="user.role==='admin'">
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon dark>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Dashboard</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile to="/admin" exact>
                        <v-list-tile-action>
                            <v-icon dark>apps</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Home</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile to="/admin/users">
                        <v-list-tile-action>
                            <v-icon dark>group</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Users</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile to="/admin/books">
                        <v-list-tile-action>
                            <v-icon dark>edit</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Books</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile to="/admin/university">
                        <v-list-tile-action>
                            <v-icon dark>school</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>University</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile to="/admin/edit">
                        <v-list-tile-action>
                            <v-icon dark>edit</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Edit</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile to="/admin/server">
                        <v-list-tile-action>
                            <v-icon dark>dns</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Process</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <v-footer absolute class="pa-3">
            <v-spacer></v-spacer>
            <div>© {{ new Date().getFullYear() }} Weltimo</div>
        </v-footer>
        <textarea id="textareaClipboard" @focus.stop.prevent=" " style="position: fixed;top:-1000px;left:-1000px"></textarea>
        <pdf-viewer url="url" v-if="$vuetify.breakpoint.smAndUp"></pdf-viewer>
        <cardPublication :onlyDialog="true" :open="dialogPublication" @close="dialogPublication=false"></cardPublication>
    </v-app>
</template>

<script>
    import cardPublication from '../card/CardPublication.vue'
    import dialogComment from "../comment/DialogComment.vue"
    import pdfViewer from './courses/PdfViewer'
    export default{
        components:{cardPublication,dialogComment,pdfViewer},
        data(){
            return {
                darked: false,
                drawer: false,
                speedDial: false,
                dialogPublication: false,
                body: null,
                timerIndex: null,
                openDialogComment: false,
                articles : [],
                article: {},
                drawerUsers: false,
                searchItems: [],
                selectedUser: null,
                mini: false
            }
        },
        computed:{
            user(){
                return this.$store.state.user.user
            },
            users(){
                // && user.id!==this.user.id
                let usersOnline = this.$store.state.users.users.filter(user=>(user.online))
                return usersOnline
            },
            loading(){
                return this.$store.state.setting.loading
            },
            notifications(){
                return this.$store.state.setting.notifications
            }
        },
        methods:{
            logout(){
                this.$http.get('/logout',).then(response => {
                    if (response.body.status === 1) {
                        this.$store.dispatch("user/delete")
                        window.location.href = window.location.host
                        window.location.reload()
                    }
                })
            },
            scrollToTop(){
                this.$scrollTo('#showTop',500,{container:'body'})
            },
            show(notification){
                if(notification.article){
                    this.openBox(notification)
                }else{
                    let article = this.$store.state.article.articles.find(article=>article.id===notification.comment.article_id)
                    if(article){
                        notification.article = article
                        this.openBox(notification)
                    }else{
                        this.$http.get('/user/article/'+notification.comment.article_id).then(response=>{
                            if(response.body.id){
                                let user = response.body.user
                                delete response.body.user
                                this.$store.dispatch('article/save',response.body)
                                this.$store.dispatch('users/save',user)
                                notification.article = response.body
                                this.openBox(notification)
                            }
                        })
                    }
                }
            },
            openBox(notification){
                this.articles=[notification.article]
                this.openDialogComment = true
                this.$nextTick(()=>{
                    this.article = notification.article
                    this.$store.dispatch('setting/deleteNotification', notification.id)
                })
            },
            search($event){
                if($event.target.value.trim().length>2){
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.get('/user/search/'+$event.target.value.trim()).then(response=>{
                        response.body.map(responseUser=>{
                            let user = this.searchItems.find(user=>user.value===responseUser.id)
                            if(!user) this.searchItems.push({value:responseUser.id,name:responseUser.name+" "+responseUser.forename,avatar:responseUser.avatar})
                        })
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }else{
                    this.searchItems = []
                }
            }
        },
        mounted(){
            this.darked = this.$store.state.setting.darked
            this.drawer = this.$vuetify.breakpoint.smAndUp
            this.mini = this.$vuetify.breakpoint.smAndUp
            this.body = document.querySelector('body')
        },
        watch:{
            darked(data){
                this.$store.dispatch('setting/invertcolor')
                if(data){
                    document.querySelectorAll('.emojionearea-editor').map(elt=>{
                        elt.style.color = "white"
                    })
                }else{
                    document.querySelectorAll('.emojionearea-editor').map(elt=>{
                        elt.style.color = "#424242"
                    })
                }
            },
            selectedUser(data){
                if(data.length>0){
                    this.$router.push('/profile/'+data[0].value)
                }
            },
            '$vuetify.breakpoint.smAndUp'(data){
                this.drawer = data
                this.mini = data
            },
        }
    }
</script>

<style scoped>
    .input-group--solo .input-group__input .input-group__append-icon{display:none !important}
</style>
<style>
    /*.bg_app{
       background-color: #e6ecf0 !important;
    }*/
    #showTop{
        overflow-x: hidden;
    }
    .noOverflow{
        overflow: hidden !important;
    }
    .layout_bloc{
        margin-top: 60px;
    }
    .layout_phone{
        margin-top: 20px;
    }
    .menuNotification{
        position: fixed !important;
        top: 50px !important;
        right: 10px !important;
        left: inherit !important;
        bottom: inherit !important
    }
    .menuCover{
        width:350px !important;
        height:200px !important;
    }
    .blue_sky{
        background-color: #b3d4fc;
    }
    .card__media__content{
        white-space: pre-line;
        margin-bottom: -4px;
        padding-left: 10px;
        margin-top: -4px;
        margin: -4px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
    .card__media{
        color: rgba(255,255,255,1.00);
        font-size: 30px;
        line-height: 1.2000em;
        text-align: center;
        font-family: monospace
    }
    .overflow{
        overflow-y: auto !important;
    }
    .blackForm .emojionearea{
        background-color: #424242 !important;
        color: white !important;
    }
    .blackForm .emojionearea-editor{
        color: white !important;
    }
    .emojionearea .emojionearea-picker .emojionearea-search > input{
        color: black;
    }
    .phone .toolbar__extension{
        display: none;
    }
    .card--flex-toolbar {
        margin-top: 64px;
    }
    .application .theme--dark.toolbar, .theme--dark .toolbar{
        background-color: inherit;
    }
    .fontBlack{
        background: #424242;
    }
    .menuDrawer{
        margin-top:128.49px !important;
        position: fixed;
    }
    .background0{
        background-color: #ddd !important;
    }
    .background1{
        background-color: transparent !important;
        color: black !important;
        text-align: left !important;
    }
    .background2{
        background-color:rgba(0,244,255,1.00);background-image:-webkit-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(0,244,255,1.00) 0%),color-stop(rgba(17,55,173,1.00) 100%));background-image:linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%) !important;
        display: flex;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background3{
        background-color:rgba(23,172,255,1.00);background-image:-webkit-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(102,244,133,1.00) 0%),color-stop(rgba(23,172,255,1.00) 100%));background-image:linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%) !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background4{
        background-color:rgba(5,174,53,1.00);background-image:-webkit-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(248,240,35,1.00) 0%),color-stop(rgba(5,174,53,1.00) 100%));background-image:linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%) !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background5{
        background-color:rgba(255,0,71,1.00);background-image:-webkit-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(255,0,71,1.00) 0%),color-stop(rgba(44,52,199,1.00) 100%));background-image:linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%) !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background6{
        background-color:rgba(115,33,173,1.00);background-image:-webkit-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-moz-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-ms-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-o-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-webkit-gradient(left top,right bottom,color-stop(rgba(115,33,173,1.00) 0%),color-stop(rgba(72,229,169,1.00) 100%));background-image:linear-gradient(135deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%) !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background7{
        background-color:rgba(167,183,216,1.00);background-image:-webkit-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(167,183,216,1.00) 0%),color-stop(rgba(22,24,29,1.00) 100%));background-image:linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%) !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background8{
        background-color:rgba(93,63,218,1.00);background-image:-webkit-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(252,54,253,1.00) 0%),color-stop(rgba(93,63,218,1.00) 100%));background-image:linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background9{
        background: url(https://fb-s-b-a.akamaihd.net/h-ak-fbx/v/t39.10873-6/21624555_753398934860280_5226642317791723520_n.jpg?oh=5e66dc787dfbb00fa0fba58e552f6b47&oe=5ACE152C&__gda__=1522286412_69dab1e2c504c8b996f49800a61c1edd) center center / cover no-repeat !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .backgroundSmall9{
        background: url(https://fb-s-a-a.akamaihd.net/h-ak-fbx/v/t39.10873-6/p32x32/21274785_753398928193614_2779422909477683200_n.jpg?oh=562d5b1b9d519375f9eca0af689328d1&oe=5ACE57F0&__gda__=1522048561_b99ec82924cf40a75352e7e8db4e84f9) center center / cover no-repeat !important
    }
</style>