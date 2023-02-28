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

const ExplorerScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View className="h-full flex justify-center items-center bg-gray-900">
            <View>
                <Text className="text-3xl text-gray-100 font-medium">
                    Web3 / Crypto Explorer
                </Text>
            </View>

            <Button
                title="Go to TΞLR"
                onPress={() => navigation.navigate('Telr')}
            />
        </View>
    )
}

export default ExplorerScreen
