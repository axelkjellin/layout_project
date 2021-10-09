<template>
    <div class="select__block">
        <span>ORDENAR:</span>
        <select class="select__input__content" name="select">
            <option class="select__option__content" value="lancamento">Laçamento</option>
            <option class="select__option__content" value="preco">Preço</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'Select'
}
</script>