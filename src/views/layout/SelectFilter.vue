<template>
    <div class="filter__block">
        <Select  v-on:orderBySelect="selectedOrder" />
    </div>
</template>

<script>
import Select from '../components/Select.vue'
export default {
    name: 'SelectFilter',
    components: {
        Select
    },
    methods: {
        selectedOrder(option) {
            this.$emit('dispatchSelectedORderToHome', option)
        }
    },
}
</script>