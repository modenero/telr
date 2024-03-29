import React, { useRef, useState } from 'react'

import {
  Button,
  Dimensions,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import RBSheet from 'react-native-raw-bottom-sheet'

/* Define window dimensions. */
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
console.info('Window w/h:', windowWidth, windowHeight)

/**
 * Navigation Menu
 *
 * A bottom navigation bar featuring a TELR service button,
 * plus (4) customizable buttons.
 */
const NavMenu = ({ state, descriptors, navigation }) => {
    const [timesPressed, setTimesPressed] = useState(0)

    /* Initialize style holder. */
    let style

    /* Set style. */
    style = 'h-16 py-1 px-3 flex flex-row justify-around gap-x-5 bg-rose-900 border-t-2 border-rose-200'

    // NOTE: Make alignment corrections for the bottom navigation.
    switch(windowHeight) {
    // Android (360x640)
    case 640:
        style += ' mb-5'
        break
    // iOS 11 (414x896)
    case 896:
        style += ' -mb-5'
        break
    default:
        style += ' mb-0'
    }

    const refRBSheet = useRef()

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
                onLongPress={() => refRBSheet.current.open()}
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

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <View className="h-32 bg-rose-500">
                    <Text className="text-3xl text-yellow-500 font-medium">
                        This is a bottom sheet
                    </Text>
                </View>
            </RBSheet>
        </View>
    )
}

export default NavMenu
