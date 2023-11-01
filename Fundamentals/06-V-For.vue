<!--
    v-for es una directiva en Vue.js que se utiliza para iterar sobre
    elementos de una lista o un objeto y renderizar dinámicamente contenido en
    función de esos elementos. Permite crear repetición en el DOM, generando
    múltiples instancias de un elemento o un componente basándose en los datos
    proporcionados.
-->

<script setup>
    const arrayFruit = ["🍎", "🍌", "🍉", "🍓", "🍒"];
    const Person = { name: "John", age: 23 }
</script>

<template>
    <!-- Uso del v-for en Vue.js -->
    <ul v-for="fruit in arrayFruit">
        <li> {{ fruit }} </li>
    </ul>
    <!--
        Cuando utilizas v-for para iterar sobre elementos en Vue.js, es
        importante proporcionar una clave (key) única para cada elemento en la
        lista. La razón detrás de esto es la eficiencia y el rendimiento en la
        manipulación del DOM.

        Cuando Vue.js renderiza elementos en un bucle v-for, utiliza las
        claves para realizar un seguimiento eficiente de qué elementos han
        sido modificados, agregados o eliminados. Sin una clave única para
        cada elemento, Vue.js puede tener dificultades para identificar qué
        elementos necesitan ser actualizados, lo que puede llevar a problemas
        como la pérdida de estado del componente, elementos que no se
        actualizan correctamente o errores inesperados en la interfaz de
        usuario.

        En el ejemplo anterior, para resolver este problema, podemos utilizar
        el índice del valor en el array. Para lograrlo, necesitamos extraer
        ese índice. Esto se puede hacer de la siguiente manera:
    -->
    <ul v-for="(fruit, index) in arrayFruit" :key="index">
        <li> {{ fruit }} </li>
    </ul>
    <!--
        Cuando se utilizan objetos, el índice se convierte en la clave del
        valor correspondiente en ese caso. Y luego colocar el index.
    -->
    <ul v-for="(value, keyPerson, index) in Person" :key="index">
        <li> {{ index }}) {{ keyPerson }}: {{ value }} </li>
    </ul>
    <!--
        NOTA: Aunque podemos hacer uso del índice, debemos tratar de evitarlo.
        En un proyecto real, normalmente se trabaja con objetos, y estos
        objetos ya tienen un identificador único, como el ID de la base de
        datos. En estos casos, es mejor utilizar estos IDs para evitar
        problemas.
    -->
</template>
