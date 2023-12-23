# Gestión de rutas y vistas desde los Scripts

La gestión de rutas desde las secciones `<template>` es crucial, pero en ocasiones, necesitamos acceder a las rutas desde las secciones `<script>`. Sin embargo, este enfoque no se realiza de la misma manera que en las secciones `<template>`. Para utilizar rutas en los `<script>`, se recurre al uso de las clases de Vue Route, las cuales facilitan el acceso y la manipulación de las rutas en Vue.js.

## useRouter

Vue Router ofrece a los usuarios una manera de acceder al objeto del enrutador dentro de los componentes de Vue.js `<script>`. El hook **useRouter** es una función especial que otorga acceso a este objeto de enrutador en los componentes especificamente en `<script>`, permitiendo realizar tareas de enrutamiento. Esta función se emplea para cambiar entre diferentes rutas dentro de la aplicación, identificar la ruta actual en la que se encuentra el usuario, obtener parámetros de la URL actual y más. En resumen, el hook **useRouter** es una herramienta que facilita la interacción con Vue Router, permitiendo administrar la navegación en la aplicación Vue.js desde los componentes. Ejemplo:

```html
<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const goAbout = () => {
        router.push('about');
    };
</script>
<template>
    <h1> Hello World </h1>
    <button type="button" @click="goAbout"> Go to About </button>
</template>
```

En resumen, `useRouter()` equivale esencialmente al uso de `<RouterLink>` en los templates, pero para su implementación en los scripts. Este hook proporciona diversas funciones para acceder y gestionar las rutas dentro de la aplicación Vue.js.

## useRoute

**El hook useRoute** en Vue Router proporciona acceso al objeto de la ruta actual en un componente de Vue.js. Con **useRoute**, se puede obtener información sobre la ruta actual, como parámetros, consultas y otros detalles relevantes para el enrutamiento en la aplicación.

Como se ha observado, se puede obtener parámetros desde la ruta. En el caso de los `<template>`, para acceder a los parámetros, se utilizaba el siguiente método:

```javascript
{
    path: '/about/:title',
    name: 'about',
    component: () => import('../views/AboutView.vue')
}
```
```html
<template>
    <p> {{ $route.params.title }} </p>
</template>
```

De manera similar a lo observado con la ruta convencional, no es posible acceder directamente a ella desde los `<script>`. Para solventar esto, se emplea el **useRoute**, que ofrece acceso a la ruta desde los `<script>`, como se muestra en el siguiente ejemplo:

```javascript
{
    path: '/about/:title',
    name: 'about',
    component: () => import('../views/AboutView.vue')
}
```
```html
<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const title = ref(route.params.title);
</script>
<template>
    p> {{ title }} </p>
</template>
```

Tambien es posible acceder a los parametros por medio del objeto de la ruta accediendo desde el mismo por medio de `this.$route`, ejemplo:

```javascript
{
    path: '/about/:title',
    name: 'about',
    component: () => import('../views/AboutView.vue')
}
```
```html
<script setup>
    export default {
        data(){
            return {
                title: ''
            }
        },
        mounted() {
            this.title = this.$route.params.title;
        }
    };
</script>
<template>
    p> {{ title }} </p>
</template>
```

La diferencia principal entre **useRoute** y **$route** (ya que no se usa $this en Vue 3 para acceder a la ruta) radica en cómo se accede a la información de la ruta en el código de Vue.

* **useRoute:** Es una función proporcionada por Vue Router que se usa en la composición de componentes para obtener acceso reactivamente a la información de la ruta actual en el componente.

* **$ route:** Es una propiedad del objeto de la instancia del componente que proporciona información sobre la ruta actual. En Vue 2, puedes acceder a esta información directamente desde el componente con **this.$route**.

En Vue 3 y el uso de la Composición API, **useRoute** se usa generalmente en combinación con la función setup para acceder reactivamente a los datos de la ruta, mientras que en Vue 2, **$route** se utilizaba para acceder directamente a los datos de la ruta desde el componente.
