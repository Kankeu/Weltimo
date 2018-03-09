class state{
    constructor(){
        this.state = {
            user: null
        }
    }

    setUser(user){
        this.state.user = user
    }

    getUser(user){
        return this.state.user
    }
}

export default new state()