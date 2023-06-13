<script setup lang="ts">

const isShowingPanel = ref(false)
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
