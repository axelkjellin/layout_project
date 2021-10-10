<template>
    <div class="card__block">
        <div class="card__header" >
            <div class="card__header__icon">
                <i :class="card.icon"></i>
            </div>
            <div class="card__header__name">
                {{card.name}}
            </div>
        </div>
        <div class="card__content">
            {{card.content}}
        </div>
        <div class="card__footer">
            <span>R$ {{card.price}}</span>
            <button>Saiba Mais</button>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'Card',
    props: ['card']
}
</script>