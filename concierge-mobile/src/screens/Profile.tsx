import React, { useRef, useState } from 'react'

import {
  Button,
  Dimensions,
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

import numeral from 'numeral'

import scrypt from 'scrypt-js'

import unicodeStringToTypedArray from '../libs/unicodeStringToTypedArray.js'

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
        const N1  = 16384   // 2^14 (original recommendation)
        const N2  = 32768   // 2^15 (safe recommendation)
        const N4  = 65536   // 2^16 (JS-native recommendation)
        const N64 = 1048576 // 2^20 (optimal recommendation)

        /* Initialize (N) value. */
        let N

        /* Handle OS detection. */
        // NOTE: iOS devices are approx (3x) faster than Android.
        if (Platform.OS === 'ios') {
            N = N2 // ~?? iOS / ~?? Android
        } else {
            N = N1 // ~30s iOS / ~90s Android
        }

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
    }


    const Settings = () => {
        return (
            <ScrollView>
                <View className="w-full">

                    <View className="w-full p-3 bg-gray-100">
                        <Text className="text-3xl text-gray-700 font-medium">
                            Welcome back Anon!
                        </Text>

                    </View>

                </View>

                <View className="mx-1 my-3 p-3 bg-gray-100 border-2 border-rose-700 rounded-xl">
                    <Text className="text-base text-gray-400 font-medium uppercase">
                        Mnemonic (Seed) Phrase
                    </Text>

                    <TextInput
                        className="my-3 px-3 text-2xl text-indigo-900 font-medium leading-9 bg-indigo-300 border-2 border-indigo-500 rounded-xl"
                        placeholder="Enter your mnemonic words here"
                        inputMode={'text'}
                        multiline={true}
                        numberOfLines={4}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        autoComplete={'off'}
                        onChangeText={userInput => setMnemonic(userInput)}
                        defaultValue={mnemonic}
                    />

                    <Pressable
                        className="px-3 py-2 w-full bg-blue-600 border-2 border-blue-800 rounded-xl"
                        onPress={saveMnemonic}
                    >
                        <Text className="text-3xl text-blue-50 font-medium">
                            Save Mnemonic
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        )
    }

    const Security = () => {
        return (
            <ScrollView>
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
            </ScrollView>
        )
    }

    /* Block UI display until page is fully loaded. */
    if (!isReady) {
        // TODO Add an activity indicator while the page is loading...
        // return <ActivityIndicator />
        return null
    }

    return (
        <View className="h-full">
            <Tab.Navigator
                className="w-full"
                initialLayout={{
                    width: Dimensions.get('window').width
                }}
                initialRouteName="Settings"
            >
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        tabBarLabel: 'My Settings',
                    }}
                />

                <Tab.Screen
                    name="Security"
                    component={Security}
                    options={{
                        tabBarLabel: 'My Security',
                    }}
                />
            </Tab.Navigator>
        </View>
    )
}

export default ProfileScreen
