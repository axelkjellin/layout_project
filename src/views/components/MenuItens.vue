<template>
    <div class="menu__itens__block">
        <div class="menu__itens_iterator" v-for="button in buttons" :key="button.id">
            <CardButton :button="button"/>
        </div>
    </div>
</template>

<script>
import CardButton from '../components/CardButton.vue';
import { buttons } from "../../data/buttonsContent";

export default {
    name: 'MenuIntes',
    components: {
        CardButton
    },
    data() {
        return {
            buttons: buttons
        }
    },
}
</script>
<style scoped>


    
</style>