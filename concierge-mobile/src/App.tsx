/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import QrCode from './assets/svg/QrCode'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'

// function TelrScreen({ navigation }) {
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

function BottomMenu() {
    const navigation = useNavigation()

    return (
        <View className="h-16 py-1 px-3 flex flex-row justify-around gap-x-5 bg-rose-900 border-t-2 border-rose-200">
            <Pressable
                onPress={() => navigation.navigate('Wallet')}
                className="h-full px-1 flex justify-center bg-yellow-500 border border-yellow-700 rounded-lg"
            >
                <Text className="text-xl text-gray-100 font-medium">
                    Wallet
                </Text>
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('Portfolio')}
                className="h-full px-1 flex justify-center bg-yellow-500 border border-yellow-700 rounded-lg"
            >
                <Text className="text-xl text-gray-100 font-medium">
                    Portfolio
                </Text>
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('Telr')}
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
    )
}

function WalletScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text>Wallet Screen</Text>
            </View>

            <Button
                title="Go to TELR"
                onPress={() => navigation.navigate('Telr')}
            />
        </View>
    )
}

function PortfolioScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text>Portfolio Screen</Text>
            </View>

            <Button
                title="Go to TELR"
                onPress={() => navigation.navigate('Telr')}
            />
        </View>
    )
}

function ExploreScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text>Explore Screen</Text>
            </View>

            <Button
                title="Go to TELR"
                onPress={() => navigation.navigate('Telr')}
            />
        </View>
    )
}

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text>Profile Screen</Text>
            </View>

            <Button
                title="Go to TELR"
                onPress={() => navigation.navigate('Telr')}
            />
        </View>
    )
}

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const label =
                    options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        key={options.tabBarTestID}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        className="-mt-6 w-20 h-18 px-1 flex justify-center items-center bg-indigo-500 border-2 border-indigo-700 rounded-lg"
                    >
                        <Text
                            className="text-2xl text-gray-100 font-medium"
                            style={{ color: isFocused ? '#673ab7' : '#222' }}
                        >
                            {label}
                        </Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    const onPressFunction = () => {
        Alert('show TELR menu')
    }

    return (
        <NavigationContainer>
            <SafeAreaView className="h-screen flex flex-col justify-between bg-rose-700">
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />

                <Tab.Navigator
                    initialRouteName="Telr"
                    tabBar={ props => <MyTabBar {...props} /> }
                >
                    <Tab.Screen
                        name="Telr"
                        component={TelrScreen}
                        options={{ title: 'TΞLR' }}
                    />

                    <Tab.Screen
                        name="Wallet"
                        component={WalletScreen}
                        options={{ title: 'Wallet' }}
                    />

                    <Tab.Screen
                        name="Portfolio"
                        component={PortfolioScreen}
                        options={{ title: 'Portfolio' }}
                    />

                    <Tab.Screen
                        name="Explore"
                        component={ExploreScreen}
                        options={{ title: 'Explore' }}
                    />

                    <Tab.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{ title: 'Profile' }}
                    />
                </Tab.Navigator>

                {/*<BottomMenu />*/}
            </SafeAreaView>
        </NavigationContainer>
    )
}

export default App
