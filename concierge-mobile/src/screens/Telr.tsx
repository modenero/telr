import React, { useState } from 'react'

import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native'

/* Import assets. */
import QrCode from '../assets/svg/QrCode'

const TelrScreen = ({ navigation }) => {
    const [timesPressed, setTimesPressed] = useState(0)

    let textLog = '';

    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress'
    } else if (timesPressed > 0) {
        textLog = 'onPress'
    }

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            className="flex-1 bg-rose-700"
        >

            <View className="px-3 py-1 flex flex-row justify-between items-center bg-gray-100 border-y-2 border-rose-500 dark:bg-gray-900">
                <View className="">
                    <Text className="text-xs text-gray-400 font-bold uppercase">
                        Network
                    </Text>

                    <View className="flex flex-row">
                        <Text className="text-2xl text-yellow-500 tracking-widest font-bold">
                            Nexa
                        </Text>

                        <View className="w-5 h-7 rotate-180">
                            <Text className="text-3xl text-gray-500 font-bold">^</Text>
                        </View>
                    </View>
                </View>

                <View className="flex flex-row gap-3">
                    <Pressable
                        onPress={() => {
                            setTimesPressed(current => current + 1)
                        }}
                    >
                        <QrCode
                            className="w-10 h-10 text-yellow-700"
                        />
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            setTimesPressed(current => current + 1)
                        }}
                        className="w-10 h-10 flex justify-center items-center bg-gray-700 border-2 border-yellow-300 rounded-full"
                    >
                        <Text className="text-xl text-yellow-300 font-bold">
                            ?
                        </Text>
                    </Pressable>
                </View>
            </View>

            <View className="flex-1 h-48 items-center justify-center bg-gray-100 border-y-2 border-rose-500 dark:bg-gray-900">
                <Text className="text-3xl text-rose-700 dark:text-rose-200 font-medium">
                    TΞLR Concierge
                </Text>

                <Text className="text-xl text-rose-700 dark:text-rose-200 font-medium">
                    Crypto @ Your Service
                </Text>

                <Text className="text-5xl">
                    🛎️
                </Text>
            </View>

            <View className="p-10">
                <Text className="text-3xl text-rose-100 font-bold">
                    {textLog}
                </Text>
            </View>

            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />

        </ScrollView>
    )
}

export default TelrScreen
