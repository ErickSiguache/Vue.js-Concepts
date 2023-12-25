# Clase Activa de Vue.js

En Vue Router, para aplicar una clase activa a los elementos de navegación según la ruta activa, se puede utilizar la propiedad **to** del componente **RouterLink** para aplicar una clase específica cuando la ruta está activa.

```html
<RouterLink to="/" active-class="active"> Home</RouterLink>
```

Un problema evidente en este código es la necesidad de modificar cada línea para agregar o quitar una clase específica a los botones si en el futuro no se requiere mantener su estado activo. Afortunadamente, Vue Router ofrece una solución más eficiente a través del enrutador. Por ejemplo:

* `router/index.js`

Al principio, el archivo se verá de esta manera:

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

Para especificar la clase de activación, usamos la propiedad `linkActiveClass` proporcionada por Vue Router. Por ejemplo:

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
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

Con esta configuración, la clase **'active'** se aplicará automáticamente a todos los elementos que utilicen `<RouterLink to="">` en el proyecto.