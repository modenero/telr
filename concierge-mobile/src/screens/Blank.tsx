/* Import React. */
import React, { useState } from 'react'

/* Import components. */
import {
    Dimensions,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

/* Set persistence key. */
const PERSISTENCE_KEY = 'TELR_BLANK'

/**
 * Blank Screen
 *
 * Screen boilerplate.
 */
const BlankScreen = ({ navigation }) => {
    const [holder, setHolder] = useState(0)

    /* Set dark mode. */
    const isDarkMode = useColorScheme() === 'dark'

    /* Return UI. */
    return (
        <View className="h-full flex justify-center items-center bg-gray-900">
            <View>
                <Text className="text-3xl text-gray-300 font-medium">
                    Blank Screen
                </Text>
            </View>

            <Pressable
                onPress={() => navigation.navigate('Telr')}
            >
                <Text>Go to TΞLR</Text>
            </Pressable>
        </View>
    )
}

/* Export module. */
export default BlankScreen
