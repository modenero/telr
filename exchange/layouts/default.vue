<script setup lang="ts">
//
</script>

<template>
    <main class="h-screen overflow-hidden flex flex-col justify-between">
        <Header class="border-b-2 border-gray-100 z-50" />

        <slot />
    </main>
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
