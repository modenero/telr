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

const GrowScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View className="h-full flex justify-center items-center bg-gray-900">
            <View>
                <Text className="text-3xl font-medium">Grow Your Crypto</Text>
            </View>

            <Button
                title="Go to Save"
                onPress={() => navigation.navigate('Save')}
            />
        </View>
    )
}

export default GrowScreen
