<script setup>
defineProps(["link", "title"]);
</script>

<template>
  <RouterLink :to="`${link}`"> {{ title }} </RouterLink>
</template>

<style scoped>
a {
  font-size: 1rem;
  text-decoration: none;
  background-color: var(--bottoms-color);
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
  width: 11rem;
}

a:hover {
  background-color: var(--container-cards-color);
}

a:active {
  background-color: var(--bottoms-color);
}
</style>
