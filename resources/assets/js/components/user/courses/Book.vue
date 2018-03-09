<template>
    <div>
        <v-list-tile @click=" " class="book_item" avatar>
            <v-list-tile-avatar @click="dialog=true">
                <img src="http://rta.org.af/eng/wp-content/uploads/2016/02/book.png" alt="book">
            </v-list-tile-avatar>
            <v-list-tile-content @click="dialog=true">
                <v-list-tile-title>{{book.title}}</v-list-tile-title>
                <v-list-tile-sub-title style="word-wrap: break-word;text-overflow:inherit;white-space: inherit">{{book.message}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
                <v-btn
                        icon
                        :href="book.url"
                        target="_blank"
                >
                    <v-icon>file_download</v-icon>
                </v-btn>
            </v-list-tile-action>
            <v-list-tile-action v-if="$vuetify.breakpoint.smAndUp" style="margin-left: 50px">
                <v-btn
                        color="primary"
                        outline
                        :to="$route.fullPath+'/'+book.id"
                >
                    Read &nbsp; <v-icon>chrome_reader_mode</v-icon>
                </v-btn>
            </v-list-tile-action>
        </v-list-tile>
        <v-dialog v-model="dialog"  content-class="overflow" max-width="300">
            <v-card>
                <v-card-title class="headline">Book <v-spacer></v-spacer><v-btn icon @click="dialog = false"><v-icon>close</v-icon></v-btn></v-card-title>
                <v-divider></v-divider>
                <v-card-text>{{book.title}}</v-card-text>
                <v-card-media src="http://rta.org.af/eng/wp-content/uploads/2016/02/book.png" height="200px"></v-card-media>
                <v-card-text>
                    {{book.message}}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            icon
                            :href="book.url"
                            target="_blank"
                    >
                        <v-icon>file_download</v-icon>
                    </v-btn>
                    <v-btn
                            color="primary"
                            outline
                            :to="$route.fullPath+'/'+book.id"
                            v-if="$vuetify.breakpoint.smAndUp"

                    >
                        Read &nbsp; <v-icon>chrome_reader_mode</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default{
        props:{
            book: Object
        },
        data: ()=>({
            dialog: false
        })
    }
</script>

<style>
    .book_item .list__tile{
        height: 120px;
    }
</style>