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

import Ionicons from 'react-native-vector-icons/Ionicons'

const NavMenu = ({ state, descriptors, navigation }) => {
    let style

    style = 'h-16 py-1 px-3 flex flex-row justify-around gap-x-5 bg-rose-900 border-t-2 border-rose-200'

    // FIXME Corrects the bottom navigation on some devices/resolutions
    if (false) {
        style += ' mb-5'
    }

    return (
        <View className={style}>
            <Pressable
                onPress={() => navigation.navigate('Explorer')}
                onLongPress={() => null}
                className="h-full px-1 flex justify-center bg-gray-700 border border-yellow-700 rounded-lg"
            >
                <View className="px-2 text-xl text-gray-100 font-medium">
                    <Ionicons name="globe" size={32} color="fuchsia" />
                </View>
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('Grow')}
                onLongPress={() => null}
                className="h-full px-1 flex justify-center bg-gray-700 border border-yellow-700 rounded-lg"
            >
                <View className="px-2 text-xl text-gray-100 font-medium">
                    <Ionicons name="bar-chart" size={32} color="gold" />
                </View>
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('Telr')}
                onLongPress={() => null}
                className="-mt-6 w-20 h-18 px-1 flex justify-center items-center bg-indigo-500 border-2 border-indigo-700 rounded-lg"
            >
                <Text className="text-2xl text-gray-100 font-medium">
                    TΞLR
                </Text>
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('Spend')}
                onLongPress={() => null}
                className="h-full px-1 flex justify-center bg-gray-700 border border-yellow-700 rounded-lg"
            >
                <View className="px-2 text-xl text-gray-100 font-medium">
                    <Ionicons name="cash" size={32} color="lime" />
                </View>
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('Profile')}
                onLongPress={() => null}
                className="h-full px-1 flex justify-center bg-gray-700 border border-yellow-700 rounded-lg"
            >
                <View className="px-2 text-xl text-gray-100 font-medium">
                    <Ionicons name="person" size={32} color="coral" />
                </View>
            </Pressable>
        </View>
    )
}

export default NavMenu
