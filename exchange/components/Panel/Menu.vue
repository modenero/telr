<script setup>
import { ref } from 'vue'

const props = defineProps({
    isShowingMenu: Boolean,
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'

/* Initialize System. */
const System = useSystemStore()

const emit = defineEmits(['toggleMenu'])

const curTab = ref(null)

const toggleMenu = () => {
    emit('toggleMenu')
}

/* Set default tab. */
curTab.value = 'wallet'

</script>

<template>
    <main v-if="isShowingMenu" class="relative z-10" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0"></div>

        <div class="fixed inset-0 overflow-hidden bg-sky-900">
            <div class="absolute inset-0 overflow-hidden">

            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <!--
                Slide-over panel, show/hide based on slide-over state.

                Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-full"
                    To: "translate-x-0"
                Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-0"
                    To: "translate-x-full"
                -->
                <div class="pointer-events-auto w-full max-w-md">

                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="px-4 py-6 sm:px-6">

                    <div class="flex items-start justify-between">
                        <h2 id="slide-over-heading" class="text-2xl font-semibold leading-6 text-gray-900">
                            Main Menu
                        </h2>

                        <div class="ml-3 flex h-7 items-center">
                            <button @click="toggleMenu" type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
                                <span class="sr-only">Close panel</span>
                                <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    </div>

                    <!-- Main -->
                    <div>
                        <div class="pb-1 sm:pb-6">
                            <div>

                                <section>
                                    <div class="block">
                                        <div class="border-b border-gray-200">
                                            <nav class="-mb-px flex" aria-label="Tabs">
                                                <div @click="curTab = 'wallet'" aria-current="page" class="cursor-pointer w-1/3 border-b-2 py-4 px-1 text-center text-sm font-medium" :class="[{ 'border-indigo-500 text-indigo-600': curTab === 'wallet', 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': curTab !== 'wallet' }]">
                                                    Wallet
                                                </div>

                                                <div @click="curTab = 'profile'" aria-current="page" class="cursor-pointer w-1/3 border-b-2 py-4 px-1 text-center text-sm font-medium" :class="[{ 'border-indigo-500 text-indigo-600': curTab === 'profile', 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': curTab !== 'profile' }]">
                                                    Profile
                                                </div>

                                                <div @click="curTab = 'settings'" aria-current="page" class="cursor-pointer w-1/3 border-b-2 py-4 px-1 text-center text-sm font-medium" :class="[{ 'border-indigo-500 text-indigo-600': curTab === 'settings', 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': curTab !== 'settings' }]">
                                                    Settings
                                                </div>

                                                <!-- <div @click="curTab = 'help'" aria-current="page" class="cursor-pointer w-1/3 border-b-2 py-4 px-1 text-center text-sm font-medium" :class="[{ 'border-indigo-500 text-indigo-600': curTab === 'help', 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': curTab !== 'help' }]">
                                                    Help
                                                </div> -->
                                            </nav>
                                        </div>
                                    </div>
                                </section>


                                <div class="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                                    <MenuProfile v-if="curTab == 'profile'" class="w-full" />
                                    <MenuSettings v-if="curTab == 'settings'" class="w-full" />
                                    <MenuWallet v-if="curTab == 'wallet'" class="w-full" />
                                    <MenuHelp v-if="curTab == 'help'" class="w-full" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </main>
</template>
