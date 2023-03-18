import React, { useState } from 'react'

import {
  Button,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { decodeAddress } from 'nexajs'

import QuickAccess from '../components/QuickAccess'

const PERSISTENCE_KEY = 'TELR_PROFILE'

const Tab = createMaterialTopTabNavigator()

const ProfileScreen = ({ navigation }) => {
    const [isReady, setIsReady] = React.useState(__DEV__ ? false : true)
    const [state, setState] = React.useState()

    const [mnemonic, setMnemonic] = useState('')
    const [scryptProgress, setScryptProgress] = useState('0.0')

    const isDarkMode = useColorScheme() === 'dark'

    const testAddr = 'nexa:nqtsq5g5qffexn067uqxkysltqq0uhrrr6fqy2geavzpy2fk'

    const saveMnemonic = () => {
        console.log('Saving...', mnemonic)

        const newState = {
            ...state,
            mnemonic,
        }

        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(newState))
    }

    React.useEffect(() => {
        const restoreState = async () => {
            try {
                // Only restore state if there's no deep link
                const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY)
                const state = savedStateString ? JSON.parse(savedStateString) : undefined

                if (state !== undefined) {
                    setState(state)

                    if (state.mnemonic) {
                        setMnemonic(state.mnemonic)
                    }
                }
            } finally {
                setIsReady(true)
            }
        }

        if (!isReady) {
            restoreState()
        }
    }, [isReady])

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


    const ProfileMain = () => {
        return (
            <Text className="text-4xl text-yellow-500 font-bold">main screen</Text>
        )
    }

    const ProfileSecurity = () => {
        return (
            <Text className="text-4xl text-yellow-500 font-bold">security screen</Text>
        )
        return (
            <>
                <View className="py-10">
                    <Text className="py-3 text-xl font-medium">NexaJS Test: Address Decoding</Text>
                    <Text>{testAddr.slice(0,16) + ' ... ' + testAddr.slice(-16)}</Text>
                    <Text>{decodeAddress(testAddr).prefix}</Text>
                    <Text>{decodeAddress(testAddr).type}</Text>
                    <Text className="text-xs">{decodeAddress(testAddr).hash}</Text>
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
            </>
        )
    }

    /* Block UI display until page is fully loaded. */
    if (!isReady) {
        // TODO Add an activity indicator while the page is loading...
        // return <ActivityIndicator />
        return null
    }

    return (
        <View className="h-full flex justify-between items-center bg-gray-900">

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

            <Tab.Navigator
            initialRouteName="ProfileMain"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}>
                <Tab.Screen name="ProfileMain" component={ProfileMain} />
                <Tab.Screen name="ProfileSecurity" component={ProfileSecurity} />
            </Tab.Navigator>

            <Text className="text-4xl text-yellow-500 font-bold">more to come</Text>
        </View>
    )
}

export default ProfileScreen
