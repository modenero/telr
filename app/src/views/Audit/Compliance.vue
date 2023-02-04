<script setup>
/* Import modules. */
import { ref } from 'vue'

const blank = ref(null)
</script>

<template>
    <main>
        <div class="relative pb-8">
            <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>

            <div class="relative flex items-start space-x-3">
                <div>
                    <div class="relative px-1">
                        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                            <!-- Heroicon name: mini/tag -->
                            <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="min-w-0 flex-1 py-0">
                    <div class="text-sm leading-8 text-gray-500">
                        <span class="mr-0.5">
                            <a href="javascript://" class="font-medium text-gray-900">
                                Compliance Agent
                            </a>

                            added tags
                        </span>

                        <span class="mr-0.5">
                            <a href="javascript://" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                <span class="absolute flex flex-shrink-0 items-center justify-center">
                                    <span class="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true"></span>
                                </span>

                                <span class="ml-3.5 font-medium text-gray-900">
                                    OFAC
                                </span>
                            </a>

                            <a href="javascript://" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                <span class="absolute flex flex-shrink-0 items-center justify-center">
                                    <span class="h-1.5 w-1.5 rounded-full bg-green-600" aria-hidden="true"></span>
                                </span>

                                <span class="ml-3.5 font-medium text-gray-900">
                                    FinCEN
                                </span>
                            </a>
                        </span>

                        <p class="-mt-0.5 text-sm text-gray-500">
                            2 minutes ago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
