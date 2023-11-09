<!--
    v-bind:disabled es una directiva en Vue.js que se utiliza para enlazar
    dinámicamente el atributo disabled de un elemento HTML a una expresión en
    el modelo de datos. Esta directiva permite habilitar o deshabilitar un
    elemento interactivo (como un botón o un campo de entrada) basándose en
    una condición en el código.
-->

<script setup>
    import { ref } from 'vue'

    const active = ref(true);
    const activeInput = () => active.value = !active.value;
</script>

<template>
    <!-- Creando el disabled de un elemento input de HTML -->
    <input type="text" alt="message" v-bind:disabled="active">
    <!-- Botón para activar el elemento input de HTML -->
    <button v-on:click="activeInput"> Active </button>
</template>

<!--
    Vue.js se encarga automáticamente de mantener el atributo disabled del
    elemento HTML sincronizado con el valor de "active" en el modelo de datos,
    asegurando así que la interfaz de usuario refleje el estado actual de la
    aplicación.
-->