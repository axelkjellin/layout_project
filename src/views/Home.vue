<template>
  <div class="home__block">
      <Header />
      <Menu />
      <SelectFilter />
      <MainPage />
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
  }
}
</script>

