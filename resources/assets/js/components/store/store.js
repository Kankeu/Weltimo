import Vuex from "vuex"
Vue.use(Vuex)
import dashboard from './modules/Dashboard'
import user from './modules/User'
import msgflash from './modules/MsgFlash'


export default new Vuex.Store({
                    modules:{
                        dashboard,
                        user,
                        msgflash
                    }
                })