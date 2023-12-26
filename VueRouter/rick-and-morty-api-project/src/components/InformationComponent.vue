<script setup>
import LinkButtonComponent from "./LinkButtonComponent.vue";

import { useClasses } from "../utils/listClasses";

defineProps(["person"]);

const status = (status) => {
  const state = status.toLowerCase();
  return useClasses[state];
};
</script>
<template>
  <section>
    <article class="img-container">
      <img
        :src="person.image"
        :alt="`The image of the character ${person.name}`"
      />
    </article>
    <article class="info-container">
      <strong :class="status(person.status)">{{ person.status }}</strong>
      <h2>{{ person.name }}</h2>
      <p>
        <strong> Species: </strong> {{ person.species }} <br />
        <strong> Origin: </strong> {{ person.origin.name }} <br />
        <strong> Location: </strong> {{ person.location.name }}
      </p>
      <p>
        <strong :class="status(person.gender)"> Gender: </strong>
        {{ person.gender }}
      </p>
      <LinkButtonComponent
        title="Return to character page"
        link="/characters"
      />
    </article>
  </section>
</template>
<style scoped>
section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 20px;
}

.img-container img {
  width: 100%;
  border-radius: 5px;
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.alive,
.dead,
.unknown,
.Male,
.Female,
.Genderless {
  padding: 0.2rem;
  border-radius: 5px;
  width: 40px;
}
.alive {
  color: green;
  background-color: rgb(43, 223, 43);
  border: 1px solid green;
}
.dead {
  color: red;
  background-color: rgb(235, 141, 141);
  border: 1px solid red;
}

.unknown {
  width: 4.5rem;
  color: rgba(15, 107, 110, 0.822);
  background-color: rgb(34, 158, 199);
  border: 1px solid rgba(15, 107, 110, 0.822);
}
.Male {
  background-color: rgb(13, 36, 172);
}
.Female {
  background-color: rgba(165, 18, 141, 0.89);
}
.Genderless {
  background-color: gray;
}
</style>
