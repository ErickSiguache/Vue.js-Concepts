# Composables

> La distinción entre un código bueno y uno malo radica en su capacidad de reutilización. Un código bien estructurado y modular puede ser fácilmente reutilizado en diferentes contextos, lo que facilita su mantenimiento, extensión y escalabilidad.

En Vue.js, existen métodos para hacer que el código sea reutilizable. Uno de estos métodos es a través de funciones independientes que pueden gestionar estados y modificar información mediante la reactividad y ser utilizadas en diferentes contexto de la aplicación. Estas funciones son conocidas como `composables`.

Los `Composables` en `Vue.js` son funciones reutilizables y lógicas que encapsulan la lógica y el estado relacionado en un componente Vue. Permiten separar la lógica en piezas más pequeñas y reutilizables, lo que facilita la composición y reutilización de código en diferentes componentes o partes de una aplicación. Los Composables pueden contener lógica como manejo de estado, llamadas a API, lógica de negocio, entre otros, y se pueden compartir entre varios componentes para mejorar la modularidad y la legibilidad del código. En otras bibliotecas de JavaScript, como `React`, a este tipo de funciones se les conoce como `Custom Hooks`.

* **Ejemplo de un composables:**

Anteriormente se explicó cómo utilizar Axios en Vue.js y se proporcionó un ejemplo de su uso. Sin embargo, ese código no era reutilizable ya que solo era aplicable dentro del contexto de esa llamada en particular. Al utilizar un "composable", podemos trasladar esa lógica a una función que sea reutilizable de la siguiente manera:

* `useGetData.js`:

```javascript
import { ref } from "vue";
import axios from 'axios';

export function useGetData() {
    const response = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const getData = async (url) => {
        try {
            loading.value = true;
            const response = await axios.get(url);
            response.value = response;
        } catch (error) {
            error.value = "Error en el servidor"
        } finally {
            loading.value = false;
        }
    }

    return {
        response,
        loading,
        error,
        getData
    }
}
```

Esta función nos permite realizar llamadas a una API, obtener información y reutilizarla fácilmente. Para hacer uso de ella, se puede implementar de la siguiente manera:

* `PlaceholderComponent.vue`:

```html
<script setup>
    import { response, loading, error, getData } from './useGetData'

    getData("https://jsonplaceholder.typicode.com/posts/")
</script>
<template>
    <section v-if="loading">
        <p> Loading..... </p>
    </section>
    <template v-else>
        <section v-if="error">
            <p> Information could not be loaded </p>
        </section>
        <section v-else>
            <ul v-if="response > 0">
                <li v-for="let place in response" :key="place.id">
                    {{ place.name}}
                </li>
            </ul>
            <p  v-if="response <= 0"> There is no information in the database </p>
        </section>
    </template>
</template>
```

Y este mismo proceso se puede aplicar a diferentes componentes, funcionando de manera similar. Esto contribuye a reducir la lógica dentro de los componentes y promueve la reutilización del código.