<script setup>
defineProps({
  title: String,
  text: String,
});
</script>
<template>
  <section>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  background-color: var(--container-color);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid transparent;
}

section:hover {
  border: 1px solid var(--text-color);
}

h2 {
  color: var(--title-color);
}
</style>
