<template>
    <div class="card__block">
        <div class="card__header" >
            <div class="card__header__icon">
                <i :class="card.icon"></i>
            </div>
            <div class="card__header__name">
                {{card.name}}
                <!-- 
                    descomente o trecho abaixo para visualizar a data de cada produto na pagina para conferir o funcionamento, 
                    depois comente novamente, não foi feita nenhuma estilização nem formatação correta pois nao faz parte do card pedido
                    foi deixado ai apenas para conferir
                -->
                <!-- 
                    <div>
                        {{ (card.launch.getDate()) +'/' +(card.launch.getMonth() +1)+ '/' + card.launch.getYear()}}
                    </div> 
                -->
            </div>
        </div>
        <div class="card__content">
            {{card.content}}
        </div>
        <div class="card__footer">
            <span>R$ {{card.price}}</span>
            <button>
                <router-link class="router__link__decoration" :to="{path: '/details/'+card.id}">                
                    Saiba mais
                </router-link>
            </button>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'Card',
    props: ['card']
}
</script>