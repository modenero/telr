<script setup lang="ts">

const isShowingPanel = ref(false)

/* Verify the URL (location), for security reasons. */
const myLocation = document.location
// console.log('MY LOCATION', myLocation)

/* Set location hash. */
const hash = myLocation.hash // #/3f080076-d30b-4d32-b51a-120ae63f6905

/* Set location hostname. */
const hostname = myLocation.hostname // localhost

/* Detect all mirrors. */
if (hostname === 'nexaexchange.com') {
    window.location.replace('https://app.nexa.exchange') // NOTE: We have no history added here.
    // FIXME: Be sure to attach the "original" path or hash!!
}
</script>

<template>
    <main class="h-screen overflow-hidden flex flex-col justify-between bg-gradient-to-r from-indigo-900 to-gray-900">
        <Header class="border-b-2 border-gray-100 z-20" />

        <slot />
    </main>

    <SidePanel v-if="isShowingPanel" />
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
