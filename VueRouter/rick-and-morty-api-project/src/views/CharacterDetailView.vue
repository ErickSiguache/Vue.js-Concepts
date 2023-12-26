<script setup>
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import UserNotFoundComponent from "@/components/UserNotFoundComponent.vue";
import InformationComponent from "@/components/InformationComponent.vue";

import { useSingleCharacter } from "../services/useSingleCharacter";

import { useRoute } from "vue-router";

const route = useRoute();
const { character, loading, notFound, getCharacter } = useSingleCharacter();

getCharacter(route.params.name);
</script>

<template>
  <SpinnerComponent v-if="loading" />
  <UserNotFoundComponent v-if="notFound" />
  <InformationComponent v-if="character" :person="character" />
</template>
