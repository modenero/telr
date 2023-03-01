<script setup>
/* Import modules. */
import { ref } from 'vue'

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'

/* Initialize Profile store. */
const Profile = useProfileStore()

const apiKey = ref(null)

const saveApiKey = () => {
    console.log('SAVE API KEY', apiKey.value)
    Profile.setApiKey(apiKey.value)

}
</script>

<template>
    <main class="main-body flex-1 my-5 p-3 max-w-5xl mx-auto bg-gradient-to-r from-gray-100 to-gray-200 border-4 border-indigo-500 rounded-xl shadow-md">
        <h1 class="text-4xl font-medium">
            Profile Page
        </h1>

        <p class="mt-3">
            Manage multiple Exchange profiles right from this one portal.
        </p>

        <p class="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quos veritatis ipsam perferendis corrupti soluta in, consectetur vero, similique facilis eligendi provident vel impedit at temporibus id! Alias, molestias porro?
        </p>

        <section class="mx-10 my-5 p-4 rounded-md bg-yellow-50 border-2 border-yellow-500">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                            fill-rule="evenodd"
                            d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-lg font-medium text-yellow-800">
                        Please Note
                    </h3>

                    <div class="mt-2 text-sm text-yellow-700">
                        <p>
                            API keys are ONLY stored "locally" in your web browser's memory.
                            API keys are NEVER sent to ANY remote server.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-3 py-2 flex flex-col gap-4 bg-rose-300 border-2 border-rose-500 rounded-lg">
            <p>
                <br />My API Key: {{apiKey}}
                <br />My Profile Key: {{Profile.apiKey}}

                <input
                    class="w-full text-lg px-3 py-2 border-2 border-gray-200 rounded-lg"
                    type="text"
                    placeholder="Type or paste your API key here"
                    v-model="apiKey"
                />
            </p>

            <button
                class="px-3 py-1 bg-blue-500 border-2 border-blue-700 rounded-lg hover:bg-blue-400"
                @click="saveApiKey"
            >
                <span class="text-xl text-blue-100 font-medium">
                    Save My Key
                </span>
            </button>

        </section>
    </main>
</template>
