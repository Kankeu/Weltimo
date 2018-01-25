
const state = {
    darked: false,
    loading: false,
    notifications: [],
    scrollTops: []
}

const mutations = {
    INVERTCOLOR(state){
        state.darked = !state.darked
    },
    SETLOADING(state, data){
        state.loading = data
    },
    ADDNOTIFICATION(state, data){
        state.notifications.unshift(data)
    },
    DELETENOTIFICATION(state, id){
        let notification = state.notifications.find(notification=>notification.id===id)
        let index = state.notifications.indexOf(notification)
        if(index>-1) state.notifications.splice(index,1)
    },
    ADDSCROLLTOP(state, data){
        let query = state.scrollTops.find(e=>(e.name===data.name))
        if(query){
            let index = state.scrollTops.indexOf(query)
            state.scrollTops.splice(index,1,data)
        }
        else state.scrollTops.push(data)
    }
}

const actions = {
    invertcolor({commit}){
        commit("INVERTCOLOR")
    },
    setLoading({commit},data){
        commit("SETLOADING", data)
    },
    addNotification({commit}, data){
        commit('ADDNOTIFICATION', data)
    },
    deleteNotification({commit}, id){
        commit('DELETENOTIFICATION', id)
    },
    addScrollTop({commit}, data){
        commit("ADDSCROLLTOP",data)
    }
}

export default {namespaced:true,state, mutations, actions}