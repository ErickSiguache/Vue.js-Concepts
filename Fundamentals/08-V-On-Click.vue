<!--
    La directiva v-on:click en Vue.js se utiliza para asociar un evento de
    clic (por ejemplo, hacer clic en un elemento HTML) a una expresión o
    método definido en el componente de Vue.js. Cuando el elemento HTML al que
    se le ha aplicado v-on:click se hace clic, la expresión o el método
    asociado se ejecuta.
-->

<script setup>
    const hello = () => {
        console.log("Hello world");
    }

    const helloTwo = (name) => {
        console.log(`Hello ${name}`)
    }
</script>

<template>
    <!--
        La directiva v-on:click se utilizará para ejecutar la función hello
        cada vez que se haga clic en el botón. Es importante tener en cuenta
        que si la función no recibe argumentos, no es necesario colocar los
        paréntesis "()" al definirla o llamarla.
    -->
    <button v-on:click="hello"> Click Me! </button>
    <!-- función con argumentos -->
    <button v-on:click="helloTwo('John')"> Click Me!, Two </button>

    <!--
        Como se puede observar, el uso de v-on:click es muy importante ya que
        nos permite ejecutar funciones para realizar procesos. Sin embargo,
        conforme aumenta la complejidad del código, el uso extensivo de
        v-on:click puede volverse confuso y difícil de leer, especialmente en
        grandes cantidades de código.

        Para abordar este problema, el equipo de Vue.js ha implementado un
        azúcar sintáctico para v-on. En lugar de escribir v-on:, puedes
        utilizar el símbolo "@" para acortar la escritura de la función.
        Por ejemplo:
    -->
    <button @click="helloTwo('Michael')"> Click with "@" </button>
</template>
