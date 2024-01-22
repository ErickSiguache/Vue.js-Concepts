# Uso de un Store

Una vez definido un "store", se puede emplear en toda la aplicación para modificar sus valores y observar los cambios reflejados en distintos componentes. Para utilizar el "store", es necesario importarlo en los componentes donde será requerido su uso. Por ejemplo:

```html
<script>
    import { useCounterStore } from "@/store/counter";

    const useCounter = useCounterStore();
</script>
<template>
    <section>
        <h1> Counter: {{ useCounter.counter }}</h1>
        <h2> Computed: {{ useCounter.double }} </h2>
        <button @click="useCounter.increment">Increment</button>
        <button @click="useCounter.decrement">Decrement</button>
    </section>
</template>
```

**NOTA:** La utilización de un "store" en un componente es sencilla; no obstante, si es necesario emplear una de estas variables dentro del script o se desea desestructurar el objeto que devuelve `useCounterStore()` para hacer más legible nuestro código, es importante tener en cuenta que **las referencias** y **los datos computados** `no conservan su reactividad` por defecto en otros componentes. Esto significa que los cambios realizados en las propiedades y datos computados no se reflejarán en el componente. Para solucionarlo, se requiere emplear un método proporcionado por la librería Pinia, denominado `storeToRefs`. Ejemplo:

```html
<script>
    import { storeToRefs } from "pinia";
    import { useCounterStore } from "@/store/counter";

    const useCounter = useCounterStore();

    const { counter, double } = storeToRefs(useCounter);
    const { increment, decrement } = useCounter
</script>
<template>
    <section>
        <h1> Counter: {{ counter }}</h1>
        <h2> Computed: {{ double }} </h2>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </section>
</template>
```

Para los métodos, dado que no generan cambios de manera reactiva hasta que son ejecutados, no es necesario utilizar `storeToRefs`. Por lo tanto, se efectúa una destructuración común y corriente.