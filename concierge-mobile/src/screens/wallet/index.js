/**
 * Bitpawns React Native App
 * https://github.com/modenero/bitpawns
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react'

import {
    Alert,
    Button,
    Image,
    Pressable,
    Radio,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Switch,
    Text,
    TextInput,
    View,
} from 'react-native'

// import { observer } from 'mobx-react-lite'

// import {
//     Button,
//     Radio,
//     TextInput,
// } from '../../components'

// import store from '../../store'

import * as Keychain from 'react-native-keychain'

import numeral from 'numeral'

/**
 * Cryptographic Libraries
 *
 * NOTE: We MUST use the most caution when importing and trusting
 *       the repositories for these libraries.
 */
import 'react-native-get-random-values' // NOTE: Required by uuid and ethers.
import { v4 as uuidv4 } from 'uuid'

import scrypt from 'scrypt-js'

import "@ethersproject/shims"
import { ethers } from 'ethers'

/* Set Telr wallet constants. */
const TELR_WALLET_ADDR = '0xBfBE7B9d33AEAD72ba940Ea3f51bDdd84798C9Ed'
// const TELR_WALLET_ABI = require('../../../contracts/TelrWallet.json')

/**
 * Wallet
 *
 * A smart wallet to manage the users assets.
 */
const Wallet = (_props) => {
    /* Initialize navigation. */
    const navigation = _props.navigation

    /* Initialize PROFILE context. */
    // const {
    //     firstName,
    // } = React.useContext(store.Profile)
    const firstName = 'Satoshi'

    const [_firstName, _onFirstName] = React.useState(firstName)
    const [_btcUsd, _setBtcUsd] = React.useState(0)
    const [_ethUsd, _setEthUsd] = React.useState(0)
    const [_btc24hChange, _setBtc24hChange] = React.useState(0)
    const [_eth24hChange, _setEth24hChange] = React.useState(0)

    /* Load saved profile. */
    // FIXME: Remove async and use sub-methods
    React.useEffect(() => {
        /**
         * Fetch Info
         */
        const fetchInfo = async () => {
            /* Initialize response. */
            let response
            let json
            let price
            let change

            /**
             * Vault User Information
             *
             * Private information about this user.
             */
            // const username = JSON.stringify({
            //     backups: {
            //         id: uuidv4(),
            //         email: 'satoshi@bitcoin.com',
            //         phone: '+14045551212',
            //     }
            // })

            /**
             * Vault Secure Information
             *
             * Secure information about this user.
             */
            // const password = JSON.stringify({
            //     masterSeed: 'hi-there',
            //     vaultKeycard: 'see-ya',
            // })

            // Store the credentials
            // await Keychain
            //     .setGenericPassword(username, password)
            //     .catch(err => console.error(err))
            //
            // try {
            //     // Retrieve the credentials
            //     const credentials = await Keychain
            //         .getGenericPassword()
            //         .catch(err => console.error(err))
            //
            //     if (credentials) {
            //       console.log(
            //         'Credentials successfully loaded for user ' + credentials.username
            //       );
            //
            //       console.log(
            //         'Credentials successfully loaded for password ' + credentials.password
            //       );
            //     } else {
            //       console.log('No credentials stored');
            //     }
            // } catch (error) {
            //     console.log("Keychain couldn't be accessed!", error);
            // }

            // await Keychain
            //     .resetGenericPassword()
            //     .catch(err => console.error(err))

            /* Request BTC quote. */
            response = await fetch('https://api.telr.io/v1/ticker/quote/BTC')
                .catch(err => console.error(err)) // TODO: Handle error.
            // console.log('QUOTE RESPONSE (btc):', response)

            /* Convert to JSON. */
            json = await response.json()
            // console.log('JSON', json)

            /* Set price. */
            price = json.price
            _setBtcUsd(numeral(price).format('$0,0.00'))

            /* Set 24h change. */
            change = json.percent_change_24h
            if (change > 0) {
                _setBtc24hChange('+' + numeral(change / 100.0).format('0.00%'))
            } else {
                _setBtc24hChange('-' + numeral(change / 100.0).format('0.00%'))
            }

            /* Request ETH quote. */
            response = await fetch('https://api.telr.io/v1/ticker/quote/ETH')
                .catch(err => console.error(err)) // TODO: Handle error.
            // console.log('QUOTE RESPONSE (eth):', response)

            /* Convert to JSON. */
            json = await response.json()
            // console.log('JSON', json)

            /* Set price. */
            price = json.price
            _setEthUsd(numeral(price).format('$0,0.00'))

            /* Set 24h change. */
            change = json.percent_change_24h
            if (change > 0) {
                _setEth24hChange('+' + numeral(change / 100.0).format('0.00%'))
            } else {
                _setEth24hChange(numeral(change / 100.0).format('0.00%'))
            }

            // /* Initialize provider. */
            // const provider = new ethers.providers
            //     .JsonRpcProvider('https://smartbch.devops.cash/testnet')
            // console.log('PROVIDER', provider)

            // const blockNum = await provider
            //     .getBlockNumber()
            //     .catch(err => console.error(err))
            // console.info('Current block height:', blockNum)

            // /* Initialize campaign instance. */
            // const wallet = new ethers
            //     .Contract(TELR_WALLET_ADDR, TELR_WALLET_ABI, provider)
            // console.log('CONTRACT (wallet):', wallet)

            // /* Request wallet owner. */
            // const walletOwner = await wallet
            //     .owner()
            //     .catch(err => console.error(err))
            // console.log('WALLET (owner):', walletOwner)
        }

        /* Fetch info. */
        fetchInfo()

    }, [])

    /**
     * Connect To Vault
     *
     * Establishes a connection to your secure crypto vault.
     */
    const connectVault = () => {
        console.log('CONNECTING TO VAULT...')
    }

    /**
     * Close Wallet
     *
     * Completely transfers ALL assets to external account(s) and
     * closes the user's smart (contract) wallet.
     */
    const closeWallet = () => {
        console.log('WE GOTTA TRANSFER THIS WHOLE THING')

        Alert.alert('Wallet transfer is NOT available in this MVP')
    }

    return (
        <SafeAreaView className="h-full bg-gray-900">
            <View className="pt-14">
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    className="p-1"
                >
                    <View className="flex flex-row px-3">
                        <View className="flex-none w-32 h-16 justify-center items-center">
                            <Text className="text-xs font-medium text-gray-100">{_btc24hChange}</Text>
                            <Text className="text-xl font-bold text-gray-100">{_btcUsd}</Text>
                            <Text className="text-xs font-medium text-gray-100">BTC/USD</Text>
                        </View>

                        <View className="flex-grow h-16 justify-center items-center">
                            <Text class=""></Text>
                        </View>

                        <View className="flex-none w-32 h-16 justify-center items-center">
                            <Text className="text-xs font-medium text-gray-100">{_eth24hChange}</Text>
                            <Text className="text-xl font-bold text-gray-100">{_ethUsd}</Text>
                            <Text className="text-xs font-medium text-gray-100">ETH/USD</Text>
                        </View>
                    </View>

                    <View className="mt-3 w-full border-2 border-gray-300 rounded-xl p-3 bg-gray-200">
                        <Text className="font-bold text-lg text-gray-500">
                            Bai Cash
                        </Text>

                        <View className="flex flex-row justify-between">
                            <Text className="mt-1 text-2xl text-gray-700 font-bold">
                                BAI
                            </Text>
                            <Text className="mt-1 text-3xl font-bold text-indigo-700">
                                $212.88
                            </Text>
                        </View>
                    </View>

                    <View className="w-1 h-1 -ml-96 opacity-0">
                        <Button
                            style={'flex-1 mt-5 mr-1 bg-indigo-500 border-4 border-indigo-700 rounded-xl'}
                            title="MAKE A PAYMENT"
                        />
                    </View>

                    <View className="mt-5 flex-row bg-rose-500">
                        <Button
                            style={'w-full bg-green-500 border-4 border-green-700 rounded-xl'}
                            title="SEND CRYPTO"
                            onPress={() => navigation.navigate('Wallet', { screen: 'Send' })}
                        />

                        <Button
                            style={'w-full bg-purple-500 border-4 border-purple-700 rounded-xl'}
                            title="RECIEVE CRYPTO"
                            onPress={() => navigation.navigate('Receive')}
                        />
                    </View>

                    <View className="hidden mt-8 ml-2">
                        <Text className="font-bold text-lg text-gray-100">TRANSACTION HISTORY</Text>
                    </View>

                    <View className="flex mt-8 ml-2 items-end">
                        <Text className="font-bold text-base text-gray-100">Wednesday, September 8</Text>
                    </View>

                    <View className="mt-3 w-full border-2 border-gray-300 rounded-xl bg-gray-200">
                        <View className="flex flex-row justify-between px-3 py-2">
                            <View className="flex">
                                <Text className="mt-1 text-2xl text-gray-700 font-bold">
                                    Jemma Pawn
                                </Text>
                                <Text className="font-bold text-sm text-red-500">
                                    PAYMENT PENDING
                                </Text>
                            </View>
                            <Text className="mt-1 text-3xl font-bold text-indigo-500">
                                $85.00
                            </Text>
                        </View>

                        <View className="flex flex-col justify-between border-t-4 border-gray-300 p-3">
                            <View className="flex flex-row justify-between">
                                <Text className="text-xs text-gray-500 font-bold">
                                    Pawnbroker Dollars
                                </Text>

                                <Text className="font-bold text-sm text-gray-800">
                                    85.00 PWND
                                </Text>
                            </View>

                            <View className="flex flex-row justify-between">
                                <Text className="text-xs text-gray-500 font-bold">
                                    Blockchain Fee
                                </Text>

                                <Text className="font-bold text-sm text-gray-800">
                                    0.00 PWND
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View className="flex mt-8 ml-2 items-end">
                        <Text className="font-bold text-base text-gray-100">Tuesday, September 7</Text>
                    </View>

                    <View className="mt-3 w-full border-2 border-gray-300 rounded-xl bg-gray-200">
                        <View className="flex flex-row justify-between px-3 py-2">
                            <View className="flex">
                                <Text className="mt-1 text-2xl text-gray-700 font-bold">
                                    Deposit
                                </Text>
                                <Text className="font-bold text-sm text-green-500">
                                    COMPLETE
                                </Text>
                            </View>
                            <Text className="mt-1 text-3xl font-bold text-indigo-500">
                                $1,000.00
                            </Text>
                        </View>

                        <View className="flex flex-col justify-between border-t-4 border-gray-300 p-3">
                            <View className="flex flex-row justify-between">
                                <Text className="text-xs text-gray-500 font-bold">
                                    Bitcoin
                                </Text>

                                <Text className="font-bold text-sm text-gray-800">
                                    0.02170 BTC
                                </Text>
                            </View>

                            <View className="flex flex-row justify-between">
                                <Text className="text-xs text-gray-500 font-bold">
                                    Blockchain Fee
                                </Text>

                                <Text className="font-bold text-sm text-gray-800">
                                    0.00003927 BTC
                                </Text>
                            </View>

                            <View className="flex flex-row justify-between">
                                <Text className="text-xs text-gray-500 font-bold">
                                    Exchange Fee
                                </Text>

                                <Text className="font-bold text-sm text-gray-800">
                                    0.0002303 BTC
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View className="flex mt-8 ml-2 items-end">
                        <Text className="font-bold text-base text-gray-100">Sunday, August 8</Text>
                    </View>

                    <View className="mt-3 w-full border-2 border-gray-300 rounded-xl bg-gray-200">
                        <View className="flex flex-row justify-between px-3 py-2">
                            <View className="flex">
                                <Text className="mt-1 text-2xl text-gray-700 font-bold">
                                    Jemma Pawn
                                </Text>
                                <Text className="font-bold text-sm text-green-500">
                                    PAID IN FULL
                                </Text>
                            </View>
                            <Text className="mt-1 text-3xl font-bold text-indigo-500">
                                $85.00
                            </Text>
                        </View>

                        <View className="flex flex-col justify-between border-t-4 border-gray-300 p-3">
                            <View className="flex flex-row justify-between">
                                <Text className="text-xs text-gray-500 font-bold">
                                    Pawnbroker Dollars
                                </Text>

                                <Text className="font-bold text-sm text-gray-800">
                                    85.00 PWND
                                </Text>
                            </View>

                            <View className="flex flex-row justify-between">
                                <Text className="text-xs text-gray-500 font-bold">
                                    Blockchain Fee
                                </Text>

                                <Text className="font-bold text-sm text-gray-800">
                                    0.00 PWND
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View className="mt-10 flex">
                        <Button
                            style={'flex-1 mt-5 mr-1 bg-red-500 border-4 border-red-700 rounded-xl'}
                            title="CLOSE MY WALLET"
                            onPress={closeWallet}
                        />
                        <Text className="mt-1 text-xs text-gray-300 text-center">
                            * ALL funds will be transferred to external account(s)
                        </Text>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )

}

/* Export component. */
export default Wallet
// export default inject('store')(observer(Wallet))
