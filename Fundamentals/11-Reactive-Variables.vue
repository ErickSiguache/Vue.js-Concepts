<!--
    La reactividad en el contexto de los frameworks de JavaScript, como Vue.js
    y React, se refiere a la capacidad de los datos en una aplicación para
    estar vinculados y actualizarse automáticamente cuando cambian.  Es una de
    las características clave de estos frameworks y permite construir
    interfaces de usuario dinámicas y altamente interactivas.

    En el contexto de Vue.js y su sistema de reactividad, la reactividad
    implica que cuando los datos cambian (por ejemplo, cuando una variable se
    modifica), las partes relevantes de la interfaz de usuario que dependen
    de esos datos también se actualizan automáticamente. Para crear variables
    reactivas en Vue.js se hace uso de la función ref().

    Ejemplo:

    Las variables reactivas se llaman así porque son capaces de refrescar la
    vista de los componente cuando éstas cambian. Para crear variables
    reactivas en Vue.js podemos hacer uso de "ref". En Vue.js 3, ref() es una
    nueva función proporcionada por el sistema de reactividad de Vue para
    crear variables reactivas.
-->

<script setup>
    // Importando Ref desde Vue.js para crear reactividad
    import { ref } from "vue";

    // Creando una variable reactiva
    const message = ref("");
    console.log(message);
    /*
        Output:
            RefImpl
                dep : Set(1) {ReactiveEffect}
                __v_isRef : true
                __v_isShallow : false
                _rawValue : ""
                _value : ""
                value : (...)
                [[Prototype]] : Object

        Como se puede observar, ref() devuelve un objeto y entre las
        propiedades que tiene, una de ellas es "value". Esta propiedad
        contiene el valor de la variable, que en este caso se ha inicializado
        como una cadena vacía (""). Por lo tanto, cuando deseamos cambiar el
        valor de la variable, necesitamos hacer referencia a la propiedad
        "value". Por ejemplo:
    */

    // Creando una función para cambiar el valor de forma reactiva.
    const greeting = () => {
        message.value = message.value === "" ? "Hello World" : "";
    }
</script>

<template>
    <!-- Usando la v-on:click para cambiar el valor de la variable -->
    <button v-on:click="greeting"> Click Me </button>

    <!--
        NOTA: Cuando se renderiza el valor de una variable creada con ref(),
        no es necesario utilizar "message.value" en el template. Vue.js
        automáticamente reconoce que debe renderizar el valor asociado a la
        propiedad "value".
    -->
    <h1>{{ message }}</h1>
</template>
