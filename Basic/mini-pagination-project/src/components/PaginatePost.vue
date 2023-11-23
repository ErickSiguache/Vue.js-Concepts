<script setup>
import Button from "./Button.vue";
defineProps(["previusPage", "nextPage", "maxLength"]);
const emit = defineEmits(["funcPrevius", "funcNext"]);
</script>

<template>
  <section>
    <Button
      @click="emit('funcPrevius')"
      :name="`Previus: ${previusPage}`"
      :disabled="previusPage <= 0"
    />
    <Button
      @click="emit('funcNext')"
      :name="`Next: ${nextPage}`"
      :disabled="nextPage >= maxLength"
    />
  </section>
</template>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 5px;
}
</style>
