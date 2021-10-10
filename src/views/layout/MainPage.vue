<template>
    <div class="main__page__block">
        <div class="main__page__content">
            <div v-for="card in getCards(this.selectedFilter, this.selectedOrder)" :key="card.id">
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
    props:['selectedFilter', 'selectedOrder'],
    components: {
        Card
    },
    data() {
        return {
            cards: this.getCards(this.selectedFilter, this.selectedOrder)
        }
    },
    methods: {
        getCards(selectedFilter, selectedOrder) {
            console.log('opa')
            if(selectedFilter || selectedOrder) {
                return contentsCards(selectedFilter, selectedOrder)
            }

            return contentsCards()
        }
    },
    watch: {
        'this.selectedFilter': function() {
            console.log('opa')
        },
        'this.selectedOrder': function() {
            console.log('opblza')
        }
    }
}
</script>