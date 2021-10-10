<template>
    <div class="select__block">
        <span>ORDENAR:</span>
        <select v-model="item" class="select__input__content" name="select">
            <option v-for="option in options" :key="option.id" :selected="option">{{option.translation}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'Select',
    data() {
        return {
            item: '',
            options: [
                {
                    id: 1,
                    selected: '',
                    translation: 'Nenhum filtro'
                },
                {
                    id: 2,
                    selected: 'price',
                    translation: 'Preço'
                },
                {
                    id: 3,
                    selected: 'launch',
                    translation: 'Lançamento'
                }
            ]
        }
    },
    watch: {
        item: function(val) {
            const option = this.options.filter((option) => {
                return option.translation == val
            })
            this.$emit('orderBySelect', option[0])
        }
    }
}
</script>