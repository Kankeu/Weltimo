import Vuex from "vuex"
Vue.use(Vuex)
import user from './modules/User'
import users from './modules/Users'
import setting from './modules/Setting'
import article from './modules/Article'
import actuality from './modules/Actuality'
import comment from './modules/Comment'
import query from './modules/Query'
import msgflash from './modules/MsgFlash'
import webSocketPlugin  from './webSocket/webSocketPlugin'
import like from './modules/Like'
import book from './modules/Book'

export default new Vuex.Store({
    //strict: process.env.NODE_ENV !== 'production',
    modules:{
        user,
        msgflash,
        article,
        actuality,
        query,
        users,
        comment,
        like,
        setting,
        book
    },
    plugins:[webSocketPlugin()]
})