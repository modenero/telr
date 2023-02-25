/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'

import {
  Button,
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
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
                        Your Crypto @ Your Service
                    </Text>

                    <Text className="text-5xl">
                        🛎️
                    </Text>
                </View>

            </ScrollView>

            <View className="h-16 py-1 flex flex-row justify-around bg-rose-900 border-t-2 border-rose-200">
                <View className="h-full px-1 flex justify-center bg-yellow-500 rounded-lg">
                    <Text className="text-xl text-gray-100 font-medium">
                        Wallet
                    </Text>
                </View>

                <View className="h-full px-1 flex justify-center bg-yellow-500 rounded-lg">
                    <Text className="text-xl text-gray-100 font-medium">
                        Trade
                    </Text>
                </View>

                <Button title="TΞLR" className="">
                    TELR
                </Button>

                <View className="h-full px-1 flex justify-center bg-yellow-500 rounded-lg">
                    <Text className="text-xl text-gray-100 font-medium">
                        Explore
                    </Text>
                </View>

                <View className="h-full px-1 flex justify-center bg-yellow-500">
                    <Text className="text-xl text-gray-100 font-medium">
                        More...
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default App
