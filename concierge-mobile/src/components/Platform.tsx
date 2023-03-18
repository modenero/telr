/* Import React. */
import React, { useState } from 'react'

/* Import components. */
import {
  Button,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native'

/* Define properties. */
type PlatformProps = {
    name: String,
}

/**
 * Platform Component
 *
 * Component boilerplate.
 */
export default Platform = (props: PlatformProps) => {
    return (
        <View className="w-full h-32 my-3 flex justify-center items-center bg-purple-400 rounded-lg">
            <Text className="text-3xl text-rose-100 font-medium">
                {props.name} - {props.balance}
            </Text>
        </View>
    )
}
