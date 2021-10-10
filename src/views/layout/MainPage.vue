<template>
    <div class="main__page__block">
        <div class="main__page__content">
            <div v-for="card in getFilteredCards(this.selectedFilter)" :key="card.id">
                {{card}}
                <Card :card="card"/>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import { contentsCards } from '../../data/contentsCards'

export default {
    name: 'MainPage',
    props:['selectedFilter'],
    components: {
        Card
    },
    data() {
        return {
            cards: this.getFilteredCards(this.selectedFilter)
        }
    },
    methods: {
        getFilteredCards(selectedFilter) {
            if(selectedFilter) {
                return contentsCards(selectedFilter)
            }

            return contentsCards()
        }
    },
    watch: {

    }
}
</script>