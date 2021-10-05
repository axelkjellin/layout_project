<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>|<router-link to="/about"
        >About</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
@import 'src/assets/app.scss';

</style>
