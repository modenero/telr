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

import { decodeAddress } from 'nexajs'

const PERSISTENCE_KEY = 'TELR_PROFILE'

const ProfileScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark'

    // const [isReady, setIsReady] = React.useState(false)
    const [isReady, setIsReady] = React.useState(__DEV__ ? false : true)
    const [state, setState] = React.useState()

    const [mnemonic, setMnemonic] = useState('')

    const saveMnemonic = () => {
        console.log('Saving...', mnemonic)

        const newState = {
            ...state,
            mnemonic,
        }

        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(newState))
    }

    const testAddr = 'nexa:nqtsq5g5qffexn067uqxkysltqq0uhrrr6fqy2geavzpy2fk'

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

    /* Block UI display until page is fully loaded. */
    if (!isReady) {
        // TODO Add an activity indicator while the page is loading...
        // return <ActivityIndicator />
        return null
    }

    return (
        <View className="h-full flex justify-between items-center bg-gray-900">
            <View className="w-full">
                <View className="flex flex-row">
                    <Button
                        title="Wallet"
                        onPress={() => navigation.navigate('Telr')}
                    />

                    <Button
                        title="Security"
                        onPress={() => navigation.navigate('Telr')}
                    />

                </View>

                <View className="w-full bg-gray-100">
                    <Text className="text-3xl text-gray-700 font-medium">
                        Your TΞLR Profile
                    </Text>

                    <Text className="text-3xl text-gray-700 font-medium">
                        {mnemonic}
                    </Text>
                </View>
            </View>

            <View>
                <Text>
                    Mnemonic (Seed) Phrase
                </Text>

                <TextInput
                    className="bg-rose-500"
                    style={{height: 40}}
                    placeholder="Enter your mnemonic words here"
                    onChangeText={userInput => setMnemonic(userInput)}
                    defaultValue={mnemonic}
                />

                <Button
                    title="Save my mnemonic"
                    onPress={saveMnemonic}
                />
            </View>

            <View className="py-10">
                <Text className="py-3 text-xl font-medium">NexaJS Test: Address Decoding</Text>
                <Text>{testAddr.slice(0,16) + ' ... ' + testAddr.slice(-16)}</Text>
                <Text>{decodeAddress(testAddr).prefix}</Text>
                <Text>{decodeAddress(testAddr).type}</Text>
                <Text className="text-xs">{decodeAddress(testAddr).hash}</Text>
            </View>

        </View>
    )
}

export default ProfileScreen
