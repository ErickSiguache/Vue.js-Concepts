<script setup>
import LinkButtonComponent from "@/components/LinkButtonComponent.vue";
</script>
<template>
  <section>
    <h1>Rick and Morty App</h1>
    <p>
      Este ejemplo demuestra cómo utilizar la API de Rick and Morty a través de
      Fetch y cómo implementar Vue Router en Vue.js.
    </p>
    <LinkButtonComponent title="Go to character page" link="/characters" />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
}
</style>
