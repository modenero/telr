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

import { decodeAddress } from 'nexajs'

const ProfileScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const testAddr = 'nexa:nqtsq5g5qffexn067uqxkysltqq0uhrrr6fqy2geavzpy2fk'

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
                </View>
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
