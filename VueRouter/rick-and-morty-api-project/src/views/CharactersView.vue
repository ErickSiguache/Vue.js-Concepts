<script setup>
import { ref } from "vue";

import CardComponent from "@/components/CardComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";

const totalPages = ref(null);
const nextPage = ref(1);
const prevPage = ref(0);
const characters = ref(null);
const showLoading = ref(true);

const getData = async (page) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await res.json();
    if (data) {
      totalPages.value = data.info.pages;
      characters.value = data.results;
      showLoading.value = false;
    }
  } catch (error) {
    console.log(error.message);
  }
};

getData(nextPage.value);

const nextPageActive = () => {
  prevPage.value = nextPage.value;
  nextPage.value++;
  getData(nextPage.value);
};

const prevPageActive = () => {
  nextPage.value = prevPage.value;
  prevPage.value--;
  getData(prevPage.value);
};
</script>

<template>
  <section class="pagination">
    <PaginationComponent
      :previous="prevPage"
      :next="nextPage"
      :allPages="totalPages"
      @previousPage="prevPageActive"
      @nextPage="nextPageActive"
    />
  </section>
  <SpinnerComponent v-if="showLoading" />
  <section class="cards" v-if="!showLoading">
    <CardComponent
      v-for="character in characters"
      key="character.id"
      :id="character.id"
      :title="character.name"
      :image="character.image"
    />
  </section>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 0.4rem;
  padding: 10px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: stretch;
  column-gap: 1.5rem;
  row-gap: 1rem;
}
</style>
