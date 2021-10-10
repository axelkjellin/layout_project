<template>
    <div class="menu__content__block">
        <MenuItens v-on:filteredByMenuItens="filteredByMenu"/>
    </div>
</template>

<script>
import MenuItens from '../components/MenuItens.vue'
export default {
    name: 'Menu',
    components: {
        MenuItens
    },
    methods: {
        filteredByMenu(id) {
            this.$emit('dispatchToHome', id)
        }
    },
}
</script>