<script setup lang="ts">

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'
import { useSystemStore } from '@/stores/system'
import { useWalletStore } from '@/stores/wallet'
const Profile = useProfileStore()
const System = useSystemStore()
const Wallet = useWalletStore()

onBeforeMount(() => {
    Profile.$state = JSON.parse(localStorage.getItem('profile'))
    System.$state = JSON.parse(localStorage.getItem('system'))
    Wallet.$state = JSON.parse(localStorage.getItem('wallet'))
})

watch([Profile.$state, System.$state, Wallet.$state], (_state) => {
    localStorage.setItem('profile', JSON.stringify(_state[0]))
    localStorage.setItem('system', JSON.stringify(_state[1]))
    localStorage.setItem('wallet', JSON.stringify(_state[2]))
})


const isShowingPanel = ref(false)

if (process.client) {
    /* Verify the URL (location), for security reasons. */
    const myLocation = document.location
    console.log('MY LOCATION', myLocation)

    /* Set location hash. */
    const hash = myLocation.hash // #/3f080076-d30b-4d32-b51a-120ae63f6905
    console.log('HASH', hash)

    /* Set location hostname. */
    const hostname = myLocation.hostname // localhost
    console.log('HOSTNAME', hostname)

    /* Detect all mirrors. */
    // if (hostname === 'nexaexchange.com') {
    //     window.location.replace('https://app.nexa.exchange') // NOTE: We have no history added here.
    //     // FIXME: Be sure to attach the "original" path or hash!!
    // }
}

const togglePanel = () => {
    isShowingPanel.value = !isShowingPanel.value
}

const toggleMenu = () => {
    isShowingPanel.value = !isShowingPanel.value
}

// const openPanel = () => {
//     isShowingPanel.value = true
// }
</script>

<template>
    <main class="h-screen overflow-hidden flex flex-col justify-between bg-gradient-to-r from-indigo-900 to-gray-900">
        <Header
            class="border-b-2 border-gray-100 z-20"
            @togglePanel="togglePanel"
        />

        <slot />
    </main>

    <SidePanel
        v-if="isShowingPanel"
        @toggleMenu="toggleMenu"
    />
</template>

<style>
/* global window */
.main-body::-webkit-scrollbar {
    /* display: none; */
    width: 4px;
    height: 8px;
    background-color: #00A774; /* or add it to the track */
}
.main-body::-webkit-scrollbar-thumb {
    background: #8dc351;
}
.main-body {
    overflow-x: hidden; /* hide horizontal scrollbar */
}
</style>
