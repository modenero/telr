/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// NOTE: This library works as a polyfill for the global
//       `crypto.getRandomValues`. Now you can use uuid or other libraries that
//       assume `crypto.getRandomValues` is available
import 'react-native-get-random-values'

import React, { useRef, useState } from 'react'

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

import DeviceInfo from 'react-native-device-info'

import 'react-native-get-random-values' // required by uuid
import { v4 as uuidv4 } from 'uuid'

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
    const isDarkMode = useColorScheme() === 'dark'

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

    /**
     * Start Session
     *
     * Begins a new session.
     *
     * NOTE: Logs the device info to the API server.
     */
    React.useEffect(() => {
        /**
         * Fetch Device Info
         *
         * Will retrieve all available information about the running device
         * and store to the active/new session.
         */
        const fetchDeviceInfo = async () => {
            try {
                /* Set unique id. */
                const uid = await DeviceInfo.getUniqueId()

                /* Set brand. */
                const brand = await DeviceInfo.getBrand()

                /* Set build id. */
                const buildId = await DeviceInfo.getBuildId()

                /* Set build number. */
                const buildNumber = await DeviceInfo.getBuildNumber()

                /* Set device id. */
                const deviceId = await DeviceInfo.getDeviceId()

                /* Set device name. */
                const deviceName = await DeviceInfo.getDeviceName()

                /* Set ip address. */
                const ipAddress = await DeviceInfo.getIpAddress()

                /* Set manufacturer. */
                const mfr = await DeviceInfo.getManufacturer()

                /* Set model. */
                const model = await DeviceInfo.getModel()

                /* Set system name. */
                const sysName = await DeviceInfo.getSystemName()

                /* Set system version. */
                const sysVersion = await DeviceInfo.getSystemVersion()

                /* Set security. */
                const security = await DeviceInfo.isPinOrFingerprintSet()

                /* Set tablet. */
                const tablet = await DeviceInfo.isTablet()

                /* Set version. */
                const version = await DeviceInfo.getVersion()

                /* Build session package. */
                const pkg = {
                    uid,
                    brand,
                    buildId,
                    buildNumber,
                    deviceId,
                    deviceName,
                    ipAddress,
                    mfr,
                    model,
                    sysName,
                    sysVersion,
                    security,
                    tablet,
                    version,
                }
                console.log('SESSION (pkg):', JSON.stringify(pkg, null, 4))

                /* Request new session from API server. */
                // const response = await fetch('https://api.telr.io/v1/sessions', {
                //     method: 'POST',
                //     headers: {
                //         Accept: 'application/json',
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(pkg)
                // })
                // .catch(err => console.error(err))
                // console.log('SESSION RESPONSE:', response)
            } catch (err) {
                console.error('SESSION ERROR', err)
            }
        }

        /* Fetch device info. */
        fetchDeviceInfo()
    }, [])

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

/* Export module. */
export default App
