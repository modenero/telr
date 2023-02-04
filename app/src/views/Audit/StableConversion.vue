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
                            <!-- Heroicon name: mini/user-circle -->
                            <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="min-w-0 flex-1 py-1.5">
                    <div class="flex text-sm text-gray-500 gap-2">
                        <a href="javascript://" class="font-medium text-gray-900">Stable Conversion</a>
                        assigned
                        <a href="javascript://" class="font-medium text-gray-900">USDT</a>
                    </div>

                    <p class="mt-0.5 text-sm text-gray-500">
                        30 seconds ago
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>
