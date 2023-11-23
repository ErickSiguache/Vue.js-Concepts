<script setup>
defineProps(["name"]);
</script>

<template>
  <button>{{ name }}</button>
</template>

<style scoped>
button {
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: rgb(188, 140, 242);
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: rgb(153, 85, 231);
}

button:active {
  background-color: rgb(89, 19, 168);
}
</style>
