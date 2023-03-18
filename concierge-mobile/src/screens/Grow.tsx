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

const GrowScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View className="h-full flex justify-center items-center bg-gray-900">
            <View>
                <Text className="text-3xl text-gray-300 font-medium">
                    Grow Your Crypto
                </Text>
            </View>

            <View>
                <Button
                    title="Go to Spend"
                    onPress={() => navigation.navigate('Spend')}
                />
            </View>

            <ScrollView className="px-3 w-full flex-1 flex-col">
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
