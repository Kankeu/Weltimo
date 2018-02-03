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
                return this.$store.state.book.books.filter(book => book.level === this.level && book.type==='course')
            },
            end(){
                return this.$store.state.query.queries.find(e=>(e.name==="courses" && !e.next && e.id===this.level))
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==="courses" && e.id===this.level))
            },
            scrollTop(){
                let scroll = this.$store.state.setting.scrollTops.find(e=>e.name==="books") || {}
                return scroll.scrollTop
            },
            level(){
                return this.$route.params.level
            },
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
                                this.$store.dispatch("query/save",{name:'courses',next:response.body.next_page_url,id:this.level})
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
                    this.$http.get('/user/book/course/'+this.level).then(response=>{
                        if(typeof response.body.data[0] === "object"){
                            this.$store.dispatch("book/save", response.body.data)
                            this.$store.dispatch("users/save", response.body.data[0].user)
                            this.$store.dispatch("query/save",{name:'courses',next:response.body.next_page_url,id:this.level})
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
        }
    }
</script>