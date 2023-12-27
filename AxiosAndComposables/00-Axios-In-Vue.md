# Axios en Vue.js

Antes de explicar lo que es un composable, primero, para tener un ejemplo más claro, se hará un llamado a una API. Pero al mismo tiempo, para aprender otra herramienta, no se hará uso de fetch, sino que se utilizará Axios. Pero, ¿Qué es Axios?

Axios es una librería de JavaScript muy utilizada para realizar peticiones HTTP desde el navegador o desde Node.js. Esta herramienta proporciona una interfaz sencilla y basada en promesas para llevar a cabo operaciones de red, tales como solicitar y enviar datos a servidores web, trabajar con APIs y gestionar distintos tipos de solicitudes y respuestas HTTP de manera eficiente.

Axios y Fetch son dos formas populares de realizar peticiones HTTP en JavaScript:

* **Fetch:** Es una función nativa del navegador, ofrece una interfaz para realizar solicitudes de red y trabajar con respuestas. Fetch es compatible con Promises, y aunque es fácil de usar, a veces su manejo de errores puede resultar un poco complejo.
* **Axios:** Es una librería externa que simplifica las solicitudes HTTP. Axios tiene un manejo más robusto de errores, una API más completa y está disponible tanto en navegadores como en Node.js. Además, proporciona opciones predeterminadas para manejar encabezados, transformaciones de datos y otras configuraciones, lo que hace que sea más conveniente y fácil de usar que Fetch.

## Uso de Axios en Vue.js

Por defecto, Vue.js no incluye Axios preinstalado. Por lo tanto, es necesario realizar su instalación:

```cmd
npm install axios
```

En el componente donde se desee utilizar, se debe realizar la importación correspondiente:

```html
<script setup>
    import axios from 'axios';
</script>
```

Luego, se debe utilizar de manera similar a `fetch`, creando una función asíncrona para llamar a la API:

```html
<script setup>
    import { ref } from "vue";
    import axios from 'axios';

    const responseData = ref([]);

    const getData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            responseData.value = response.data;
        } catch (error) {
            console.error(error.message);
        }
    }
</script>
```

La diferencia más notable a simple vista en el código anterior es que no se necesita convertir el código al formato JSON con `response.json()`. Esto se debe a que Axios realiza automáticamente este trabajo por nosotros. Esta es una de las muchas ventajas de usar Axios. Además, proporciona opciones predeterminadas para manejar encabezados, transformaciones de datos y otras configuraciones, lo que hace que sea más conveniente y fácil de usar que Fetch.

La elección entre `Axios` y `Fetch` a menudo depende de las necesidades del proyecto y de las preferencias personales del desarrollador. Axios suele ser preferido por su flexibilidad, facilidad de uso y manejo de errores más claro, mientras que Fetch es una opción nativa que puede ser útil en algunos casos simples y cuando se quiere evitar el uso de librerías externas.
