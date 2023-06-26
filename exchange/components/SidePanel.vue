<script setup lang="ts">
/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

/* Initialize emits. */
const emit = defineEmits(['closePanel'])

const closePanel = () => {
    emit('closePanel')
}


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
    <main class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0"></div>

        <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
                <div @click="closePanel" class="bg-sky-900 opacity-70 absolute inset-0" />
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
                    <div class="pointer-events-auto w-screen max-w-2xl">
                        <form class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div class="flex-1">
                                <!-- Header -->
                                <div class="bg-gray-50 px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between space-x-3">
                                        <div class="space-y-1">
                                            <h2 class="text-2xl font-semibold leading-6 text-gray-900" id="slide-over-title">
                                                My Profile
                                            </h2>

                                            <p class="text-sm text-gray-500">
                                                Get started by filling in the information below to create your new project.
                                            </p>
                                        </div>

                                        <div class="flex h-7 items-center">
                                            <button @click="closePanel" type="button" class="text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Close panel</span>
                                                <svg class="w-10 h-auto" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <PanelMenu :isShowingMenu="true" />
                            </div>

                            <!-- Action buttons -->
                            <div class="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                                <div class="flex justify-end space-x-3">
                                    <button type="button" class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                                    <button
                                        type="submit"
                                        class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
