<script setup>
defineProps(["id", "title", "image"]);
</script>
<template>
  <section>
    <img :src="image" :alt="`The image of the character ${title}`" />
    <h2>{{ title }}</h2>
    <RouterLink :to="`/characters/${id}`"> Ver Detalle </RouterLink>
  </section>
</template>
<style scoped>
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  font-size: 11px;
  background-color: var(--container-cards-color);
  border: 1px solid var(--container-cards-color);
  color: white;
  padding: 10px;
}

section:hover {
  border: 1px solid var(--hover-color);
}

img {
  width: 100%;
}

a {
  font-size: 1rem;
  text-decoration: none;
  background-color: var(--bottoms-color);
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
}

a:hover {
  background-color: var(--hover-color);
}

a:active {
  background-color: var(--bottoms-color);
}
</style>
