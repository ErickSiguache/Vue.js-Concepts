<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CardComponent from "./components/CardComponent.vue";
import LoadingComponent from "./components/LoadingComponent.vue";
import NoInformationComponent from "./components/NoInformationComponent.vue";

import { useGetData } from "@/composables/useGetData";

const { response, loading, errorResponse, getData } = useGetData();

getData("https://jsonplaceholder.typicode.com/posts/");
</script>

<template>
  <main>
    <section class="content-header">
      <HeaderComponent
        title="PlaceHolder App"
        description="Example application using Axios and PlaceHolder"
      />
    </section>
    <LoadingComponent class="loading" v-if="loading" />
    <template class="content-body" v-else>
      <NoInformationComponent
        class="loading"
        text="Information could not be loaded"
        v-if="errorResponse"
      />
      <template v-else>
        <NoInformationComponent
          class="loading"
          v-if="response.length <= 0"
          text="There is no information in the database"
        />
        <section class="content-body" v-if="response.length > 0">
          <CardComponent
            v-for="value in response"
            :key="value.userId"
            :title="value.title"
            :text="value.body"
          />
        </section>
      </template>
    </template>
  </main>
</template>

<style scoped>
.content-body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 1rem;
  column-gap: 0.5rem;
  margin: 2rem 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.content-header {
  margin: 2rem 1rem;
}

.loading {
  text-align: center;
  font-size: 2rem;
}
</style>
