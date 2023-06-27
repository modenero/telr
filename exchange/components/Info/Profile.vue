<script setup>


/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'
import { useSystemStore } from '@/stores/system'
const Profile = useProfileStore()
const System = useSystemStore()

const isShowingBadges = ref(false)

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })

</script>

<template>
    <main class="w-full sm:w-screen flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="flex flex-row">
                <svg class="w-20 h-20 mx-auto" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"></path>
                </svg>

                <img class="mx-auto h-20 w-auto" src="~/assets/icon.png" alt="Wally Dice">
            </div>

            <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in with NexID
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <section class="space-y-6" action="javascript://" method="POST">
                <div>
                    <div class="flex items-center justify-between">
                        <div class="text-sm">
                            <a href="http://wallywallet.org/" target="_blank" class="text-base font-medium text-indigo-600 hover:text-indigo-500">
                                Need a NexID wallet?
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <button disabled class="py-5 flex w-full justify-center rounded-md bg-indigo-300 cursor-not-allowed px-3 py-3 text-2xl sm:text-3xl font-medium leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Open NexID Wallet
                    </button>
                </div>
            </section>

        </div>

        <p class="mt-5 text-xs text-center text-white">
            Placing some hidden text here to fix the width/spacing issues on this Screen.
        </p>

        <section v-if="isShowingBadges" class="p-5 bg-gray-900 rounded-lg gap-4 space-x-2 space-y-2">
            <span class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                Deposit
            </span>

            <span class="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">
                Sign-in
            </span>

            <span class="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20">
                Play
            </span>

            <span class="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                Guppy
            </span>

            <span class="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
                Lobster
            </span>

            <span class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30">
                Shark
            </span>

            <span class="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-400/30">
                Autoplay
            </span>

            <span class="inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-400 ring-1 ring-inset ring-pink-400/20">
                Maxed
            </span>
        </section>


    </main>
</template>
