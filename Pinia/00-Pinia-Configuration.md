# Pinia

`Pinia` es una biblioteca de gestión de estado basada en `Vuex` para Vue.js. Se utiliza para administrar el estado de la aplicación de forma centralizada y predecible. Esta biblioteca está diseñada para ser simple y fácil de usar, ofreciendo una alternativa liviana y reactiva a Vuex para aplicaciones Vue.js. Pinia está basada en el concepto de **"Stores"**, que son módulos que almacenan y gestionan datos. Proporciona una forma clara y eficiente de manejar el estado de la aplicación.

Pinia incluye varias características que facilitan la gestión del estado en aplicaciones Vue.js:

* **Stores Modulares:** Permite dividir el estado de la aplicación en diferentes stores, lo que simplifica la gestión y el mantenimiento del estado.

* **Reactividad:** Utiliza el sistema de reactividad de Vue.js para actualizar automáticamente los componentes cuando el estado almacenado en los stores cambia.

* **Tipado:** Ofrece soporte para tipos en TypeScript, lo que facilita el manejo de tipos de datos dentro de los stores.

* **Composición Simple:** Proporciona una forma sencilla y clara de componer y reutilizar lógica entre los stores, lo que permite una mejor modularidad y mantenibilidad del código.

* **API Concisa y Clara:** La API de Pinia es simple y fácil de entender, lo que facilita su uso y aprendizaje.

En resumen, Pinia ofrece una alternativa ligera y reactiva para gestionar el estado en aplicaciones Vue.js, con un enfoque en la simplicidad, la modularidad y la reactividad.

## Instalacion de Pinia

Para utilizar Pinia en nuestro proyecto de Vue, es crucial tener en cuenta dos consideraciones importantes. Una de estas consideraciones es la forma en que se incluye Pinia en un proyecto de Vue.js.

### Mediante la creación de un proyecto de Vue.js

La primera forma de integrar Pinia es al iniciar un proyecto de Vue.js desde cero. Al iniciar la instalación del proyecto utilizando Vite.js, se debe indicar la inclusión de Pinia de la siguiente manera:

* Usando Vite.js para crear un proyecto de Vue.js

```cmd
"Comando de consola"> npm create vue@latest
```

Después de ejecutar el comando, se nos realizarán varias consultas. Una de ellas es si queremos incluir Pinia en el proyecto de Vue.js:

```cmd
✔ Add Pinia for state management? … No / Yes
```

Como es evidente, debemos seleccionar "Yes". Luego, se procede con el resto de la configuración y la instalación de las dependencias, como por ejemplo, a través de npm.

### Mediante el comando de npm

En ocasiones al igual que Vue Router, ya sea por error o por considerar que no es necesario, uno puede omitir la instalación inicial de Pinia. Sin embargo, si surge la necesidad de utilizarlo más adelante, es posible instalarlo posteriormente utilizando el siguiente comando:

```cmd
"Comando de consola"> npm install pinia
```