import React, { useEffect, useState } from 'react'

import {
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

import numeral from 'numeral'

import GiftCard from '../components/GiftCard'

import QuickAccess from '../components/QuickAccess'

import scrypt from 'scrypt-js'

/**
 * Unicode String to Typed Array
 *
 * Converts a Unicode string to a typed array.
 *
 * NOTE: This serves as a replacement for `<string>.normalize('NFKC')`.
 */
const unicodeStringToTypedArray = (s) => {
    const escstr = encodeURIComponent(s)

    const binstr = escstr.replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1)
    })

    const ua = new Uint8Array(binstr.length)

    Array.prototype.forEach.call(binstr, function (ch, i) {
        ua[i] = ch.charCodeAt(0)
    })

    /* Return Unicode array. */
    return ua
}

const SpendScreen = ({ navigation }) => {
    const [scryptProgress, setScryptProgress] = useState('0.0')
    const [otherProgress, setOtherProgress] = useState('0.0')

    const isDarkMode = useColorScheme() === 'dark'

    useEffect(() => {
        setTimeout(() => {
            setOtherProgress(parseInt(otherProgress) + 1.0)
        }, 1000)
    }, [otherProgress])

    /**
     * Generate Seed
     */
    const generateSeed = async () => {
        console.log('GENERATING NEW SEED...')

        /* Set email. */
        const iEmail = 'guest@telr.app'
        console.log('INPUT EMAIL', iEmail)

        /* Generate "random" password. */
        // const iPassword = Math.random()
        //     .toString(36)
        //     .slice(2) +
        // Math.random()
        //     .toString(36)
        //     .toUpperCase()
        //     .slice(2)
        const iPassword = 'Password1'
        console.log('INPUT PASSWORD', iPassword)

        /* Validate email. */
        // if (!this.isValidEmail()) {
        //     this.toast(['Oops!', 'Invalid email, please try again', 'error'])
        //     return false
        // }

        /* Validate password. */
        // TODO: Improve "strong" password validation.
        // if (!this.password) {
        //     this.toast(['Oops!', 'Invalid password, please try again', 'error'])
        //     return false
        // }

        /* Disable sign in button. */
        // this.canSignIn = false

        // FIXME: We MUST check and update system.authHashes, if necessary.

        /* Set password. */
        const password = unicodeStringToTypedArray(iPassword)
        console.log('PASSWORD', password)

        /* Set salt (email address). */
        const salt = unicodeStringToTypedArray(iEmail)
        console.log('SALT', salt)

        /* Set CPU (memory) cost. */
        // NOTE: increasing this increases the overall difficulty.
        // TODO: Test params on mobile devices (scale back, if necessary).
        const N = 16384 // 2^14 (original recommendation)
        // const N = 32768 // 2^15 (safe recommendation)
        // const N = 65536 // 2^16 (JS-native recommendation)
        // const N = 1048576 // 2^20 (optimal recommendation)

        /* Set block size. */
        // NOTE: Increasing this increases the dependency on memory
        //       latency and bandwidth.
        const r = 8

        /* Set parallelization cost. */
        // NOTE: Increasing this increases the dependency on
        //       multi-processing.
        const p = 1

        /* Set derived key length (in bytes). */
        const dkLen = 32

// console.log('STARTING SCRIPT');
        /* Compute master seed. */
        console.log('made it here!!');

        try {
            const masterSeed = await scrypt
                .scrypt(password, salt, N, r, p, dkLen, (_status) => {
                    const progress = numeral(_status).format('0.0%')
                    console.log('STATUS', progress)

                    setScryptProgress(progress)
                })
                // .catch(err => console.error(err))
            console.log('MASTER SEED', masterSeed)
        } catch (err) {
            console.error(err)
        }
// console.log('ENDING SCRIPT');

        /* Update master seed. */
        // this.updateMasterSeed(masterSeed)

        /* Update email address. */
        // this.updateEmail(this.email)

        /* Set nickname. */
        // const nickname = this.email.slice(0, this.email.indexOf('@'))

        /* Update nickname. */
        // this.updateNickname(nickname)

        /* Initialize wallet. */
        // this.initWallet()

        /* Set (current receiving) address. */
        // const address = this.getAddress
        // console.log('ADDRESS', address)

        /* Enable sign screen. */
        // this.isSkipping = false

        /* Enable sign in button. */
        // this.canSignIn = true

        /* Set target. */
        // const target = this.getApiProvider + '/profiles'

        // const msg = {
        //     action: 'SIGNIN_EMAIL',
        //     email: this.email,
        // }

        /* Calculate auth signature. */
        // const signedMessage = this.getSignedMessage(JSON.stringify(msg))
        // console.log('SIGNED MESSAGE', signedMessage)

        // superagent
        //     .post(target)
        //     .send(signedMessage)
        //     .end((err, res) => {
        //         if (err) {
        //             console.error(err) // eslint-disable-line no-console
        //
        //             /* Report error. */
        //             return this.report(err)
        //         }
        //
        //         console.info('Sign-in (response):', res) // eslint-disable-line no-console
        //     })

        return true
    }

    return (
        <View className="h-full flex justify-center items-center bg-gray-900">
            <View>
                <Text className="text-3xl text-gray-300 font-medium">
                    Spend Your Crypto
                </Text>
            </View>

            <View className="h-20 my-3 px-3">
                <ScrollView
                    className="my-3 px-3"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    height={20}
                >
                    <QuickAccess
                        name="Cool #1"
                        balance="BCH"
                        onPress={() => navigation.navigate('Grow')}
                    />

                    <QuickAccess
                        name="Awesome #2"
                        balance="NEXA"
                        onPress={() => navigation.navigate('Grow')}
                    />

                    <QuickAccess
                        name="Nice #3"
                        balance="NEXA"
                        onPress={() => navigation.navigate('Grow')}
                    />
                </ScrollView>
            </View>

            <Pressable
                onPress={generateSeed}
                className="px-3 py-2 bg-rose-500 border-4 border-rose-700 rounded-lg"
            >
                <Text className="text-xl text-rose-50 font-medium">
                    Generate Seed
                </Text>
            </Pressable>

            <Text className="text-2xl font-bold text-yellow-400">
                {scryptProgress}
            </Text>
            <Text className="text-2xl font-bold text-yellow-400">
                {otherProgress}
            </Text>

            <ScrollView className="px-3 w-full flex-1 flex-col">
                <GiftCard
                    name="Satoshi's Pub"
                    balance="$50"
                />

                <GiftCard
                    name="Amazon"
                    balance="$100"
                />

                <GiftCard
                    name="Cheescake Factory"
                    balance="$25"
                />

                <GiftCard
                    name="Nordstom Rack"
                    balance="$200"
                />
            </ScrollView>
        </View>
    )
}

export default SpendScreen
