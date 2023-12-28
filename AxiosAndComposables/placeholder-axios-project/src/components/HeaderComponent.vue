<script setup>
defineProps({
  title: String,
  description: String,
});
</script>
<template>
  <section>
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 2rem;
  min-width: 250px;
}

h1 {
  color: var(--title-color);
  font-size: 2rem;
}

h2 {
  font-size: 1.3rem;
  padding-bottom: 1.5rem;
}
</style>
