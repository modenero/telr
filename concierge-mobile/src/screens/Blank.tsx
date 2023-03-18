/* Import React. */
import React, { useState } from 'react'

/* Import components. */
import {
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

/**
 * Blank Screen
 *
 * Screen boilerplate.
 */
const BlankScreen = ({ navigation }) => {
    const [timesPressed, setTimesPressed] = useState(0)

    const isDarkMode = useColorScheme() === 'dark'

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

export default BlankScreen
