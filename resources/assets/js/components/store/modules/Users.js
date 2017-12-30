import Vue from 'vue'
//import {subscriptionActions,subscriptionMutations} from './Subscription'
const state = {
    users: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(dataUser){
            let user = state.users.find(user => user && user.id === dataUser.id)
            if(user){
                let index = state.users.indexOf(user)
                if(index>-1) state.users.splice(index,1,dataUser)
            } else{
                state.users.push(dataUser)
            }
        })
    },
    UPDATE(state, data) {
        let user = state.users.find((user)=>user.id === data.id)
        let index = state.users.indexOf(user)
        if(index>-1) state.users.splice(index,1,data)
    },
    DELETE(state, data){
        let user = state.users.find((user)=>user.id === data.id)
        let index = state.users.indexOf(user)
        if(index!==-1) state.users.splice(index,1)
    },






    ADDFOLLOWERS(state, {id,data}){
        let user = state.users.find(user=>user.id===id)
        let index = state.users.indexOf(user)
        if(Array.isArray(user.followers)) user.followers.push(...data)
        else user.followers = data
        user.followers_count++
        if(index>-1) state.users.splice(index,1,user)
    },
    ADDFOLLOWING(state, {id,data}){
        let user = state.users.find(user=>user.id===id)
        let index = state.users.indexOf(user)
        if(Array.isArray(user.following)) user.following.push(...data)
        else user.following = data
        user.following_count++
        if(index>-1) state.users.splice(index,1,user)
    },
    FOLLOW(state,{id,followed}){
        let user = state.users.find(user=>user.id===id)
        let index = state.users.indexOf(user)
        user.followed = followed
        if(index>-1) state.users.splice(index,1,user)
    },
    DELETEFOLLOWERS(state, {id,data}){
        let user = state.users.find(user=>user.id===id)
        let index = state.users.indexOf(user)
        let indexFollower
        if(Array.isArray(user.followers)) indexFollower = user.followers.indexOf(user.followers.find(user=>user.id===id))
        if(Array.isArray(user.followers)) if(indexFollower>-1) user.followers.splice(indexFollower,1)
        else user.followers = null
        user.followers_count--
        if(index>-1) state.users.splice(index,1,user)
    },
    DELETEFOLLOWING(state, {id,data}){
        let user = state.users.find(user=>user.id===id)
        let index = state.users.indexOf(user)
        let indexFollowing
        if(Array.isArray(user.following)) indexFollowing = user.following.indexOf(user.following.find(user=>user.id===id))
        if(Array.isArray(user.following)) if(indexFollowing>-1) user.following.splice(indexFollowing,1)
        else user.following = null
        user.following_count--
        if(index>-1) state.users.splice(index,1,user)
    },
    UNFOLLOW(state, id){
        let user = state.users.find(user=>user.id===id)
        let index = state.users.indexOf(user)
        user.followed = followed
        if(index>-1) state.users.splice(index,1,user)
    },
    DONTFOllOW(state, {user, follower}){

    }

}

const actions = {
    save({commit}, data){
        if(!Array.isArray(data)){
            data = [data]
        }
        commit("SAVE",data)
    },
    update({commit}, data) {
        commit("UPDATE",data)
    },
    delete({commit}, data){
        commit("DELETE", data)
    },


    addFollowers({commit},data){
        if(!Array.isArray(data.data)){
            data.data = [data.data]
        }
        commit("ADDFOLLOWERS",data)
    },
    addFollowing({commit},data){
        if(!Array.isArray(data.data)){
            data.data = [data.data]
        }
        commit("ADDFOLLOWING",data)
    },
    follow({commit,state,rootState},data){
        commit("FOLLOW", data)
        commit("ADDFOLLOWERS",{id:data.followed.receiver_id, data:[rootState.user.user]})
        commit("ADDFOLLOWING",{id:data.followed.sender_id, data:[rootState.users.users.find(user=>user.id===data.followed.receiver_id)]})
    },
    unfollow({commit,state,rootState},data){
        commit("UNFOLLOW", data)
        commit("DELETEFOLLOWERS",{id:data.id, data:rootState.user.user})
        commit("DELETEFOLLOWING")
    }
}


export default {namespaced:true,state,mutations,actions}