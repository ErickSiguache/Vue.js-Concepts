<!--
    Los modificadores de eventos en Vue.js son extensiones que puedes añadir a
    las directivas v-on para alterar su comportamiento predeterminado. Los
    modificadores se añaden como sufijos a las directivas v-on y se indican
    con un punto (.) seguido del nombre del modificador. Aquí hay algunos
    ejemplos de modificadores de eventos comunes: stop, capture, self, once,
    passive y prevent.

    En estos ejemplos de modificadores de eventos, se utilizará el modificador
    "prevent" para ilustrar su funcionalidad:
-->

<script setup>
    const greeting = (name) => {
        console.log(`Hello ${name}`);
    }
</script>

<template>
    <!--
        En el siguiente formulario, cada vez que se presiona el botón, el
        formulario se recarga, lo que provoca la pérdida de información debido
        a que se está renderizando nuevamente. Para evitar este comportamiento
        y retener la información en el formulario, es necesario utilizar el
        modificador "prevent".
    -->
    <form>
      <button type="submit"> Click </button>
    </form>
    <!--
        Prevent: Previene el comportamiento por defecto del evento. Equivale a
        event.preventDefault() en JavaScript puro. Un ejemplo de uso es para
        prevenir que una pagina se carge al momento de precionar un boton de un
        formulario.
    -->
    <form v-on:submit.prevent="greeting('Hello')">
        <button type="submit"> Click with prevent </button>
    </form>
    <!--
        Nota: v-on:submit se utiliza de manera similar a click, pero
        específicamente para botones del tipo "submit".
    -->
</template>
