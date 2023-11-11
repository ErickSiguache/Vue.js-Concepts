# Option API (API de opción)

En Vue.js, la "Option API" se refiere a la forma tradicional y más antigua de definir componentes. En este enfoque, los componentes de Vue se crean utilizando un objeto que contiene opciones como `data`, `methods`, `computed`, `watch`, `props`, `created` y `mounted`. Estas opciones definen el estado del componente, sus métodos y sus interacciones con el DOM.

**Algunas de estas opciones son las siguientes:**

* **Data**: Se utiliza para definir las propiedades del estado del componente, lo que significa que cualquier cambio en estas propiedades provocará una actualización automática en el DOM. Se utilizan para almacenar y gestionar el estado local del componente.

```html
<script>
    export default {
        name: "component name",
        data(){
            return {
                count: 0
            }
        }
    }
</script>

<template>
    <article>
        <h2> Count is {{ count }} </h2>
    </article>
</template>
```

* **Methods:** Se utiliza para definir métodos que pueden ser llamados desde el template del componente. Los métodos definidos en methods son funciones que pueden ser llamadas en respuesta a eventos del usuario u otras acciones. Pueden realizar operaciones y manipulaciones en los datos del componente.

```html
<script>
    export default {
        name: "component name",
        data(){
            return {
                count: 0
            }
        },
        methods: {
            incremet() {
                this.counter.value++;
            }
        }
    }
</script>

<template>
    <article>
        <h2> Count is {{ count }} </h2>
        <button type="button" @click="incremet"> Incremet </button>
    </article>
</template>
```

* **Computed:** Se utiliza para definir propiedades calculadas basadas en otras propiedades reactivas del componente. Las propiedades calculadas en computed se recalculan automáticamente cuando las propiedades reactivas que dependen de ellas cambian. Son útiles para realizar cálculos basados en datos reactivos y para evitar realizar cálculos redundantes.

```html
<script>
    export default {
        name: "component name",
        data(){
            return {
                count: 0
            }
        },
        methods: {
            incremet() {
                this.counter.value++;
            }
        },
        computed: {
            changeClass() {
                const classColor = this.counter > 0 ? "green" : "red";
                return counter.value === 0 ? "" : classColor;
            };
        }
    }
</script>

<template>
    <article>
        <h2 :class="changeClass"> Count is {{ count }} </h2>
        <button type="button" @click="incremet"> Incremet </button>
    </article>
</template>
```

En la "API de Opciones", como se puede observar, es necesario especificar cada una de las propiedades del componente a través de un objeto. En contraste, en la "API de Composición", no es necesario especificar explícitamente el tipo de cada propiedad del componente.

Es importante tener en cuenta que, aunque la "API de Composición" puede parecer tener todas las ventajas y que el uso de la "API de Opciones" ya no es conveniente, en ciertas ocasiones todavía es necesario utilizarla. Además, es esencial considerar que existen muchos proyectos creados en Vue.js 2, y esta versión solo soporta la "API de Opciones". Por lo tanto, es necesario comprender cómo funciona esta API para trabajar eficientemente con proyectos heredados o aquellos que aún no han migrado a Vue.js 3.
