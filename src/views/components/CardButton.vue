<template>
    <button class="card__button__block">
        <div class="card__button__icon">
            <i :class="button.icon"></i>
        </div>
        <div class="card__button__text">
            <span>{{button.name}}</span>
        </div>
    </button>
</template>

<script>
export default {
    name: 'CardButton',
    props: ['button'],
    data() {
        return {
        }
    },

}
</script>