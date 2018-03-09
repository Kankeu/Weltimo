<template>
    <v-card flat  v-scroll="{callback: this.loadMore}" height="auto">
        <v-toolbar flat>
            <v-toolbar-title>{{level}} Books</v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
            <book :book="book" v-for="book in books" :key="book.id"></book>
        </v-list>
    </v-card>
</template>

<script>
    import book from './Book.vue'
    export default{
        components:{book},
        data: ()=>({
            ready: true
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            books(){
                return this.$store.state.book.books.filter(book => book.level === this.level && book.type===this.name)
            },
            end(){
                return this.$store.state.query.queries.find(e=>(e.name===this.name && !e.next && e.id===this.level))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name===this.name && e.id===this.level))
            },
            scrollTop(){
                let scroll = this.$store.state.setting.scrollTops.find(e=>e.name===this.name) || {}
                return scroll.scrollTop
            },
            level(){
                return this.$route.params.level
            },
            url(){
                let pathItems = this.$route.fullPath.substring(1,this.$route.fullPath.length).split('/')
                pathItems[0] = pathItems[0].substring(0,pathItems[0].length-1)
                pathItems.unshift("/user/book")
                return pathItems.join("/")
            },
            name(){
                let pathItems = this.$route.fullPath.substring(1,this.$route.fullPath.length).split('/')
                return pathItems[0].substring(0,pathItems[0].length-1)
            }
        },
        methods:{
            loadMore(){
                if((window.innerHeight + window.scrollY) >= document.body.offsetHeight-600){
                    if(!this.end && this.ready){
                        this.ready = false
                        this.$store.dispatch('setting/setLoading',true)
                        this.$http.get(this.query.next).then(response=>{
                            if(typeof response.body === "object"){
                                this.$store.dispatch("book/save", response.body.data)
                                this.$store.dispatch("users/save", response.body.data[0].user)
                                this.$store.dispatch("query/save",{name:this.name,next:response.body.next_page_url,id:this.level})
                            }
                            this.ready = true
                            this.$store.dispatch('setting/setLoading',false)
                        })
                    }
                }
            },
            load(){
                if(!this.query && this.ready){
                    this.ready = false
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.get(this.url).then(response=>{
                        if(Array.isArray(response.body.data) && response.body.data.length>0){
                            this.$store.dispatch("book/save", response.body.data)
                            this.$store.dispatch("users/save", response.body.data[0].user)
                            this.$store.dispatch("query/save",{name:this.name,next:response.body.next_page_url,id:this.level})
                        }
                        this.ready = true
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            },
        },
        mounted(){
            this.load()
            document.body.scrollTop = this.scrollTop
        },
        watch:{
            '$route.params.level'(){
                this.load()
                document.body.scrollTop = this.scrollTop
            }
        }
    }
</script>