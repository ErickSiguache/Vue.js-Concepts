<script setup>
import Button from "./Button.vue";

defineProps(["title", "body"]);
const emit = defineEmits("functionEmit");
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <p>{{ body }}</p>
    <Button name="Favorite" @click="emit('functionEmit', title)" />
  </section>
</template>

<style scoped>
h2 {
  color: rgb(188, 140, 242);
}

section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: white;
  background-color: #262626;
  width: 300px;
  padding: 10px 10px 20px 10px;
  margin: 5px;
  border: 1px solid rgb(188, 140, 242);
  border-radius: 5px;
}

section:hover {
  border: 1px solid rgb(153, 85, 231);
}

@media only screen and (max-width: 920px) {
  section {
    width: 500px;
  }
}
</style>
