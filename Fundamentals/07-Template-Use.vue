<!--
    Antes de explicar el uso del "template", es esencial comprender que al
    recorrer un arreglo utilizando la directiva "v-for" en Vue.js, a menudo
    necesitamos renderizar ciertas partes del código en función de condiciones
    específicas establecidas mediante "v-if". Esto se logra de la siguiente
    manera:
-->

<script setup>
    const arrayFruit = [
        {
            name: "Apple",
            price: "$1.00",
            description: "An Apple",
            stock: 21,
        },
        {
            name: "Pear",
            price: "$2.00",
            description: "A pear",
            stock: 0,
        },
        {
            name: "Orange",
            price: "$3.00",
            description: "An orange",
            stock: 20,
        },
    ];
</script>

<template>
    <!--
        Sin embargo, al intentar utilizar "v-for" y "v-if" juntos, pueden
        surgir varios problemas debido a que "v-if" tiene prioridad en el
        proceso de renderizado. En este caso, "v-if" se ejecutará primero
        y luego "v-for", lo que provocará un error.
    -->
    <ul>
        <li v-for="fruit in arrayFruit" :key="fruit.name" v-if="fruit.stock > 0">
            {{ fruit.name }} - {{ fruit.description }}
        </li>
    </ul>
    <!--
        Una solución podría ser colocar "v-if" después de "v-for" utilizando
        otra etiqueta. Sin embargo, es importante tener en cuenta que "v-for"
        renderizará las etiquetas independientemente de si tienen texto o no.
        Por ejemplo:
    -->
    <ul>
        <li v-for="fruit in arrayFruit" :key="fruit.name">
            <!--
                En este caso, el elemento "li" donde la condición no se cumpla
                se renderizará vacío. Esto se debe a que "v-for" creará el
                "li", pero al no tener ningún valor debido a que la etiqueta
                "span" tiene una condición para renderizarse, el resultado
                será un elemento de lista vacío.
            -->
            <span v-if="fruit.stock > 0">
                {{ fruit.name }} - {{  fruit.description }}
            </span>
        </li>
    </ul>
    <!--
        En esos casos, la solución es utilizar un elemento "template". La
        etiqueta "template" actuará como un contenedor para "v-for", lo que
        permitirá que sea el elemento "li" quien tenga la condición, en lugar
        de un "span". De esta manera, evitamos crear un elemento "li" de forma
        innecesaria.
    -->
    <template v-for="fruit in arrayFruit" :key="fruit.name">
        <li v-if="fruit.stock > 0">
            {{ fruit.name }} - {{  fruit.description }}
        </li>
    </template>
</template>

<!--
    En resumen:

    Cuando estamos trabajando con las directivas v-for y v-if en Vue.js,
    podemos encontrarnos con problemas de renderizado si intentamos aplicar
    v-if directamente a elementos generados por v-for. Para evitar esto,
    podemos utilizar un elemento template como contenedor de v-for,
    permitiendo así que las condiciones v-if se apliquen a los elementos
    internos de manera adecuada, sin crear elementos innecesarios. El template
    actúa como un contenedor invisible que no se renderiza en el DOM, lo que
    ayuda a estructurar correctamente el código y evitar errores de
    renderizado.
-->
