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
type CardProps = {
    name: String,
    balance: String,
}

/**
 * Gift Card
 *
 * Displays a card-like item.
 */
export default GiftCard = (props: CardProps) => {
    return (
        <View className="w-full h-32 my-3 flex justify-center items-center bg-rose-500 rounded-lg">
            <Text className="text-3xl text-purple-100 font-medium">
                {props.name} - {props.balance}
            </Text>
        </View>
    )
}
