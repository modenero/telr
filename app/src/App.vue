<script setup>
/* Import modules. */
import { ref } from 'vue'

const location = window.location
console.log('LOCATION', location)

/* Initialize host. */
const host = ref(location.host)

/* Initialize hostname. */
const hostname = ref(location.hostname)

/* Initialize hash. */
const hash = ref(location.hash)

/* Initialize pathname. */
const pathname = ref(location.pathname)

/* Initialize search. */
const search = ref(location.search)



// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <main class="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-gray-300 to-gray-500">
        <section class="flex flex-col items-center gap-4">
            <h1 class="flex flex-col sm:flex-row sm:gap-2 text-indigo-900 font-bold text-center">
                <span class="text-8xl sm:text-7xl">TΞLR</span>
                <span class="text-5xl sm:text-7xl text-indigo-700">Concierge</span>
            </h1>

            <h3 class="text-base sm:text-xl text-gray-700 font-medium italic">
                Under Construction...
            </h3>

            <h5>
                host: <strong>{{host}}</strong>
            </h5>

            <h5>
                hostname: <strong>{{hostname}}</strong>
            </h5>

            <h5>
                hash: <strong>{{hash}}</strong>
            </h5>

            <h5>
                pathname: <strong>{{pathname}}</strong>
            </h5>

            <h5>
                search: <strong>{{search}}</strong>
            </h5>
        </section>
    </main>
</template>
