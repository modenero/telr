import React, { useState } from 'react'

import {
  Button,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import GiftCard from '../components/GiftCard'

import QuickAccess from '../components/QuickAccess'

const SpendScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

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
