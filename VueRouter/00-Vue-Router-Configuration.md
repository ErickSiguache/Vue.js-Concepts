# Vue Router

Vue Router es la biblioteca oficial de enrutamiento para Vue.js. Proporciona una forma de realizar enrutamiento en aplicaciones Vue de una sola página (SPA - Single Page Applications). Con Vue Router, puedes definir diferentes rutas para tu aplicación y luego renderizar componentes específicos según la URL actual, permitiendo así la navegación dentro de la aplicación.

Algunas características clave de Vue Router incluyen:

* **Enrutamiento Declarativo:** Permite definir las rutas de manera declarativa usando componentes Vue.

* **Navegación Basada en Componentes:** Permite mostrar componentes específicos en función de la URL actual.

* **Parámetros de Ruta:** Permite pasar parámetros a las rutas para realizar acciones dinámicas basadas en esos parámetros.

* **Anidamiento de Rutas:** Posibilita la estructuración de rutas anidadas, lo que permite crear jerarquías complejas de componentes.

* **Control de Navegación:** Ofrece métodos para controlar la navegación del usuario, como navegación programática o guardias de navegación.

En resumen, Vue Router es una herramienta fundamental para crear aplicaciones web dinámicas con Vue.js, permitiendo la navegación entre diferentes vistas y la gestión de estados de la aplicación según la URL.

## Instalacion de Vue Router

Para utilizar Vue Router, es crucial tener en cuenta dos consideraciones importantes. Una de estas consideraciones es la forma en que se incluye Vue Router en un proyecto de Vue.js.

### Mediante la creación de un proyecto de Vue.js

La primera forma de integrar Vue Router es al iniciar un proyecto de Vue.js desde cero. Al iniciar la instalación del proyecto utilizando Vite.js, se debe indicar la inclusión de Vue Router de la siguiente manera:

* Usando Vite.js para crear un proyecto de Vue.js

```cmd
"Comando de consola"> npm create vue@latest
```

Después de ejecutar el comando, se nos realizarán varias consultas. Una de ellas es si queremos incluir Vue Router en el proyecto de Vue.js:

```cmd
✔ Add Vue Router for Single Page Application development? … No / Yes
```

Como es evidente, debemos seleccionar "Yes". Luego, se procede con el resto de la configuración y la instalación de las dependencias, como por ejemplo, a través de npm.


### Mediante el comando de npm

En ocasiones, ya sea por error o por considerar que no es necesario, uno puede omitir la instalación inicial de Vue Router. Sin embargo, si surge la necesidad de utilizarlo más adelante, es posible instalarlo posteriormente utilizando el siguiente comando:

```cmd
"Comando de consola"> npm install vue-router@4
```