<script setup lang="ts">
/* Import modules. */
import numeral from 'numeral'

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'

/* Initialize System. */
const System = useSystemStore()

const usd = ref(null)

/* Initialize flags.*/
const isShowingMobileMenu = ref(false)

/* Initialize emits. */
const emit = defineEmits(['toggleMenu', 'toggleHelp'])

const usdDisplay = computed(() => {
    if (!System.usd) {
        return '$0.00'
    }

    return numeral(System.usd).format('$0,00.00')
})

const openMenu = () => {
    emit('toggleMenu')
}

const openHelp = () => {
    emit('toggleHelp')
}

onMounted(() => {
    // updateTicker()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <header class="bg-gradient-to-b from-gray-900 to-gray-700">
        <nav class="mx-auto flex items-center justify-between gap-x-6 px-6 py-1 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <NuxtLink to="/" class="-m-1.5 p-1.5 flex flex-row items-center gap-3">
                    <span class="sr-only">Exchange</span>

                    <img class="h-8 w-auto" src="@/assets/logo.png" alt="" />

                    <h1 class="hidden sm:block text-2xl text-gray-200 font-thin tracking-tight">
                        Nexa Exchange
                    </h1>
                </NuxtLink>
            </div>

            <nav class="hidden lg:flex lg:gap-x-12">
                <NuxtLink to="/" class="text-2xl font-medium text-gray-100 tracking-widest">
                    DEX
                </NuxtLink>

                <NuxtLink to="/cex" class="text-2xl font-medium text-gray-100 tracking-widest">
                    CEX
                </NuxtLink>

                <button @click="openHelp" class="text-2xl font-medium text-gray-100 tracking-widest">
                    Help?
                </button>
            </nav>

            <div class="flex flex-1 items-center justify-end gap-x-6">
                <NuxtLink to="https://nexa.exchange/markets" target="_blank" class="flex flex-row items-center font-medium gap-2">
                    <span class="mt-1 block text-gray-200 text-sm">
                        mNEXA/USD
                    </span>

                    <span class="text-amber-300 text-2xl sm:text-3xl">
                        {{usdDisplay}}
                    </span>
                </NuxtLink>
            </div>

            <div class="flex">
                <button @click="openMenu" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Open main menu</span>

                    <svg class="w-10 h-auto text-gray-100" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>

        <!-- Mobile menu, show/hide based on menu open state. -->
        <div v-if="isShowingMobileMenu" class="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-10"></div>

            <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center gap-x-6">
                    <a href="javascript://" class="-m-1.5 p-1.5">
                        <span class="sr-only">Exchange</span>

                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>

                    <a
                        href="javascript://"
                        class="ml-auto rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign up
                    </a>

                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Close menu</span>

                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a href="javascript://" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Product
                            </a>

                            <a href="javascript://" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Features
                            </a>

                            <a href="javascript://" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Marketplace
                            </a>

                            <a href="javascript://" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Company
                            </a>
                        </div>

                        <div class="py-6">
                            <a href="javascript://" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
