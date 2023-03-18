import React, { useEffect, useState } from 'react'

import {
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import numeral from 'numeral'

import scrypt from 'scrypt-js'

import GiftCard from '../components/GiftCard'

import QuickAccess from '../components/QuickAccess'


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

const PERSISTENCE_KEY = 'TELR_SPEND'

const SpendScreen = ({ navigation }) => {
    const [isReady, setIsReady] = React.useState(__DEV__ ? false : true)
    const [state, setState] = React.useState()

    const isDarkMode = useColorScheme() === 'dark'

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
