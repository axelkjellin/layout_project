<template>
    <div class="home__block">
        <Banner :card="card"/>
        <div class="details__content__block">
            <div class="details__content__card">
                <img src="../../../assets/img/infos.png" alt="">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque id suscipit voluptatum 
                    optio mollitia aspernatur unde amet velit atque, enim harum excepturi molestiae nulla 
                    quibusdam aperiam iste alias autem?
                </div>
            </div>
            <div class="details__content__card">
                <img src="../../../assets/img/infos.png" alt="">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque id suscipit voluptatum 
                    optio mollitia aspernatur unde amet velit atque, enim harum excepturi molestiae nulla 
                    quibusdam aperiam iste alias autem?
                </div>
            </div>
        </div>
        <div class="details__content__text">
           <p>
               O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos
               relevantes de uma empresa desde o seu ano de fundação. Tenha acesso aos principais eventos corportativos de uma empresa, como: marcos jurídicos, mudança no quadro 
               societário, aumento de capital, reportagens e muito mais
           </p>
           <p>
               Após realizar a consulta, o histórico é salvo automaticamente, tornando as informações acessíveis ao usuário. 
               A linha do tempo pode também ser exportada no formado PDF.
           </p>
        </div>
        <div class="details__footer">
            R$ <span class="details__footer__price">{{card.price}}</span>
            <button class="details__footer__button">Habitilar</button>
        </div>
    </div>
</template>

<script>
import {contentsCards} from '../../../data/contentsCards.js';
import Banner from '../../components/Banner.vue';
export default {
    name: 'DetailsPage',
    props:['params'],
    components: {
        Banner
    },
    data() {
        return {
            card: this.getCard() 
        }
    },
    methods: {
        getCard() {
            const cards = contentsCards()
            return cards.filter(card => {
                return card.id == this.$route.params.id
            })[0]
        }
    },
    computed:{
        logo() {
            return '../../../assets/img/logo.png'
        }
    }
    
}
</script>
