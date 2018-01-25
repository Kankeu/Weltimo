class store
{
    constructor(){
        this.state = {
            loading: false,
            users: []
        }
    }

    get(key)
    {
        return this.state[key]
    }

    set(key,val)
    {
        this.state[key] = val
    }

    addUser(users)
    {
        this.state.users.push(...users)
    }

    deleteUser(id)
    {
        let user = this.state.users.find(user=>user.id===id)
        let index = this.state.users.indexOf(user)
        if(index>-1) this.state.users.splice(index,1)
    }
}

export default new store()