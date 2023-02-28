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

const SpendScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View className="h-full flex justify-center items-center bg-gray-900">
            <View>
                <Text className="text-3xl text-gray-300 font-medium">
                    Spend Your Crypto
                </Text>
            </View>

            <Button
                title="Go to Grow"
                onPress={() => navigation.navigate('Grow')}
            />
        </View>
    )
}

export default SpendScreen
