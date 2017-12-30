class state
{
    constructor(){
        this.state = {
            replyUser_id: null,
            loading: false
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
}

export default new state()
