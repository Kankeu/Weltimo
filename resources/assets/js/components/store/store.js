import Vuex from "vuex"
Vue.use(Vuex)
//import dashboard from './modules/Dashboard'
import user from './modules/User'
import users from './modules/Users'
import setting from './modules/Setting'
import article from './modules/Article'
import comment from './modules/Comment'
import query from './modules/Query'
import msgflash from './modules/MsgFlash'


export default new Vuex.Store({
    //strict: process.env.NODE_ENV !== 'production',
    modules:{
        //dashboard,
        user,
        msgflash,
        article,
        query,
        users,
        comment,
        setting
    }
})