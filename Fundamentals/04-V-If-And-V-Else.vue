<!--
    v-if y v-else son directivas condicionales en Vue.js que se utilizan para
    mostrar o ocultar elementos en función de una expresión booleana. Estas
    directivas son muy útiles para controlar la visibilidad de elementos en el
    DOM basándose en el estado de los datos en tu instancia de Vue.
-->

<script setup>
  const active = true;
  const typePerson = "admin";
</script>
<template>
    <!-- Uso del v-if -->
    <p v-if="active"> I'm active </p>
    <p v-if="!active"> I am not active </p>

    <!--
        v-else: La directiva v-else se utiliza junto con v-if y se coloca en
        un elemento que sigue inmediatamente a un elemento con v-if. El
        elemento con v-else se renderizará si la expresión en el v-if\
        correspondiente es evaluada como falsa.
    -->
    <p v-if="typePerson === 'admin'"> I am an administrator </p>
    <p v-else-if="typePerson === 'user'"> I am a user </p>
    <p v-else> I am not an administrator</p>
</template>