<!--
    v-bind es una directiva en Vue.js que se utiliza para enlazar
    dinámicamente los atributos de los elementos HTML a las expresiones o
    variables de Vue. Esto significa que puedes manipular dinámicamente los
    valores de los atributos HTML basados en los datos en tu instancia de Vue.
-->

<script setup>
  const name = "John Smith";
  const styleName = "color: blue";
</script>
<template>
    <!-- Con el uso de v-bind, no es necesario el uso de {{ }}. -->
    <h1 v-bind:style="styleName"> {{ name }} </h1>

    <!--
        Si no se desea usar v-bind, Vue.js permite escribir simplemente ":" y
        automáticamente reconocerá que ":" por defecto se interpreta como
        v-bind.
    -->
    <h2 :style="styleName">{{ name }}</h2>
</template>

<!--
    Nota: En la interpolación de texto, podemos colocar código JavaScript sin
    ningún problema. Sin embargo, no se nos permite incluir cualquier código
    JavaScript. Únicamente podemos hacer uso de código con retorno inmediato,
    como variables, funciones con retorno o el operador ternario. Sentencias
    como for, if o while no están permitidas. Para lograrlo, existen algunas
    directivas que facilitan estos procesos, como v-if, v-else o v-for.
-->
