<template>
    <div class="main__page__block">
        <div class="main__page__content">
            <div v-for="card in cards" :key="card.id">
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
    components: {
        Card
    },
    data() {
        return {
          cards: contentsCards()
        }
    },
    beforeMount() {

    },
}
</script>