/* Import React. */
import React, { useRef, useState } from 'react'

/* Import components. */
import {
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    View,
} from 'react-native'

/* Define properties. */
type NetworkProps = {
    name: String,
}

/**
 * Blank Component
 *
 * Component boilerplate.
 */
export default Blank = (props: NetworkProps) => {
    return (
        <Pressable
            className="mx-1 h-full px-5 py-2 flex justify-center items-center bg-yellow-600 border-4 border-yellow-800 rounded-xl"
            onPress={props?.onPress}
        >
            <Text className="text-2xl text-purple-100 font-medium">
                {props?.name}
            </Text>

            <Text className="text-sm text-purple-100 font-medium">
                {props?.symbol}
            </Text>
        </Pressable>
    )
}
