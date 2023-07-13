<script setup>
import { ref } from 'vue'

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'

/* Initialize System. */
const System = useSystemStore()

defineProps({
    msg: String,
})

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })

const count = ref(0)
</script>

<template>
    <main class="flex flex-col gap-4">
        <p class="px-3 py-2 bg-yellow-100 text-sm border-2 border-yellow-300 rounded-lg shadow-md">
            Take a historical trip through the <span class="font-semibold text-yellow-900">Life of Nexa;</span>
            discovering ALL the pivotal moments that brought us to where we are today.
        </p>

        <ul role="list" class="mt-5 space-y-6">
            <li class="relative flex gap-x-4">
                <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                    <div class="w-px bg-gray-200"></div>
                </div>
                <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                    <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                    <span class="font-medium text-gray-900">BitMart exchange listing</span> May 2023
                </p>
                <time datetime="2023-01-23T10:32" class="flex-none py-0.5 text-xs leading-5 text-gray-500">
                    $12.88 / mNEXA
                </time>
            </li>

            <li class="relative flex gap-x-4">
                <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                    <div class="w-px bg-gray-200"></div>
                </div>
                <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                    <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">
                    MEXC exchange listing</span> Feb 2023
                </p>
                <time datetime="2023-01-23T11:03" class="flex-none py-0.5 text-xs leading-5 text-gray-500">
                    $48.11 / mNEXA
                </time>
            </li>

            <li class="relative flex gap-x-4">
                <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                    <div class="w-px bg-gray-200"></div>
                </div>
                <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                    <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">
                    Txbit exchange listing</span> Oct 2022
                </p>
                <time datetime="2023-01-23T11:24" class="flex-none py-0.5 text-xs leading-5 text-gray-500">
                    $12.71 / mNEXA
                </time>
            </li>

            <li class="relative flex gap-x-4">
                <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                    <div class="w-px bg-gray-200"></div>
                </div>
                <img
                    src="https://i.ibb.co/TY4G064/image.png"
                    alt=""
                    class="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
                />
                <div class="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                    <div class="flex justify-between gap-x-4">
                        <div class="py-0.5 text-xs leading-5 text-gray-500">
                            <span class="font-medium text-gray-900">Exbitron exchange listing</span> Sept 2022
                        </div>
                        <time datetime="2023-01-23T15:56" class="flex-none py-0.5 text-xs leading-5 text-gray-500">
                            $3.29 / mNEXA
                        </time>
                    </div>

                    <p class="text-xs leading-6 text-gray-500">
                        This ended the era of OTC trading on Nexa's chat channels.
                    </p>
                </div>
            </li>

            <li class="relative flex gap-x-4">
                <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                    <div class="w-px bg-gray-200"></div>
                </div>
                <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                    <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">
                    NexaSwap launches</span> Sept 2022
                </p>
                <time datetime="2023-01-24T09:12" class="flex-none py-0.5 text-xs leading-5 text-gray-500">
                    $1.74 / mNEXA
                </time>
            </li>

            <li class="relative flex gap-x-4">
                <div class="absolute left-0 top-0 flex w-6 justify-center h-6">
                    <div class="w-px bg-gray-200"></div>
                </div>
                <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                    <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path
                            fill-rule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                    <span class="font-medium text-gray-900">First trade by Paul Church</span> Aug 2022
                </p>
                <time datetime="2023-01-24T09:20" class="flex-none py-0.5 text-xs leading-5 text-gray-500">
                    $1.00 / mNEXA
                </time>
            </li>
        </ul>

    </main>
</template>
