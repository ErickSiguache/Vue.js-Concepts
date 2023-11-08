<!--
    En Vue.js, es posible capturar eventos de clic de diferentes botones del
    mouse, incluyendo el clic derecho, izquierdo y el botón central. Además,
    se pueden manejar otros eventos como enter, tab, delete, esc, space, up,
    down, left y right.

    A continuación, se mostrarán ejemplos específicos para los eventos de
    clic del mouse:
-->

<script setup>
    const greeting = () => {
        console.log("Hello World");
    }
</script>

<template>
    <!--
        La directiva click Right en Vue.js se utiliza para manejar el evento
        de clic derecho del mouse
    -->
    <button @click.right="greeting"> Click in Right Button </button>
    <!--
        NOTA: Como es bien sabido, el botón derecho del mouse generalmente se
        utiliza para acceder a más opciones, lo que significa que cada vez que
        se presiona este botón, se abre el menú contextual del navegador. Para
        abordar este problema, podemos utilizar un modificador de eventos, en
        este caso, "prevent", que evita que se realice el evento del clic
        derecho.
    -->
    <button @click.right.prevent="greeting"> Right Click with prevent </button>
    <!--
        La directiva click Middle en Vue.js se utiliza para manejar el evento
        de clic central del mouse
    -->
    <button @click.middle="greeting"> Middle Click </button>
    <!--
        La directiva click Left en Vue.js se utiliza para manejar el evento
        de clic izquierdo del mouse, este evento es el evento por defecto
        del v-on:click.
    -->
    <button @click.left="greeting"> Left Click </button>
    <button @click="greeting"> Left Click by default </button>
</template>