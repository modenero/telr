<script setup>

const pools = ref(null)

const init = async () => {
    pools.value = []

    pools.value.push({
        name: 'AVAS/NEXA',
        summary: `Daily payouts to HODLers`,
        price: '47,620 NEXA per AVAS',
        slug: 'AVAS',
        tokenid: 'nexa:tptlgmqhvmwqppajq7kduxenwt5ljzcccln8ysn9wdzde540vcqqqcra40x0x',
        tokenidHex: '57f46c1766dc0087b207acde1b3372e9f90b18c7e67242657344dcd2af660000',
        ticker: 'AVAS',
    })

    pools.value.push({
        name: 'MUD/NEXA',
        summary: `MudGroupies are cool!`,
        price: '0 NEXA per MUD',
        tokenid: 'nexa:trs2ccuvqmf62853mwt7ly478qkhjugrk92kfl6cf75yk8hssyqqqlcpr87w8',
        tokenidHex: 'e0ac638c06d3a51e91db97ef92be382d797103b15564ff584fa84b1ef0810000',
        ticker: 'MUD',
    })

    pools.value.push({
        name: 'POWF/NEXA',
        summary: `PoWfReAk#0 are trending...`,
        price: '0 NEXA per POWF',
        tokenid: 'nexa:tqr5nuefyyvtexkfg37cmazk0g8vpym9vexx0t8s4yjjqm0gm5qqqd07j4h7k',
        tokenidHex: '0749f3292118bc9ac9447d8df4567a0ec09365664c67acf0a925206de8dd0000',
        ticker: 'POWF',
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

        <NuxtLink
            v-for="pool of pools"
            :key="pool.name"
            :to="'/dex/' + (pool.slug || pool.tokenid)"
            class="px-3 py-1 bg-indigo-400 rounded-lg"
        >
            <h2>{{pool.name}}</h2>

            <p>{{pool.summary}}</p>

            <h3>{{pool.price}}</h3>
        </NuxtLink>

    </main>
</template>
