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

const Withdraw = (_props) => {
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

    const navigation = _props.navigation

    const _submitRequest = () => {
        console.log('SUBMITTING REQUEST..', _loanAmount)

        setLoanAmount(_loanAmount)

        navigation.navigate('LoansComplete')
    }

    return (
        <SafeAreaView className="h-full bg-gray-900">
            <View className="pt-14">
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    className="p-1"
                >
                    <View className="flex">
                        <Text className="text-gray-100 font-bold text-lg">
                            YOU are ALWAYS in 100% control of YOUR funds.
                            Enter your withdrawal details below and we'll take care of the rest.
                        </Text>
                    </View>

                    <View className="mt-5">
                        <TextInput
                            title='Destination Address'
                            placeholder='Enter a crypto username or address'
                            editable={false}
                        />
                    </View>

                    <View className="mt-5">
                        <TextInput
                            title='Transfer Amount'
                            placeholder='$133.70'
                            value={_loanAmount}
                            onChangeText={_onLoanAmount}
                            keyboardType={Platform.OS === 'ios'? "number-pad":"numeric"}
                        />
                    </View>

                    <Button
                        title="Recent Transfers"
                        value={firstName}
                    />

                    <Button
                        style={'mt-8'}
                        navigation={_props.navigation}
                        title="Process Withdrawal"
                        onPress={_submitRequest}
                        disabled={!canSubmit}
                    />

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

/* Export component. */
export default Withdraw
