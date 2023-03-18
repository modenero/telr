/* Import React. */
import React, { useState } from 'react'

/* Import components. */
import {
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    View,
} from 'react-native'

/* Define properties. */
type ProviderProps = {
    name: String,
}

/**
 * Provider Component
 *
 * Component boilerplate.
 */
export default Provider = (props: ProviderProps) => {
    return (
        <View className="w-full h-32 my-3 justify-center items-center bg-purple-300 border-2 border-purple-500 rounded-lg">
            <Text className="text-4xl text-purple-700 font-medium">
                {props.name}
            </Text>

            <Text className="text-base text-purple-900 font-medium uppercase">
                {props.assets}
            </Text>
        </View>
    )
}
