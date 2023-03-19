import React, { useEffect, useState } from 'react'

import {
    Dimensions,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import AsyncStorage from '@react-native-async-storage/async-storage'

/* Import WebAssembly for NexaJS. */
import 'react-native-wasm'
import { sendUtxo } from 'nexajs'

import GiftCard from '../components/GiftCard'
import WalletHome from './wallet'
import WalletReceive from './wallet/receive'
import WalletSend from './wallet/send'

const PERSISTENCE_KEY = 'TELR_SPEND'

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()

const SpendScreen = ({ navigation }) => {
    const [isReady, setIsReady] = React.useState(__DEV__ ? false : true)
    const [state, setState] = React.useState()

    const isDarkMode = useColorScheme() === 'dark'

    const WalletStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={WalletHome} />
                <Stack.Screen name="Receive" component={WalletReceive} />
                <Stack.Screen name="Send" component={WalletSend} />
            </Stack.Navigator>
        )
    }

    // const Wallet = () => {
    //     return <MyWallet />
    // }
    //
    const Vault = () => {
        return (
            <View className="h-full flex justify-center items-center bg-gray-900">
                <View>
                    <Text className="text-3xl text-gray-300 font-medium">
                        Spend Your Crypto
                    </Text>
                </View>

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

    const testSendUtxo = async () => {
        const TEST_MNEMONIC = 'bacon mind chronic bean luxury endless ostrich festival bicycle dragon worth balcony'
        const NEXA_TEST_ADDRESS = 'nexa:nqtsq5g57qupnngwws0rlvsevggu6zxqc0tmk7d3v5ulpfh6'

        /* Build parameters. */
        const params = {
            mnemonic: TEST_MNEMONIC,
            receiver: NEXA_TEST_ADDRESS,
        }

        /* Send UTXO request. */
        const response = await sendUtxo(params)
        console.log('Send UTXO (response):', response)


        try {
            const txResult = JSON.parse(response)
            console.log('TX RESULT', txResult)

            if (txResult.error) {
                return console.error(txResult.message)
            }

            expect(txResult.result).to.have.length(64)
        } catch (err) {
            console.error(err)
        }
    }

    const WalletTemp = () => {
        return (
            <>
                <Text>Wallet Temp</Text>

                <Pressable
                    className="bg-rose-500 rounded-xl"
                    onPress={testSendUtxo}
                >
                    <Text class="text-3xl font-medium">Send UTXO</Text>
                </Pressable>
            </>
        )
    }

    return (
        <View className="h-full flex">
            <Tab.Navigator
                className="w-full"
                initialLayout={{
                    width: Dimensions.get('window').width
                }}
                initialRouteName="Wallet"
            >
                <Tab.Screen
                    name="Wallet"
                    component={WalletTemp}
                    options={{
                        tabBarLabel: 'My Wallet',
                    }}
                />

                <Tab.Screen
                    name="Vault"
                    component={Vault}
                    options={{
                        tabBarLabel: 'My Vault',
                    }}
                />
            </Tab.Navigator>
        </View>
    )
}

export default SpendScreen
