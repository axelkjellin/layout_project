<template>
    <div class="filter__block">
        <Select />
    </div>
</template>

<script>
import Select from '../components/Select.vue'
export default {
    name: 'SelectFilter',
    components: {
        Select
    }
}
</script>