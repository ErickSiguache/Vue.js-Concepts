# Definición de un Store

Como se mencionó anteriormente un `store` en Pinia es un repositorio reactivo que alberga y administra los datos de una aplicación Vue.js.

Esta estructura actúa como un **contenedor centralizado** donde se almacenan los datos compartidos entre los componentes. Es posible `acceder` y `modificar` estos datos en toda la aplicación, lo que permite que la información persista incluso si los componentes individuales se destruyen o desmontan. Además, estos "stores" reactivos aseguran la coherencia de los datos en diferentes partes de la aplicación, facilitando su mantenimiento y sincronización.

Ejemplo de una definición de un store para un contador:

* **Definir un Store usando la API de opciones**
```javascript
import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    // Datos en un componente común
    state: () => ({
        counter: 0,
    }),
    // Methods en un componente común
    actions: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        }
    }
    // Computed en un componente común
    getters: {
        double: (state) => this.count * 2,
    }
});
```

* **Definir un Store usando la API de composición**
```javascript
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', () => {
    const counter = ref(0);

    const increment = () => counter.value++;
    const decrement = () => counter.value--;

    const double = computed(() => count.value * 2);

    return {
        counter,
        increment,
        decrement,
        double
    };
});
```

Por lo general, la lógica de un "store" se asemeja a la estructura normal de un componente, pero con la ventaja de que está separado de cualquier componente en particular. Esto permite que el "store" sea accesible y utilizable en toda la aplicación, de manera análoga a un composable.

La principal distinción radica en que los datos almacenados en un "store" se mantienen sincronizados y disponibles en todos los componentes que hacen uso de él. Este enfoque permite la persistencia de la información a lo largo de la aplicación y proporciona una forma centralizada y coherente de manejar y compartir datos entre diferentes partes de la aplicación Vue.js.
