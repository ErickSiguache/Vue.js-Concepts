# Componentes

En el contexto de Vue.js (y en muchos otros marcos de trabajo de desarrollo web), un componente es una unidad modular y reutilizable de una interfaz de usuario. Los componentes permiten dividir la interfaz de usuario en partes pequeñas y manejables, lo que facilita el desarrollo, el mantenimiento y la reutilización del código.

Cada componente puede contener su propia estructura HTML, estilos CSS y lógica JavaScript. Los componentes pueden tener propiedades (o atributos) que les permiten recibir datos del componente padre, y pueden emitir eventos para comunicar acciones al componente padre. Ejemplo de un componente:

* Componente Hijo: `Son.vue`

```html
<script setup>
    const message = "Hello world!";
</script>

<template>
  <article>
    <h1>{{ message }}</h1>
  </article>
</template>
```

* Componente Padre: `Father.vue`

```html
<script setup>
    import Son from './Son.vue';
</script>

<template>
    <h1> Hello from the parent component </h1>
    <!--
        El componente hijo es ejecutado:
    -->
    <Son />
</template>
```


La modularidad de los componentes permite construir interfaces de usuario complejas dividiéndolas en partes más pequeñas y manejables. Además, los componentes pueden ser reutilizados en diferentes partes de una aplicación o incluso en diferentes aplicaciones, lo que mejora la eficiencia y facilita el mantenimiento del código.

Ejemplos:


* Componente Padre: `Father.vue`

```html
<script setup>
    import Son from './Son.vue';
</script>

<template>
    <h1> Hello from the parent component </h1>
    <!--
        El componente hijo es ejecutado "tres veces":
    -->
    <Son />
    <Son />
    <Son />
</template>
```

En Vue.js, al trabajar con componentes, es esencial considerar dos enfoques clave: el uso de la API de Opciones y la API de Composición. Estas dos metodologías son fundamentales para crear componentes reutilizables en Vue.js. Los componentes pueden construirse de dos maneras diferentes: a través de la "API de Opciones" y mediante la "API de Composición". Cada uno de estos enfoques tiene sus propias ventajas y casos de uso específicos. Es importante entender estas diferencias para elegir el enfoque más adecuado según el contexto del proyecto y las necesidades del componente.
