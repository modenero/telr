<script setup>
import numeral from 'numeral'
import QrScanner from 'qr-scanner'

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
import { useWalletStore } from '@/stores/wallet'
const System = useSystemStore()
const Wallet = useWalletStore()


const amount = ref(null)
const receiver = ref(null)
const currency = ref(null)
const satoshis = ref(null)

const video = ref(null)
const scanner = ref(null)
const cameraError = ref(null)

const isShowingVideoPreview = ref('hidden')


watch(() => amount.value, (_amount) => {
    // console.log('AMOUNT CHANGED', _amount)

    /* Convert to satoshis. */
    // satoshis.value = parseInt(_amount / System._ticker.quote?.USD?.price * 100)
    satoshis.value = parseInt(_amount * 100)
})

const openScanner = () => {
    /* Start scanner. */
    startScanner()
}

const setReceiver = (_result) => {
    // console.log('SET RECEIVER', _result)

    /* Set (local) receiver. */
    receiver.value = _result

    /* Set (Wallet) receiver. */
    // Wallet.setReceiver(_result)

    /* Hide video preview. */
    isShowingVideoPreview.value = 'hidden'

    /* Validate scanner. */
    if (scanner.value) {
        /* Cleanup scanner. */
        scanner.value.destroy()
        scanner.value = null
    }
}

/**
 * Start Scanner
 *
 * NOTE: This DOES NOT work on any of the Android devices tested.
 *       However, it DOES work well on all iOS devices tested.
 */
const startScanner = async () => {
    if (scanner.value) {
        scanner.value.destroy()
        scanner.value = null

        isShowingVideoPreview.value = 'hidden'

        return
    }

    try {
        navigator.getUserMedia =
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia

        if (!navigator.mediaDevices.getUserMedia && !navigator.getUserMedia) {
            cameraError.value = true
        } else {
            /* Initialize video element. */
            video.value = document.getElementById('video-display')

            /* Enable video display. */
            isShowingVideoPreview.value = 'flex w-full mt-5 bg-gray-100 border-4 border-gray-300 p-2 rounded-xl z-10'

            /* Start scanner. */
            scanner.value = new QrScanner(video.value, (_data) => {
                // console.log('SCANNER DATA', _data)

                // FIXME: Build a new link parser
                const result = _data
                // const result = parseLink(_data)

                /* Validate (scanner) result. */
                if (result) {
                    setReceiver(result)
                }
            })

            /* Start scanner. */
            await scanner.value.start()
        }
    } catch (err) {
        console.error(err) // eslint-disable-line no-console

        cameraError.value = true

        /* Bugsnag alert. */
        throw new Error(err)
    }
}

const send = async () => {
    if (!receiver.value) {
        return alert('Enter a destination address.')
    }

    if (!satoshis.value) {
        return alert('Enter an amount to send.')
    }

    const txidem = await Wallet.transfer(receiver.value, satoshis.value)
    console.log('TXIDEM', txidem)

    /* Validate transaction idem. */
    if (txidem) {
        /* Reset user inputs. */
        amount.value = null
        receiver.value = null

        // TODO Add "proper" notification system.
        alert(`Transaction sent successfully!\n\n${txidem}`)
    }
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
    <section class="mt-5 flex flex-row gap-1">
        <input
            class="w-full px-3 py-1 text-xl sm:text-2xl bg-yellow-200 border-2 border-yellow-400 rounded-md shadow"
            type="text"
            v-model="receiver"
            placeholder="Enter a Crypto address"
        />

        <div @click="openScanner">
            <svg class="cursor-pointer w-12 h-12 hover:text-red-500 hover:cursor-pointer" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"></path>
            </svg>
        </div>
    </section>

    <div class="px-3">
        <span class="sm:hidden text-xs italic">
            Send to: BTC, ETH, BSC, TRX, MATIC and more..
        </span>
        <span class="hidden text-xs italic">
            Send to: Bitcoin, Ethereum, Binance, Tron, Polygon and more..
        </span>
    </div>

    <video
        class="my-5"
        :class="isShowingVideoPreview"
        id="video-display"
        autoplay
        playsinline
    />

    <section class="my-5 flex flex-col">
        <input
            class="w-full px-3 py-1 text-xl sm:text-2xl bg-yellow-200 border-2 border-yellow-400 rounded-md shadow"
            type="number"
            v-model="amount"
            placeholder="Enter a (NEXA) amount"
        />

        <h4 v-if="satoshis > 0" class="mt-1 ml-3 text-sm text-gray-500 font-medium">
            = {{numeral(satoshis / 100).format('0,0')}} NEXA
        </h4>
    </section>

    <div
        @click="send"
        class="cursor-pointer my-5 block px-3 py-1 text-2xl font-medium bg-blue-200 border-2 border-blue-400 rounded-md shadow hover:bg-blue-300"
    >
        Send NEXA
    </div>

</template>
