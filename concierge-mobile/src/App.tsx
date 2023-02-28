/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react'

import {
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

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <NavigationContainer>
            <SafeAreaView className="h-screen flex flex-col justify-between bg-rose-700">
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    className=""
                />

                <Tab.Navigator
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
