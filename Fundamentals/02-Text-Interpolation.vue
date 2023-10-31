<!--
    La interpolación de texto en Vue.js es una técnica que te permite mostrar
    dinámicamente datos en el contenido HTML de tu aplicación. Se utiliza para
    insertar valores de variables o propiedades de datos de Vue.js
    directamente en el texto que se muestra en la interfaz de usuario.
-->

<script setup>
    const name = "John Smith";
</script>

<template>
    <!--
        La interpolación de texto se realiza utilizando la doble llave ({{ }})
        en las plantillas Vue.js. Por ejemplo, para mostrar la variable name
        declarada anteriormente en la instancia Vue se hace de la siguiente
        forma:
    -->
    <h1>{{ name }}</h1>
</template>

<!--
    Nota: La interpolación de texto ({{ }}) en Vue.js funciona únicamente para
    los valores internos de las etiquetas HTML. No se pueden utilizar
    variables, por ejemplo, para asignar una clase. Para lograrlo, es necesario
    utilizar la directiva v-bind.
-->
