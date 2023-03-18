/* Import React. */
import React, { useRef, useState } from 'react'

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

/**
 * Splash Screen
 *
 * Screen boilerplate.
 */
const SplashScreen = ({ navigation }) => {
    const [holder, setHolder] = useState(0)

    /* Set dark mode. */
    const isDarkMode = useColorScheme() === 'dark'

    /* Return UI. */
    return (
        <View className="flex-1 h-32 items-center justify-center bg-gray-100 border-y-2 border-rose-500 dark:bg-gray-900">
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
    )
}

/* Export module. */
export default SplashScreen
