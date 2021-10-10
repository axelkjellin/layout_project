<template>
  <div class="home__block">
      <Header />
      <Menu v-on:dispatchToHome="filter"/>
      <SelectFilter v-on:dispatchSelectedORderToHome="order"/>
      <MainPage :selectedFilter="this.selectedFilter" :selectedOrder="this.selectedOrder"/>
  </div>
</template>

<script>
import Header from './layout/Header';
import Menu from './layout/Menu';
import SelectFilter from './layout/SelectFilter'
import MainPage from './layout/MainPage'

export default {
  name: 'Home',
  components: {
    Header,
    Menu,
    SelectFilter,
    MainPage
  },
  data() {
    return {
      selectedFilter: null,
      selectedOrder: null
    }
  },
  methods: {
    filter(id) {
      if(id) {
        this.selectedFilter = id
      }
    },
    order(option) {
      if(option) {
        this.selectedOrder = option
      }
    }
  },
}
</script>

