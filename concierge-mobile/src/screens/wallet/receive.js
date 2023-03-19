/**
 * Bitpawns React Native App
 * https://github.com/modenero/bitpawns
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react'

import {
    Button,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'

import QRCode from 'react-native-qrcode-svg'

// import store from '../../store'

// import {
//     Card,
//     Icon,
//     Input,
//     ListItem,
//     Text,
// } from 'react-native-elements'

import logoFromFile from '../../assets/icon.png'

const Deposit = (_props) => {
    const navigation = _props.navigation

    // const {
    //     firstName,
    //     lastName,
    //     streetAddress,
    // } = useContext(store.Profile)
    const firstName = 'Satoshi'
    const lastName = 'Nakamoto'
    const streetAddress = 'Somewhere, Tokyo'

    // const {
    //     loanAmount,
    //     setLoanAmount,
    // } = useContext(store.Loan)
    const loanAmount = 0
    const setLoanAmount = () => {
        return true
    }

    const [_loanAmount, _onLoanAmount] = React.useState(loanAmount)
    const [canSubmit, setCanSubmit] = React.useState(true)

    const _submitRequest = () => {
        console.log('SUBMITTING REQUEST..', _loanAmount)

        setLoanAmount(_loanAmount)

        navigation.navigate('LoansComplete')
    }

    return (
        <ScrollView
            className="p-1"
        >
            <View className="">
                <Text className="text-gray-900 font-bold text-lg">
                    Make a deposit into your Crypto account.
                </Text>

                <Text className="mt-3 text-red-500 font-bold text-2xl">
                    Let's get started!
                </Text>
            </View>

            <View className="mt-3">
                <TextInput
                    title='Choose a Funding Source'
                    placeholder='Bitcoin (BTC)'
                    editable={false}
                />
            </View>

            <View className="mt-2">
                <TextInput
                    title='Enter a Deposit Amount (optional)'
                    placeholder='$133.70'
                    value={'$133.70'}
                    onChangeText={_onLoanAmount}
                    keyboardType={Platform.OS === 'ios'? "number-pad":"numeric"}
                />
            </View>

            <View className="flex items-center mt-8 bg-yellow-500 p-7 border-4 border-yellow-400 rounded">
                <QRCode
                    value="376ac087-39f5-4eaa-85e3-b4c91ecb2cfb"
                    size={320}
                    logo={logoFromFile}
                    logoSize={100}
                    logoBackgroundColor='transparent'
                />
            </View>

            <Text className="inline mt-4 px-4 font-bold text-lg">
                <Text className="text-red-500 font-bold">
                    Paying from your device?
                </Text>
                &nbsp;Click the QR Code above to start a Payment Request using your preferred wallet.
            </Text>

            <Button
                style={'mt-8'}
                navigation={_props.navigation}
                title="Start Payment Request"
                onPress={_submitRequest}
                disabled={!canSubmit}
            />
        </ScrollView>
    )
}

/* Export component. */
export default Deposit
