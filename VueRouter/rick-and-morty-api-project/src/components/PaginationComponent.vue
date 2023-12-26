<script setup>
defineProps(["previous", "next", "allPages"]);
const emits = defineEmits(["previousPage", "nextPage"]);
</script>

<template>
  <button @click="emits('previousPage')" :disabled="previous <= 0">
    Previus: {{ previous }}
  </button>
  <button @click="emits('nextPage')" :disabled="next === allPages">
    Next: {{ next }}
  </button>
</template>

<style scoped>
button {
  font-size: 1rem;
  text-decoration: none;
  background-color: var(--bottoms-color);
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
  margin-top: 5px;
  cursor: pointer;
}

button:hover {
  background-color: var(--hover-color);
}

button:active {
  background-color: var(--bottoms-color);
}

button:disabled {
  background-color: var(--disabled-color);
}
</style>
