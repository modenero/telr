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

import AsyncStorage from '@react-native-async-storage/async-storage'

import GiftCard from '../components/GiftCard'

import QuickAccess from '../components/QuickAccess'

const PERSISTENCE_KEY = 'TELR_SPEND'

const Tab = createMaterialTopTabNavigator()

const SpendScreen = ({ navigation }) => {
    const [isReady, setIsReady] = React.useState(__DEV__ ? false : true)
    const [state, setState] = React.useState()

    const isDarkMode = useColorScheme() === 'dark'

    const Wallet = () => {
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
                            name="Cash"
                            balance="BCH"
                            onPress={() => navigation.navigate('Grow')}
                        />

                        <QuickAccess
                            name="Mastercard"
                            balance="NEXA"
                            onPress={() => navigation.navigate('Grow')}
                        />

                        <QuickAccess
                            name="Walmart"
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

    const Vault = () => {
        return (
            <View className="p-3">
                <Text className="text-3xl font-medium">
                    My Vault
                </Text>
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
                    component={Wallet}
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
