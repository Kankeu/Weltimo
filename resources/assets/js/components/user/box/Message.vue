<template>
    <div>
        <li class="self" v-if="message.sender_id===user.id">
            <div class="msg elevation-3">
                <p>{{message.message}}</p>
                <time><timeago :since="message.created_at" :auto-update="61" :max-time="86400 * 365"></timeago></time>
            </div>
        </li>
        <li class="other" v-else>
            <div class="msg elevation-3">
                <p>{{message.message}}</p>
                <time><timeago :since="message.created_at" :auto-update="61" :max-time="86400 * 365"></timeago></time>
            </div>
        </li>
    </div>
</template>

<script>
    export default{
        props:{
            message: Object
        },
        computed:{
            user(){
                return this.$store.state.user.user
            }
        }
    }
</script>

<style scoped>
     li {
        padding: 0.5rem;
        overflow: hidden;
        display: flex;
    }
     .avatar {
        width: 40px;
        height: 40px;
        position: relative;
        display: block;
        z-index: 2;
        border-radius: 100%;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        -ms-border-radius: 100%;
        background-color: rgba(255,255,255,0.9);
    }

    .other .msg {
        order: 1;
        border-top-left-radius: 0px;
        background-color: #757575;
    }

    .self {
        justify-content: flex-end;
        align-items: flex-end;
    }
    .self .msg {
        order: 1;
        border-bottom-right-radius: 0px;
        background-color: #2196f3;
    }
    .self .avatar {
        order: 2;
    }

    .msg {
        background: white;
        min-width: 300px;
        padding: 10px;
        border-radius: 2px;
    }
    .msg p {
        font-size: 17px;
        margin: 0 0 0.2rem 0;
        color: white;
        word-wrap: break-word;
    }
    @media screen and (max-width: 550px) {
        .msg img {
            width: 200px;
        }
    }
    .msg time {
        font-size: 0.8rem;
        color: #ccc;
        margin-top: 3px;
        float: right;
        cursor: default;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
</style>

