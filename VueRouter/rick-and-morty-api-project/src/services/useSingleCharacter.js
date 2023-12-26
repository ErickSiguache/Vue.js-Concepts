import { ref } from "vue";

export function useSingleCharacter() {
  const character = ref(null);
  const loading = ref(true);
  const notFound = ref(false);

  const getCharacter = async (characterToSearch) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${characterToSearch}`
      );

      if (res.status === 404 || res.status === 500) {
        loading.value = false;
        notFound.value = true;
        return;
      }
      const data = await res.json();
      loading.value = false;
      character.value = data;
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    character,
    loading,
    notFound,
    getCharacter,
  };
}
