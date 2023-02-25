/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react'

import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'

// function Section({children, title}: SectionProps): JSX.Element {
//     const isDarkMode = useColorScheme() === 'dark';
//
//     return (
//         <View style={styles.sectionContainer}>
//             <Text
//                 style={[
//                     styles.sectionTitle,
//                     {
//                         color: isDarkMode ? Colors.white : Colors.black,
//                     },
//                 ]}>
//                 {title}
//             </Text>
//
//             <Text
//                 style={[
//                     styles.sectionDescription,
//                     {
//                         color: isDarkMode ? Colors.light : Colors.dark,
//                     },
//                 ]}>
//                 {children}
//             </Text>
//         </View>
//     )
// }

function App(): JSX.Element {
    const [timesPressed, setTimesPressed] = useState(0)

    let textLog = '';

    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress'
    } else if (timesPressed > 0) {
        textLog = 'onPress'
    }

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    const onPressFunction = () => {
        Alert('show TELR menu')
    }

    return (
        <SafeAreaView className="h-screen flex flex-col justify-between bg-rose-700">
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                className="flex-1"
            >

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
            </ScrollView>

            <View className="h-16 py-1 px-3 flex flex-row justify-around gap-x-5 bg-rose-900 border-t-2 border-rose-200">
                <View className="h-full px-1 flex justify-center bg-yellow-500 border border-yellow-700 rounded-lg">
                    <Text className="text-xl text-gray-100 font-medium">
                        Wallet
                    </Text>
                </View>

                <View className="h-full px-1 flex justify-center bg-yellow-500 border border-yellow-700 rounded-lg">
                    <Text className="text-xl text-gray-100 font-medium">
                        Portfolio
                    </Text>
                </View>

                <Pressable
                    onPress={() => {
                        setTimesPressed(current => current + 1)
                    }}
                    className="-mt-6 w-20 h-18 px-1 flex justify-center items-center bg-indigo-500 border-2 border-indigo-700 rounded-lg"
                >
                    <Text className="text-2xl text-gray-100 font-medium">
                        TΞLR
                    </Text>
                </Pressable>

                <View className="h-full px-1 flex justify-center bg-yellow-500 border border-yellow-700 rounded-lg">
                    <Text className="text-xl text-gray-100 font-medium">
                        Explore
                    </Text>
                </View>

                <View className="h-full px-1 flex justify-center bg-yellow-500 border border-yellow-700 rounded-lg">
                    <Text className="text-xl text-gray-100 font-medium">
                        Profile
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default App
