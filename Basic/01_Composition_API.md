# Composition API (API de composición)

La Composition API es una característica introducida en Vue.js 3 que proporciona una forma más flexible y poderosa de organizar y reutilizar la lógica en los componentes de Vue. Con la Composition API, se puede dividir la lógica de los componentes en funciones más pequeñas y reutilizables llamadas "composables". Estos composables pueden ser fácilmente compartidos entre diferentes componentes, lo que mejora la reutilización del código y la organización del mismo.

La Composition API requiere del uso de la función `setup`, **setup** es una función especial que forma parte de la API de Composición. Se utiliza en los componentes para configurar y exponer la lógica reactiva, las propiedades y los métodos del componente. La función setup se ejecuta antes del ciclo de vida del componente y es el lugar donde se definen los datos reactivos, se gestionan las props y se exponen las funciones y valores que el componente necesita.

Ejemplo de un componente con Composition API:

```html
<script>
    import { ref } from "vue";

    export default {
        // Se crea la función de "setup"
        setup() {
            // Se crea la variable reactiva
            const number = ref(0);

            // Se crea la función del componente
            const increase = () => number.value++;

            // Los valores se retornan a el "template"
            return {
                number,
                increase
            };
        }
    }
</script>

<template>
    <div>
        <p> {{ number }} </p>
        <button @click="increase"> Increase </button></div>
</template>
```

Hasta ahora, se ha venido utilizando la API de composición. Sin embargo, hay una diferencia, esa diferencia es que no se ha tenido que escribir tanto código. Esto se debe a que se ha estado trabajando con un azúcar sintáctico que simplifica la estructura y la legibilidad del código mediante el uso de `<script setup>`

`<script setup>` proporciona una forma más concisa y fácil de trabajar con la API de Composición. Este enfoque se conoce comúnmente como "azúcar sintáctico para setup". Permite definir props, estado reactivos y funciones en una estructura más compacta y legible. Ejemplo:

* Sin zúcar sintáctico:
```html
<script>
    import { ref } from "vue";

    export default {
        setup() {
            const number = ref(0);
            const increase = () => number.value++;
            return {
                number,
                increase
            };
        }
    }
</script>
<template>
    <div>
        <p> {{ number }} </p>
        <button @click="increase"> Increase </button>
    </div>
</template>
```

* Con zúcar sintáctico:

```html
<script setup>
    import { ref } from "vue";

    const number = ref(0);
    const increase = () => number.value++;
</script>
<template>
    <div>
        <p> {{ number }} </p>
        <button @click="increase"> Increase </button>
    </div>
</template>
```
