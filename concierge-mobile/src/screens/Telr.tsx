import React, { useRef, useState } from 'react'

import {
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    useColorScheme,
    View,
} from 'react-native'

/* Import assets. */
import QrCode from '../assets/svg/QrCode'

import Provider from '../components/Provider'

import Network from '../components/Buttons/Network'

const TelrScreen = ({ navigation }) => {
    const [timesPressed, setTimesPressed] = useState(0)

    let textLog = '';

    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress'
    } else if (timesPressed > 0) {
        textLog = 'onPress'
    }

    return (
        <View
            contentInsetAdjustmentBehavior="automatic"
            className="flex-1 bg-gray-800"
        >
            <View className="h-20 my-3">
                <ScrollView
                    className="my-1 px-2"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    contentOffset={{ x: 400, y: 0 }}
                >
                    <Network
                        name="Binance"
                        symbol="BSC"
                        onPress={() => null}
                    />

                    <Network
                        name="Bitcoin"
                        symbol="BTC"
                        onPress={() => null}
                    />

                    <Network
                        name="Bitcoin Cash"
                        symbol="BCH"
                        onPress={() => null}
                    />

                    <Network
                        name="Ethereum"
                        symbol="ETH"
                        onPress={() => null}
                    />

                    <Network
                        name="Nexa"
                        symbol="NEXA"
                        onPress={() => null}
                    />

                    <Network
                        name="Tron"
                        symbol="TRX"
                        onPress={() => null}
                    />

                    <Network
                        name="Add (+) New"
                        symbol="100+ supported assets"
                        onPress={() => null}
                    />

                    {/* Spacer for horizontal scroll area */}
                    <View className="w-3" />
                </ScrollView>
            </View>

            <View className="px-3 py-1 flex flex-row justify-between items-center bg-gray-100 border-y-2 border-rose-500 dark:bg-gray-900">
                <View className="">
                    <Text className="text-xs text-gray-400 font-bold uppercase">
                        Network
                    </Text>

                    <View className="flex flex-row">
                        <Text className="text-2xl text-yellow-500 tracking-widest font-bold">
                            Nexa
                        </Text>

                        <View className="w-5 h-7 rotate-180">
                            <Text className="text-3xl text-gray-500 font-bold">^</Text>
                        </View>
                    </View>
                </View>

                <View className="flex flex-row gap-3">
                    <Pressable
                        onPress={() => {
                            setTimesPressed(current => current + 1)
                        }}
                    >
                        <QrCode
                            className="w-10 h-10 text-yellow-700"
                        />
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            setTimesPressed(current => current + 1)
                        }}
                        className="w-10 h-10 flex justify-center items-center bg-gray-700 border-2 border-yellow-300 rounded-full"
                    >
                        <Text className="text-xl text-yellow-300 font-bold">
                            ?
                        </Text>
                    </Pressable>
                </View>
            </View>

            <View className="flex-1 h-full bg-green-500">
                <ScrollView
                    className="my-3 px-3 w-full"
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                >
                    <Provider
                        name="Cool #1"
                        balance="BCH"
                    />

                    <Provider
                        name="Awesome #2"
                        balance="NEXA"
                    />

                    <Provider
                        name="Nice #3"
                        balance="NEXA"
                    />

                    <Provider
                        name="Cool #1"
                        balance="BCH"
                    />

                    <Provider
                        name="Awesome #2"
                        balance="NEXA"
                    />

                    <Provider
                        name="Nice #3"
                        balance="NEXA"
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default TelrScreen
