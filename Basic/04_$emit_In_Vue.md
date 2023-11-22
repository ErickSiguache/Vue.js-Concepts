# Uso de $emit

`$emit` es un método en Vue.js que se utiliza en los componentes para emitir eventos personalizados. Estos eventos permiten la comunicación entre componentes padres e hijos o entre componentes hermanos. Cuando un evento personalizado es emitido por un componente hijo, los componentes padres pueden escuchar ese evento y reaccionar en consecuencia. Ejemplo:

**Componente padre:**

```html
<script setup>
  import { ref } from "vue";
  import Comp from "./Comp.vue";

  const myFavorite = ref("");
  const posts = ref([
      { id: 1, title: "Post 01", body: "Descrión del post 01" },
      { id: 2, title: "Post 02", body: "Descrión del post 02" },
      { id: 3, title: "Post 03" },
  ]);

  // Se crea una función para emitir ser enviada al componente hijo
  const setFavorite = (title) => myFavorite.value = title;
</script>

<template>
  <section class="container">
    <!-- Iterando sobre el componente hijo -->
    <Comp v-for="post in posts" :key="post.id"
      :title="post.title"
      :body="post.body"
      @setFavorite="setFavorite"
    />
  </section>
</template>
```

La forma de enviar la función al componente hijo para que este la procese es a través de `@setFavorite="setFavorite"`.


**Componente hijo:**

```html
<script setup>
  defineProps(["title", "body"]);
</script>

<template>
  <section class="space">
    <h2> {{ title }} </h2>
    <p> {{ body }} </p>
    <button @click="$emit('setFavorite', title)"></button>
  </section>
</template>
```

En este caso, se utiliza la directiva `click` para ejecutar la función, seguida del método `$emit`, que se encarga de emitir el evento que ejecutará la función proporcionada desde el componente padre. El primer parámetro de `$emit` es el nombre del evento, que corresponde al nombre de la función proporcionada por el padre. El segundo parámetro son los argumentos de la función del padre, en este caso, el title de la función `setFavorite` que es una función de flecha (arrow function).


## defineEmits

Como se puede observar, el uso de `$emit` facilita la comunicación entre componentes. No obstante, tiene sus limitaciones, ya que normalmente se ejecuta directamente desde el template. Esto implica que si se necesita utilizarlo dentro de otra función del componente hijo, esto no sería posible. Para superar esta limitación, se debe hacer uso de `defineEmits`. Esta función proporciona una forma estructurada de trabajar con eventos en el script del componente. Un ejemplo claro de su uso sería:

```html
<script setup>
  defineProps(["title", "body"]);

  // Podemos hacer uso de la variable para realizar otros procesos
  const emit = defineEmits(["setFavorite"]);
</script>

<template>
  <section class="space">
    <h2> {{ title }} </h2>
    <p> {{ body }} </p>
    <button @click="emit('setFavorite', title)"></button>
  </section>
</template>
```
