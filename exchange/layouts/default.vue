<script setup lang="ts">

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'
import { useSystemStore } from '@/stores/system'
import { useWalletStore } from '@/stores/wallet'
const Profile = useProfileStore()
const System = useSystemStore()
const Wallet = useWalletStore()

onBeforeMount(() => {
    // TODO Move this block to @nexajs/app
    try {
        Profile.$state = JSON.parse(localStorage.getItem('profile'), (key, value) => {
            if (typeof value === 'string' && /^\d+n$/.test(value)) {
                return BigInt(value.slice(0, value.length - 1))
            }
            return value
        })

        System.$state = JSON.parse(localStorage.getItem('system'), (key, value) => {
            if (typeof value === 'string' && /^\d+n$/.test(value)) {
                return BigInt(value.slice(0, value.length - 1))
            }
            return value
        })

        Wallet.$state = JSON.parse(localStorage.getItem('wallet'), (key, value) => {
            if (typeof value === 'string' && /^\d+n$/.test(value)) {
                return BigInt(value.slice(0, value.length - 1))
            }
            return value
        })

        // add additional states here...
    } catch (err) {
        console.error(err)
    }
})

// TODO Move this block to @nexajs/app
watch([Profile.$state, System.$state, Wallet.$state], (_state) => {
    localStorage.setItem('profile',
        JSON.stringify(_state[0], (key, value) =>
            typeof value === 'bigint' ? value.toString() + 'n' : value
        )
    )

    localStorage.setItem('system',
        JSON.stringify(_state[1], (key, value) =>
            typeof value === 'bigint' ? value.toString() + 'n' : value
        )
    )

    localStorage.setItem('wallet',
        JSON.stringify(_state[2], (key, value) =>
            typeof value === 'bigint' ? value.toString() + 'n' : value
        )
    )

    // watch additional states here...
})

const isShowingMenu = ref(false)
const isShowingHelp = ref(false)

if (process.client) {
    /* Verify the URL (location), for security reasons. */
    const myLocation = document.location
    // console.log('MY LOCATION', myLocation)

    /* Set location hash. */
    const hash = myLocation.hash // #/3f080076-d30b-4d32-b51a-120ae63f6905
    // console.log('HASH', hash)

    /* Set location hostname. */
    const hostname = myLocation.hostname // localhost
    // console.log('HOSTNAME', hostname)

    /* Detect all mirrors. */
    if (hostname === 'nexaexchange.com') {
        window.location.replace('https://app.nexa.exchange') // NOTE: We have no history added here.
        // FIXME: Be sure to attach the "original" path or hash!!
    }

    /* Initialize Mixpanel analytics. */
    mixpanel.init(
        '7ade9eb70fb7783c4f8fa0235e435da1',
        { debug: true, track_pageview: true, persistence: 'localStorage' }
    )
}

const toggleMenu = () => {
    isShowingHelp.value = false

    isShowingMenu.value = !isShowingMenu.value
}

const toggleHelp = () => {
    isShowingMenu.value = false

    isShowingHelp.value = !isShowingHelp.value
}

onMounted(async () => {
    /* Initailize system. */
    System.init()

    /* Initialize profile. */
    await Profile.init()

    /* Initialize wallet. */
    Wallet.init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <main class="flex flex-col justify-between bg-gradient-to-r from-indigo-100 to-gray-300">
        <Header
            class="border-b-2 border-gray-100 z-20"
            @toggleMenu="toggleMenu"
            @toggleHelp="toggleHelp"
        />

        <slot />
    </main>

    <PanelMenu
        v-if="isShowingMenu"
        @toggleMenu="toggleMenu"
        :isShowingMenu="isShowingMenu"
    />

    <PanelHelp
        v-if="isShowingHelp"
        @toggleHelp="toggleHelp"
        :isShowingHelp="isShowingHelp"
    />
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
