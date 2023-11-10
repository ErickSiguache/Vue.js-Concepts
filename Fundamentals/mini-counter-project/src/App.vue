<script setup>
  import { ref, computed } from "vue";

  const counter = ref(0);
  const listNumbers = ref([]);

  const classNames = {
    green: "positive",
    red: "negative",
    default: ""
  }

  const decrement = () => counter.value--;
  const incremet = () => counter.value++;
  const reset = () => counter.value = 0;

  const changeClass = computed(() => {
    const classColor = counter.value > 0 ? classNames.green : classNames.red;
    return counter.value === 0 ? classNames.default : classColor;
  });

  const activeAdd = (value) => {
    return listNumbers.value.includes(value) || value === 0;
  }

  const addValue = (value) => {
    listNumbers.value.push(value);
  }
</script>

<template>
  <main class="container text-center mt-5">
    <section>
      <h1 class="colorText"> Counter App </h1>
    </section>
    <section>
      <article class="mt-4">
        <h3 :class="changeClass"> Number: {{ counter }} </h3>
      </article>
      <article class="btn-group mt-4">
        <button type="button" class="btn btn-success" @click="incremet"> Incremet </button>
        <button type="button" class="btn btn-secondary" @click="reset"> Reset </button>
        <button type="button" class="btn btn-danger" @click="decrement"> Decrement </button>
        <button type="button" class="btn btn-primary" @click="addValue(counter)" :disabled="activeAdd(counter)"> Add </button>
      </article>
    </section>
    <section class="container text-center mt-5">
      <article class="row">
        <div class="col"></div>
        <ul class="col list-group">
          <template v-for="(number, i) in listNumbers" :key="i">
            <li class="list-group-item colorText"> {{ number }} </li>
          </template>
        </ul>
        <div class="col"></div>
      </article>
    </section>
  </main>
</template>


<style>
  .negative {
    color: rgb(236, 14, 14);
  }

  .positive {
    color: rgb(49, 209, 49);
  }

  .colorText {
    color: rgb(188, 140, 242);
  }
</style>