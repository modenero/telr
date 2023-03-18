/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react'

import {
  Button,
  Linking,
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

import AsyncStorage from '@react-native-async-storage/async-storage'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

/* Import bottom tab (navigation) menu. */
import NavMenu from './NavMenu'

/* Import main (navigation) screens. */
import ExplorerScreen from './screens/Explorer'
import GrowScreen from './screens/Grow'
import ProfileScreen from './screens/Profile'
import SpendScreen from './screens/Spend'
import TelrScreen from './screens/Telr'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const PERSISTENCE_KEY = 'TELR_APP'

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    // const [isReady, setIsReady] = React.useState(false)
    const [isReady, setIsReady] = React.useState(__DEV__ ? false : true)
    const [initialState, setInitialState] = React.useState()

    React.useEffect(() => {
        const restoreState = async () => {
            try {
                const initialUrl = await Linking.getInitialURL()

                if (initialUrl === null) {
                    // Only restore state if there's no deep link
                    const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY)
                    const state = savedStateString ? JSON.parse(savedStateString) : undefined

                    if (state !== undefined) {
                        setInitialState(state)
                    }
                }
            } finally {
                setIsReady(true)
            }
        }

        if (!isReady) {
            restoreState()
        }
    }, [isReady])

    /* Block UI display until page is fully loaded. */
    if (!isReady) {
        // TODO Add an activity indicator while the page is loading...
        // return <ActivityIndicator />
        return null
    }

    return (
        <NavigationContainer
            initialState={initialState}
            onStateChange={(state) =>
                AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
            }
        >
            <SafeAreaView className="h-screen flex flex-col justify-between bg-rose-700">
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    className=""
                />

                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName="Telr"
                    tabBar={ props => <NavMenu {...props} /> }
                >
                    <Tab.Screen
                        name="Explorer"
                        component={ExplorerScreen}
                        options={{ title: 'Explorer' }}
                    />

                    <Tab.Screen
                        name="Grow"
                        component={GrowScreen}
                        options={{ title: 'Grow' }}
                    />

                    <Tab.Screen
                        name="Telr"
                        component={TelrScreen}
                        options={{ title: 'TΞLR' }}
                    />

                    <Tab.Screen
                        name="Spend"
                        component={SpendScreen}
                        options={{ title: 'Spend' }}
                    />

                    <Tab.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{ title: 'Profile' }}
                    />
                </Tab.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    )
}

export default App
