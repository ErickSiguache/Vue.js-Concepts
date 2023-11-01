<!--
    v-show es otra directiva condicional en Vue.js, pero a diferencia de v-if,
    v-show siempre renderea los elementos en el DOM. La diferencia clave
    radica en la forma en que manejan la visibilidad.

    v-show: La directiva v-show se utiliza para mostrar u ocultar un elemento
    en el DOM basándose en una expresión booleana. Si la expresión es true, el
    elemento se mostrará; si la expresión es false, el elemento se ocultará.
    Sin embargo, el elemento siempre estará presente en el DOM, simplemente se
    establecerá como display: none; para ocultarlo.
-->

<script setup>
const name = "John Smith";
const active = false;
</script>

<template>
  <h1>Hello {{ name }}!</h1>
  <h2 v-show="active">I'm in true</h2>
</template>

<!--
    En resumen:

    La diferencia clave entre v-if y v-show radica en cómo manejan la
    manipulación del DOM. v-if elimina y recrea el elemento en el DOM según la
    evaluación de la expresión, mientras que v-show simplemente manipula la
    propiedad CSS display del elemento para mostrarlo u ocultarlo sin
    eliminarlo del DOM.

    v-if tiene un mayor costo de procesamiento al cambiar o alternar la
    renderización inicial de un elemento en comparación con v-show. Por lo
    tanto, es preferible utilizar v-show cuando necesite alternar algo con
    mucha frecuencia. En contraste, es recomendable usar v-if si es poco
    probable que la condición cambie durante el tiempo de ejecución.
-->
