<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent
    titleApp="Rick and Morty App"
    description="This project is an example of using API in Vue.js"
  />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin: 2rem 10rem;
}

@media only screen and (max-width: 795px) {
  main {
    margin: 2rem 4rem;
  }
}
</style>
