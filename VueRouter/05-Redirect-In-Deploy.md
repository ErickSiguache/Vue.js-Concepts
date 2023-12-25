# Redirecciones en producción

El archivo **_redirects** se utiliza en Vue.js para configurar redirecciones o reenvíos de URL al desplegar la aplicación en un servicio de alojamiento estático como `Netlify` o `Vercel`. Permite definir reglas de redireccionamiento que se aplican cuando ocurren ciertos patrones de URL, por ejemplo, redirigir todas las solicitudes a una página de error personalizada o establecer redireccionamientos específicos de URL. Esto es útil para manejar rutas y URLs cuando se trabaja con aplicaciones Vue.js en entornos de alojamiento estático.

El uso del archivo _redirects es común en aplicaciones web, incluyendo las desarrolladas con Vue.js, cuando se despliegan en servicios de alojamiento estático. Algunas razones por las cuales se utiliza este archivo son:

* **Redireccionamiento de URL:** Permite redirigir URLs específicas a otras rutas dentro de la aplicación o a recursos externos.
* **Manejo de rutas:** Ayuda a gestionar las rutas y URL en la aplicación, asegurando que las solicitudes se dirijan correctamente a las rutas esperadas, especialmente en aplicaciones de una sola página (SPA).
* **Páginas de error personalizadas:** Facilita la configuración de páginas de error personalizadas para códigos de estado HTTP específicos, como redirigir a una página de error 404 personalizada cuando no se encuentra una ruta.
* **Mejora la experiencia del usuario:** Ayuda a mejorar la experiencia del usuario al manejar redirecciones de manera eficiente y proporcionar una respuesta adecuada a las solicitudes de URL.

Para implementar redirecciones en una aplicación Vue.js, es necesario dirigirse a la ruta del proyecto `src/public/` y crear un archivo llamado:

![Example of redirects in vue.js](./imgs/redirect-example.PNG)

Después, es necesario especificar a qué redirección debe responder la aplicación. En este caso, dado que Vue.js apunta al `id="app"` del `div` en el archivo `index.html` de la ruta raíz, es allí donde debemos crear la redirección:

```sh
/* /index.html 200
```

