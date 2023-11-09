<!--
    Las propiedades computadas en Vue.js son funciones que calculan y
    devuelven un valor basado en las dependencias que tienen, como datos
    reactivos o otras propiedades computadas.

    Estas propiedades computadas son esenciales cuando se necesita realizar
    operaciones basadas en datos reactivos y quieres mantener tu lógica de
    la interfaz de usuario limpia y fácil de entender.

    Ejemplo:
-->

<script setup>
    // Importando computed desde Vue.js
    import { ref, computed } from "vue";

    // Creando la variable reactiva
    const message = ref("");

    // Creando una función computada para realizar cambios reactivos
    const greeting = computed(() => {
        message.value = "Hello World";
    })
</script>

<template>
    <!--
        Llamando el evento v-on:click para ejecutar la función computada y
        realizar cambios.
    -->
    <button v-on:click="greeting"> click </button>
    <!-- Mostrando el mensaje -->
    <h1>{{ msg }}</h1>
</template>

<!--
    Como se puede observar, a simplevista no cambia nada con respecto a las
    funciones comunes, sin embargo, esto no es asi; computed() almacena en
    caché el resultado. Si "message" no cambia, "greeting" utilizará el
    resultado anterior almacenado en caché, mejorando la eficiencia al evitar
    recálculos innecesarios.

    Cuando no se usa computed(), las función no tiene reactividad incorporada.
    Si "message" cambia, "greeting" no se actualizará automáticamente. Se debe
    llamar a esta función cada vez que quieras obtener el resultado actual, lo
    que puede llevar a problemas de sincronización si no se gestiona
    adecuadamente.

    En resumen, la diferencia clave entre una propiedad calculada (computed())
    y una propiedad definida como una "función común" radica en cómo se
    gestionan y actualizan en función de sus dependencias reactivas. Las
    propiedades calculadas se almacenan en caché, lo que significa que se
    recalculan solo cuando alguna de sus dependencias cambia. Por lo tanto, es
    altamente recomendable usar computed() cuando estás trabajando con
    variables reactivas en Vue.js. Esto garantiza un rendimiento óptimo y una
    gestión automática de las actualizaciones basadas en reactividad en la
    aplicación.
-->
