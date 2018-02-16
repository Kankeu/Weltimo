<template>
    <v-container grid-list-md text-xs-left fluid>
        <v-layout row wrap>
            <v-flex v-for="level,i in levels" :key="i" lg4 xs12>
                <ps-card :level="level" :texts="texts[i]" :colors="colors[i]"></ps-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import psCard from './Card.vue'
    export default{
        components:{psCard},
        computed:{
            user(){
                return this.$store.state.user.user
            },
            levels(){
                return [
                    "A1",
                    "A2",
                    "B1",
                    "B2",
                    "C1",
                    "C2"
                ]
            },
            colors(){
                return [
                    {
                        niveau: "A1",
                        squareBg: "rgba(0, 160, 172, .8)",
                        circleBg: "rgba(0, 160, 172, 1)",
                        color: "#fefefe"
                    },
                    {
                        niveau: "A2",
                        squareBg: "rgba(234, 140, 69, .5)",
                        circleBg: "rgba(234, 140, 69, 1)",
                        color: "#fefefe"
                    },
                    {
                        niveau: "B1",
                        squareBg: "rgba(189, 73, 81, .5)",
                        circleBg: "rgba(189, 73, 81, 1)",
                        color: "#fefefe"
                    },
                    {
                        niveau: "B2",
                        squareBg: "rgba(0, 147, 93, .5)",
                        circleBg: "rgba(0, 147, 93, 1)",
                        color: "#fefefe"
                    },
                    {
                        niveau: "C1",
                        squareBg: "rgba(135, 75, 148, .5)",
                        circleBg: "rgba(135, 75, 148, 1)",
                        color: "#fefefe"
                    },
                    {
                        niveau: "C2",
                        squareBg: "#6bd1f6",
                        circleBg: "#00aff0",
                        color: "#fefefe"
                    }
                ]
            },
            texts(){
                return [
                    {
                        niveau: "A1",
                        title: "Starter Guider",
                        description: "A1 is the elementary level and therefore suitable for beginners. The holder of such a diploma can talk about himself and his nearer environment."
                    },
                    {
                        niveau: "A2",
                        title: "A2 Guide",
                        description: "Das DELF A2 bescheinigt dem Prüfling bereits fortgeschrittene Fähigkeiten. Der Teilnehmer wird hier als Teil der Gesellschaft betrachtet. Folglich muss er Dinge wie die Höflichkeitsform und das Führen einfacher Gespräche beherrschen."
                    },
                    {
                        niveau: "B1",
                        title: "B1 Guide",
                        description: "With B1 the candidate reaches the independent level. He can follow a discussion and participate in it, he expresses his own opinion and can respond to surprising everyday situations. Flexible and experienced linguistic utterances are already part of the diploma's vocabulary."
                    },
                    {
                        niveau: "B2",
                        title: "B2 Guide",
                        description: "At B2, the candidate can not only express his opinion, but also defend his point of view and continue to do so. He negotiates and discusses without difficulty and is able to correct his mistakes himself."
                    },
                    {
                        niveau: "C1",
                        title: "C1 Guide",
                        description: "The candidate is now at the upper level. He can independently and without difficulty initiate discussions and conversations, using a large and adequate vocabulary. He speaks spontaneously, fluently and clearly structured. He shows that he masters the language structures."
                    },
                    {
                        niveau: "C2",
                        title: "C2 Guide",
                        description: "Der Kandidat muss nun beweisen, dass er akademische oder sonstige weiterführende Aufgaben lösen kann. Von ihm werden eine präzise, adäquate Sprache sowie ein gewandter Ausdruck erwartet."
                    }
                ]
            }
        },
        mounted(){

        }
    }
</script>