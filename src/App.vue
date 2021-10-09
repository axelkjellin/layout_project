<template>
  <div class="main__block" >
      <router-view />
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>
<style lang="scss">
  /* import do scss no assets */
  @import 'src/assets/app.scss';
</style>
