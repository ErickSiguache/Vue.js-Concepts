# Props (Composition API)

En Vue.js, las props son una forma de pasar datos de un componente padre a un componente hijo. Las props son atributos personalizados que puedes registrar en un componente y luego pasar valores desde el componente padre al componente hijo. Esto permite la comunicación entre componentes en una jerarquía de componentes.

**Sin usar `<script setup>`:**

* Componente hijo:

```html
<script>
    import { ref } from "vue";

    export default {
        props: ["name", "age"],
        setup(props) {
            const name = ref(props.name);
            const age = ref(props.age);

            const ChangeTitle = () => {
              name.value = "(No name)";
              age.value = 100;
            }

            return {
                name,
                age,
                ChangeTitle
            }
        }
    }
</script>

<template>
    <h2> My name is {{ name }} and I'm {{ age }} years old </h2>
    <button v-on:click="ChangeTitle"> Click </button>
</template>
```

* Componente padre:

```html
<script>
    import Comp from "./Comp.vue";

    export default {
        setup(){},
        components: {
            Comp
        }
    }
</script>

<template>
  <div>
    <Comp name="Michael" age="23" />
  </div>
</template>
```


**Usando `<script setup>`:**

* Componente hijo:

```html
<script setup>
    import { ref } from "vue";

    const props = defineProps(["name", "age"]);

    const name = ref(props.name);
    const age = ref(props.age);

    const ChangeTitle = () => {
      name.value = "(No name)";
      age.value = 100;
    }
</script>

<template>
    <h2> My name is {{ name }} and I'm {{ age }} years old </h2>
    <button v-on:click="ChangeTitle"> Click </button>
</template>
```

* Componente padre:

```html
<script setup>
    import Comp from "./Comp.vue";
</script>

<template>
  <div>
    <Comp name="Michael" age="23" />
  </div>
</template>
```

## Uso del CDN

Al importar componentes, dependiendo de cómo se realice, es permitido utilizarlos en el HTML con `PascalCase` o `kebab-case`. Generalmente, se utiliza PascalCase cuando se trabaja mediante la CLI, es decir, al crear un proyecto utilizando el comando. Sin embargo, también existe una forma de utilizar Vue.js mediante un CDN.

**Un CDN (Content Delivery Network o Red de Distribución de Contenidos)** es un sistema de servidores distribuidos que trabajan juntos para entregar contenido de internet de manera más rápida y eficiente a los usuarios finales. Estos servidores están estratégicamente ubicados en diferentes ubicaciones geográficas, lo que permite a los usuarios acceder a los recursos (como imágenes, videos, archivos JavaScript y CSS, etc.) desde un servidor cercano en lugar de depender de un solo servidor central.

**Ejemplo de uso de CDN de Vue.js:**
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> CDN with Vue.js </title>
    </head>
    <body>
        <!-- Importando el CDN -->
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <div id="app"></div>

        <!-- Archivo principal del proyecto -->
        <script src="./main.js"></script>
    </body>
</html>
```

**Archivo `Main.js`:**

```javascript
import { createApp } = vue;
import App from './App.vue';

createApp(App).mount('#app')
```

**Archivo `App.vue`:**
```html
<script setup>
    import MessageComponent from "./MessageComponent.vue";
</script>
<template>
    <!-- Forma de uso en Vue.js por CLI -->
    <MessageComponent />
    <MessageComponent></MessageComponent>

    <!-- Uso por medio de un CDN -->
    <message-component></message-component>
</template>
```

**Archivo `MessageComponent.vue`:**

```html
<script setup>
    const { ref } = Vue;

    const message = ref("Hello Vue!");
</script>
<template>
    <h2> {{ message }} </h2>
</template>
```

## Uso de V-For en el llamado de Props

En Vue.js, se puede utilizar v-for para iterar sobre las props de un componente hijo de la misma manera que se haría con cualquier otro array o lista. Esto es útil cuando una prop es un array y deseas representar cada elemento de ese array en el template del componente hijo. Ejemplo:

**Componente hijo:**

```html
<script setup>
  defineProps(["title", "body"]);
</script>

<template>
  <section class="space">
    <h2> {{ title }} </h2>
    <p> {{ body }} </p>
  </section>
</template>

<style scoped>
    .space {
      background-color: green;
      color: white;
      padding: 10px;
      margin: 10px;
    }
</style>
```

**Componente padre:**

```html
<script setup>
  import { ref } from "vue";
  import Comp from "./Comp.vue";

  const posts = ref([
      { id: 1, title: "Post 01", body: "Descrión del post 01" },
      { id: 2, title: "Post 02", body: "Descrión del post 02" },
      { id: 3, title: "Post 03" },
  ]);
</script>

<template>
  <section class="container">
    <!-- Iterando sobre el componente hijo -->
    <Comp v-for="post in posts" :key="post.id"
      :title="post.title"
      :body="post.body"
    />
  </section>
</template>


<style>
  body {
    background-color: gray;
  }
  .container {
    width: 600px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
  }
</style>
```