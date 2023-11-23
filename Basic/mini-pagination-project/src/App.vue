<script setup>
import { computed, ref } from "vue";

import Ifetch from "./services/fetchInterface";
import PaginatePost from "./components/PaginatePost.vue";
import CardPosts from "./components/CardPosts.vue";
import SpinnerPost from "./components/SpinnerPost.vue";

const URL = "https://jsonplaceholder.typicode.com/posts";
const favorite = ref("You don't have a favorite post 😥");
const loading = ref(false);
const posts = ref([]);
const previus = ref(0);
const next = ref(10);

const fetchData = async () => {
  loading.value = true;
  try {
    posts.value = await Ifetch(URL);
    loading.value = false;
  } catch (error) {
    console.log(error.message);
  }
};
fetchData();

const changeFavorites = (title) => {
  favorite.value = title;
};

const changePrevius = () => {
  previus.value -= 10;
  next.value -= 10;
};

const changeNext = () => {
  previus.value += 10;
  next.value += 10;
};
</script>

<template>
  <main>
    <section class="containerTitle">
      <h1>POST APP</h1>
      <article>
        <p><strong> My Favorite post is: </strong></p>
        <p>{{ favorite }}</p>
      </article>
    </section>

    <PaginatePost
      :previusPage="previus"
      :nextPage="next"
      :maxLength="posts.length"
      @funcPrevius="changePrevius"
      @funcNext="changeNext"
    />

    <section class="containerPost">
      <SpinnerPost v-if="loading" />
      <CardPosts
        v-if="!loading"
        v-for="post in posts.slice(previus, next)"
        :key="post.id"
        :title="post.title"
        :body="post.body"
        @functionEmit="changeFavorites"
      />
    </section>
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 40px;
  padding: 20px;
}

.containerTitle {
  color: rgb(188, 140, 242);
  text-align: center;
  padding: 10px;
}

.containerPost {
  display: flex;
  justify-content: center;
  padding: 5px 20px 20px 20px;
  width: 100%;
  flex-wrap: wrap;
}
</style>
