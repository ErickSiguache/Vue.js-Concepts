# Gestión de rutas y vistas.

Anteriormente se ha mostrado cómo se configura Vue Router en un proyecto de Vue.js. No obstante, ¿cómo se realizan las redirecciones?

Para que Vue Router pueda llevar a cabo el enrutamiento de una aplicación, se requieren dos elementos fundamentales: el punto donde se renderizarán las rutas y la especificación de qué rutas existen y a qué vistas corresponden.

## Punto de renderizaciones de las vistas

En Vue.js, el punto donde se renderizan las rutas suele ser un componente denominado `<router-view />` o `<RouterView />`.

Este componente especial sirve como contenedor para mostrar dinámicamente el componente asociado a la ruta actual definida por Vue Router. Cada vez que la URL cambia y coincide con una ruta específica, el componente correspondiente se renderiza dentro de `<router-view />`. Este proceso permite que Vue Router gestione la visualización dinámica de componentes basados en la ruta actual del navegador. Ejemplo:

```html
<template>
  <header>
    <h1> Hello World! </h1>
  </header>
  <RouterView />
</template>
```

## Gestión de rutas en Vue Route

Ahora que comprendemos cómo renderizar vistas dinámicamente, ¿Cómo indicamos a qué vistas nos referimos?

Para lograrlo, accedemos directamente a dos carpetas específicas que se crean al agregar Vue Router: **views** y **router**. Estas carpetas son fundamentales para la definición y organización de las vistas y las rutas respectivamente.

Primero accedemos a la carpeta **views**. En esta carpeta, se crea un archivo común de Vue.js y se trabaja de manera similar a como se hace usualmente en Vue.js. En este caso, no cambia mucho, solo que el archivo se encuentra en una carpeta diferente, como se muestra en el siguiente ejemplo:

**NOTA:** Por convención, es importante agregar la palabra **View** después del nombre de la vista.

* `HelloWorldView.vue`

```html
<script setup></script>
<template>
  <h1>Hello World</h1>
</template>
```

Una vez creado el componente que actuará como la vista principal del proyecto, es necesario configurar la ruta correspondiente. Para ello, dirigimos nuestra atención hacia la carpeta **router** y el archivo **index.js**. En el caso de implementar Vue Router desde la creación del proyecto, inicialmente se verá lo siguiente:

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
```

En este punto, lo relevante se encuentra en la propiedad **routes**. Aquí es donde se definen todas las rutas de las páginas del proyecto. En el caso del componente creado anteriormente, debe colocarse de la siguiente manera:

```javascript
const router = createRouter({
  routes: [
    {
      path: '/hello-world',
      name: 'helloWorld',
      component: HelloWorldView
    },
  ]
})
```

**Donde:** El **path** es la dirección a la que se accederá en el navegador. **name** es el nombre de la ruta, útil para ser utilizado en diferentes partes del proyecto. **Component** hace referencia al componente que utilizará la ruta.

### Lazy Loading

Ya hemos definido la ruta que usará Vue Router para acceder al componente de la vista. Sin embargo, esto podría generar problemas de rendimiento, ya que cargaría directamente incluso si esta vista no ha sido abierta. Para evitar este inconveniente, debemos cargar la vista mediante **Lazy Loading** de la siguiente manera:

```javascript
const router = createRouter({
  routes: [
    {
      path: '/hello-world',
      name: 'helloWorld',
      component: () => import('../views/HelloWorldView.vue')
    },
  ]
})
```

Cuando se implementa lazy loading en las rutas, los componentes asociados a estas rutas no se cargan de inmediato al iniciar la aplicación. En su lugar, se cargan dinámicamente solo cuando se accede a esa ruta específica. Esto significa que los componentes se descargan y cargan en función de la interacción del usuario, lo que puede mejorar significativamente los tiempos de carga inicial de la aplicación y la eficiencia en el uso de los recursos del navegador.


## Acceso a rutas dinámicas

Claro, una vez que hemos definido el punto donde se renderizarán las rutas, creado y registrado las rutas en el enrutador de Vue Router, surge la necesidad de navegar dinámicamente entre ellas. ¿Cómo podemos lograrlo utilizando Vue Router?

Para lograr la navegación dinámica entre rutas, empleamos `<RouterLink to="">`. Este elemento define el acceso a una ruta de manera similar a `<a href=""></a>` en HTML. De hecho, internamente, Vue interpreta `<RouterLink>` como un `<a>`. Utilizar `<RouterLink to="">` nos permite establecer fácilmente enlaces entre rutas sin tener que preocuparnos por las URL relativas. Por ejemplo:

* `router/index.js`

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: import('../views/HelloWorldView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact-me',
      name: 'contact',
      component: () => import('../views/ContactMeView.vue')
    }
  ]
})

export default router
```

* `ContactMeView.vue`

```html
<script setup></script>
<template>
  <h1>Hello World from Contact </h1>
</template>
```

* `AboutView.vue`

```html
<script setup></script>
<template>
  <h1>Hello World from About</h1>
</template>
```

* `HelloWorldView.vue`

```html
<script setup></script>
<template>
    <header>
        <nav>
            <RouterLink to="/contact-me">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
    <main>
        <RouterView />
    </main>
</template>
```

Como se puede observar en el ejemplo, `ContactMeView.vue` y `AboutView.vue` son dos componentes que serán renderizados dentro de `HelloWorld.vue`. Es en este componente donde se indica que los otros componentes se rendericen mediante el uso de `<RouterView />`. En el elemento `nav` se especifica la navegación de las rutas utilizando `<RouterLink to=""></RouterLink>`.

## Parametros en Rutas

En Vue Router, los parámetros en las rutas permiten capturar dinámicamente valores específicos dentro de la URL. Estos parámetros se definen en las rutas y pueden ser utilizados para proporcionar datos dinámicos a los componentes basados en la ruta actual.

Por ejemplo, al definir una ruta en Vue Router, puedes especificar un segmento de la ruta precedido por dos puntos **(:)** para indicar un parámetro dinámico. Este parámetro captura el valor presente en esa parte de la URL. Ejemplo:

```javascript
{
    path: '/about/:title',
    name: 'about',
    component: () => import('../views/AboutView.vue')
}
```

En este caso, `:title` es un parámetro de ruta dinámico que captura el valor que aparece en la parte de la URL después de `/about/`. Por ejemplo, si la URL es `/about/john`, el valor capturado por el parámetro **title** será **'john'**.

En la ruta `about` para poder leer los parametros debemos hacer uso del `$route.params`, ejemplo:

* `AboutView.vue`: Con ruta `/about/:title`

```html
<template>
    <p> {{ $route.params.title }} </p>
</template>
```

Para enviar un parámetro desde un componente, como el componente `AboutView.vue`, se debe realizar lo siguiente:

```html
<script setup>
    const namePerson = "John";
</script>
<template>
    <nav>
        <RouterLink to="`/about/${namePerson}`">About</RouterLink>
    </nav>
</template>
```

## Ruta 404

En Vue.js, una ruta 404 se utiliza para manejar las solicitudes de URL que no corresponden a ninguna ruta definida en la aplicación.

Al configurar Vue Router, puedes establecer una ruta específica para manejar este tipo de situaciones, a menudo denominada "catch-all" o "wildcard". Esta ruta "catch-all" captura cualquier URL que no coincida con las rutas definidas previamente y muestra una página personalizada para indicar que la página no se encontró o para redirigir al usuario a una página de inicio u otra sección relevante de la aplicación. Ejemplo:

* `NotFound.vue`

```html
<template>
    <h1>404: Not Found</h1>
</template>
```

* `router/index.js`

```javascript
{
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
}
```

Para realizar este proceso, también está la opción de usar **pathMatch**. **pathMatch** es una opción que se puede usar en la configuración de la ruta. Esta opción le permite controlar cómo se realiza la coincidencia de ruta para una ruta específica. Ejemplo:

```javascript
{
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
}
```

La elección entre pathMatch y catchAll depende de la funcionalidad específica que necesites para tu aplicación.

* **pathMatch:** Esta opción se utiliza para controlar la coincidencia de ruta para una ruta específica. Te permite definir si la coincidencia debe ser parcial (predeterminada) o exacta. Si necesitas que una ruta coincida solo cuando la URL sea exactamente igual al path especificado, pathMatch: 'full' es útil.

* **catchAll:** Esta opción se usa para crear una ruta de captura (catch-all) que maneja todas las rutas no coincidentes en una ubicación determinada. Si ninguna otra ruta coincide con la URL, la ruta de captura se activa y puede usarse, por ejemplo, para mostrar una página 404 o redirigir a una página de inicio.

En resumen, el uso de **pathMatch** está destinado a controlar cómo coinciden las rutas individuales, mientras que **catchAll** se utiliza para manejar todas las rutas no coincidentes en un único lugar. Ambos tienen diferentes propósitos y se aplican en situaciones distintas dentro de una aplicación Vue Router.
