import { ref } from "vue";
import axios from "axios";

export function useGetData() {
  const response = ref([]);
  const loading = ref(false);
  const errorResponse = ref(null);

  const getData = async (url) => {
    try {
      loading.value = true;
      const res = await axios.get(url);
      response.value = res.data;
    } catch (error) {
      errorResponse.value = "Error en el servidor";
    } finally {
      loading.value = false;
    }
  };

  return {
    response,
    loading,
    errorResponse,
    getData,
  };
}
