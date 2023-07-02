<script setup>

const pools = ref(null)

const init = async () => {
    pools.value = []

    pools.value.push({
        name: 'AVAS/NEXA',
        summary: `Ava's are the official token of Ava's DAO`,
        price: '$0.33888 per $NEXA',
    })

    pools.value.push({
        name: 'MUD/NEXA',
        summary: `MudGroup are cool!`,
        price: '$0.00 per $NEXA',
    })
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })

</script>

<template>
    <main class="py-4 flex flex-col gap-4">

        <section v-for="pool of pools" :key="pool.name" class="px-3 py-1 bg-indigo-400 rounded-lg">
            <h2>{{pool.name}}</h2>

            <p>{{pool.summary}}</p>

            <h3>{{pool.price}}</h3>
        </section>

    </main>
</template>
