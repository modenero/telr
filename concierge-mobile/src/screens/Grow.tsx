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

import Platform from '../components/Platform'

import QuickAccess from '../components/QuickAccess'

const GrowScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View className="h-full flex justify-center items-center bg-gray-900">
            <View>
                <Text className="text-3xl text-gray-300 font-medium">
                    Grow Your Crypto
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
                        onPress={() => navigation.navigate('Spend')}
                    />

                    <QuickAccess
                        name="Awesome #2"
                        balance="NEXA"
                        onPress={() => navigation.navigate('Spend')}
                    />

                    <QuickAccess
                        name="Nice #3"
                        balance="NEXA"
                        onPress={() => navigation.navigate('Spend')}
                    />
                </ScrollView>
            </View>

            <ScrollView className="h-full px-3 w-full flex-1 flex-col">
                <Platform
                    name="AnyHedge"
                    balance="BCH"
                />

                <Platform
                    name="Nexa Moon"
                    balance="NEXA"
                />

                <Platform
                    name="AnyHedge"
                    balance="BCH"
                />

                <Platform
                    name="Nexa Moon"
                    balance="NEXA"
                />
            </ScrollView>
        </View>
    )
}

export default GrowScreen
