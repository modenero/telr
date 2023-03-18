import React, { useRef, useState } from 'react'

import {
    Dimensions,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Provider from '../components/Provider'

const Tab = createMaterialTopTabNavigator()

const GrowScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const Portfolio = () => {
        return (
            <View className="p-3">
                <Text className="text-3xl font-medium">
                    My Summary
                </Text>
            </View>
        )
    }

    const Providers = () => {
        return (
            <View className="h-full">
                <View className="mx-2 my-5 items-center bg-indigo-300 border-2 border-indigo-500 rounded-lg">
                    <Text className="px-3 py-1 text-2xl text-indigo-900 font-medium uppercase">
                        Staking
                    </Text>
                </View>

                <ScrollView className="h-full px-2 w-full flex-1 flex-col">
                    <Provider
                        name="AnyHedge"
                        assets="Bitcoin Cash (BCH)"
                    />

                    <Provider
                        name="THORChain"
                        assets="Multi-Chain"
                    />

                    <Provider
                        name="Maya"
                        assets="Multi-Chain"
                    />
                </ScrollView>
            </View>
        )
    }

    return (
        <View className="h-full flex">
            <Tab.Navigator
                className="w-full"
                initialLayout={{
                    width: Dimensions.get('window').width
                }}
                initialRouteName="Portfolio"
            >
                <Tab.Screen
                    name="Portfolio"
                    component={Portfolio}
                    options={{
                        tabBarLabel: 'My Portfolio',
                    }}
                />

                <Tab.Screen
                    name="Providers"
                    component={Providers}
                    options={{
                        tabBarLabel: 'Providers',
                    }}
                />
            </Tab.Navigator>
        </View>
    )
}

export default GrowScreen
