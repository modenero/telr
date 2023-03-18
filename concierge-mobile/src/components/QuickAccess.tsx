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
type BlankProps = {
    name: String,
}

/**
 * Blank Component
 *
 * Component boilerplate.
 */
export default Blank = (props: BlankProps) => {
    return (
        <View className="mx-3 h-20 flex justify-center items-center bg-rose-500 rounded-lg">
            <Text className="text-3xl text-purple-100 font-medium">
                {props.name} - {props.balance}
            </Text>
        </View>
    )
}
