/* Import modules. */
import { encodeAddress } from '@nexajs/address'
import {
    ripemd160,
    sha256,
} from '@nexajs/crypto'
import { parseWif } from '@nexajs/hdnode'
import { getCoins } from '@nexajs/purse'
import {
    encodeDataPush,
    encodeNullData,
    OP,
} from '@nexajs/script'
import {
    buildTokens,
    getTokens,
    sendTokens,
} from '@nexajs/token'
import {
    binToHex,
    hexToBin,
} from '@nexajs/utils'

/* Initialize stores. */
import { useWalletStore } from '@/stores/wallet'

/* Set WiserSwap (v1) contract (HEX) bytecode. */
const WISERSWAP_V1_HEX = '6c6c6c6c6c5579009c63c076cd01217f517f7c817f775279c701217f517f7c817f77537a7b888876c678c7517f7c76010087636d00677f77517f7c76010087636d00677f75816868787c955279cc537acd517f7c76010087636d00677f77517f7c76010087636d00677f7581686878547a94905279527995547aa269c4c353939d02220202102752530164030051145b7a7e56797b95547996765679a4c4547a9476cd547a88cca16903005114587a7e557a587a95547a9676557aa4c4557a9476cd547a88cca16972965379009e63765479a169685479009e63765579a269686d6d6d67557a519d5579827756797ea98871ad6d6d68'

/* Set dust value. */
const DUST_VALUE = 546

/* Set (platform) Administrator. */
const ADMIN_PKH = hexToBin('45f5b9d41dd723141f721c727715c690fedbbbd6') // nexa:???

/* Set (pool) Provider. */
const PROVIDER_PKH = hexToBin('b2912c4cc61f1b8cbe5c77ebd5eeea2641645f10') // nexa:???

// const TOKEN_ID_HEX = '57f46c1766dc0087b207acde1b3372e9f90b18c7e67242657344dcd2af660000' // AVAS
// const TOKEN_ID_HEX = '9732745682001b06e332b6a4a0dd0fffc4837c707567f8cbfe0f6a9b12080000' // STUDIO
// const TOKEN_ID_HEX = 'a15c9e7e68170259fd31bc26610b542625c57e13fdccb5f3e1cb7fb03a420000' // NXL
const TOKEN_ID_HEX = '5f2456fa44a88c4a831a4b7d1b1f34176a29a3f28845af639eb9b1c88dd40000' // NXY

const SATOSHIS = BigInt(1000000000) // 10M NEXA
const TOKENS = BigInt(100000000000) // 1B NXY

export default async function (_baseQuantity) {
    /* Initialize locals. */
    let allTokens
    let baseServiceFee
    let coins
    let contractAddress
    let contractTokens

    let fee
    let lockingScript
    let nullData

    let prefix

    let rate
    let receivers
    let response

    let scriptHash
    let scriptPubKey

    let tokens
    let tradeCeiling
    let tradeFloor
    let txResult

    let unlockingScript
    let unspentTokens
    let userData

    /* Set prefix. */
    // TODO Add support for Testnet.
    prefix = 'nexa'

    /* Set locking script. */
    lockingScript = hexToBin(WISERSWAP_V1_HEX)
    // console.info('\nCONTRACT TEMPLATE', binToHex(lockingScript))

    scriptHash = ripemd160(sha256(lockingScript))
    // console.log('\nTEMPLATE HASH', binToHex(scriptHash))

    // rate = hexToBin('03e8') // 1,000 10.00%
    // rate = hexToBin('01f4') // 500 5.00%
    // rate = hexToBin('0190') // 400 4.00%
    rate = hexToBin('012c') // 300 3.00%
    // rate = hexToBin('0100') // 256 (2.56%)
    // rate = hexToBin('c8') // 200 2.00%
    rate.reverse()
    rate = encodeDataPush(rate)
    // rate = new Uint8Array([ OP.ONE ]) // 1 (1 satoshi per 1 token)

    // fee = hexToBin('012c') // 300 (3.00%)
    // fee = hexToBin('0100') // 256 (2.56%)
    // fee = hexToBin('fa') // 250 (2.50%)
    // fee.reverse()
    // fee = encodeDataPush(fee)
    fee = new Uint8Array([ OP.ONE ])
    // fee = new Uint8Array([ OP.ZERO ])

    // baseServiceFee = DUST_VALUE.toString(16)
    // if (baseServiceFee.length % 2 !== 0) {
    //     baseServiceFee = baseServiceFee.padStart(baseServiceFee.length + 1, '0')
    // }
    // baseServiceFee = hexToBin(baseServiceFee)
    // baseServiceFee.reverse()
    // baseServiceFee = encodeDataPush(baseServiceFee)
    baseServiceFee = new Uint8Array([ OP.ZERO ])

    // tradeCeiling = hexToBin('78') // 120%
    // tradeCeiling.reverse()
    // tradeCeiling = encodeDataPush(tradeCeiling)
    tradeCeiling = new Uint8Array([ OP.ZERO ])

    // tradeFloor = hexToBin('50') // 80%
    // tradeFloor.reverse()
    // tradeFloor = encodeDataPush(tradeFloor)
    tradeFloor = new Uint8Array([ OP.ZERO ])

    /* Build script public key. */
    scriptPubKey = new Uint8Array([
        OP.ZERO, // groupid or empty stack item
        ...encodeDataPush(scriptHash), // script hash
        OP.ZERO, // arguments hash or empty stack item
        ...encodeDataPush(PROVIDER_PKH), // The Provider's public key hash.
        ...rate, // The rate of exchange, charged by the Provider. (measured in <satoshis> per <asset>)
        ...encodeDataPush(ADMIN_PKH), // An optional 3rd-party (specified by the Seller) used to facilitate the tranaction.
        // ...fee, // An optional amount charged by the Provider. (measured in <basis points> (bp), eg. 5.25% = 525bp)
        // ...baseServiceFee, // The base service fee. (specified in satoshis)
        ...tradeCeiling, // An optional (trade) ceiling set by the Provider. (measured in <satoshis> per <asset>)
        ...tradeFloor, // An optional (trade) floor set by the Provider. (measured in <satoshis> per <asset>)
    ])
    // console.info('\nSCRIPT PUBLIC KEY', binToHex(scriptPubKey))

    /* Encode the public key hash into a P2PKH nexa address. */
    contractAddress = encodeAddress(
        prefix,
        'TEMPLATE',
        scriptPubKey,
    )
    console.info('\n(CONTRACT) ADDRESS', contractAddress)

    const Wallet = useWalletStore() // FIXME https://github.com/vuejs/pinia/discussions/806

    const providerPk = (
        await parseWif(Wallet.wallet.wif, prefix)).publicKey

    /* Set unlocking script. */
    // NOTE: Index of (executed) contract method.
    unlockingScript = new Uint8Array([
        ...new Uint8Array(64), // placeholder for signature
        ...encodeDataPush(providerPk),
        OP.ONE, // contract function index
    ])

    coins = await getCoins(Wallet.wallet.wif)
        .catch(err => console.error(err))
    console.log('\nWALLET COINS', coins)

    contractTokens = await getTokens(Wallet.wallet.wif, scriptPubKey)
        .catch(err => console.error(err))

    /* Validate (unspent) tokens. */
    if (contractTokens.length) {
        /* Filter by "active" token. */
        contractTokens = contractTokens.filter(_unspent => {
            return _unspent.tokenidHex === TOKEN_ID_HEX
        })
    }

    /* Validate (unspent) tokens. */
    if (contractTokens.length) {
        // FOR DEV PURPOSES ONLY -- take the LARGEST input
        contractTokens = [contractTokens.sort((a, b) => Number(b.tokens) - Number(a.tokens))[0]]

        // FOR DEV PURPOSES ONLY -- add scripts
        contractTokens[0].locking = lockingScript
        contractTokens[0].unlocking = unlockingScript
    }
    console.log('\n(CONTRACT) UNSPENT', contractTokens)

    /* Request Provider tokens. */
    tokens = await getTokens(Wallet.wallet.wif)
        .catch(err => console.error(err))

    /* Filter ONLY contract tokens. */
    tokens = tokens.filter(_token => {
        return _token.tokenidHex === contractTokens[0].tokenidHex
    })
    console.log('\nWALLET TOKENS', tokens)

    /* Aggregate ALL tokens. */
    allTokens = [
        ...contractTokens,
        ...tokens,
    ]
    console.log('\nALL TOKENS', allTokens)

    /* Calculate the total balance of the unspent outputs. */
    // FIXME: Add support for BigInt.
    // unspentTokens = contractTokens
    unspentTokens = allTokens
        .reduce(
            (totalValue, unspentOutput) => (totalValue + unspentOutput.tokens), BigInt(0)
        )
    console.log('\nUNSPENT TOKENS', unspentTokens)

    userData = [
        'WiserSwap v1',
        'Pool Management',
    ]

    /* Initialize hex data. */
    nullData = encodeNullData(userData)
    // console.log('HEX DATA', nullData)

    /* Initialize receivers. */
    receivers = [{
        data: nullData
    }]

    /* Add contract. */
    receivers.push({
        address: contractAddress,
        satoshis: SATOSHIS, // initial (1M) value
        tokenid: TOKEN_ID_HEX,
        tokens: TOKENS, // initial (10K) value
    })

    // NOTE: Change MUST be last output.
    receivers.push({
        address: Wallet.address,
    })
    console.log('\n  Receivers:', receivers)

    /* Send UTXO request. */
    // response = await sendTokens({
    response = await buildTokens({
        coins,
        tokens: allTokens,
        receivers,
    })
    console.log('Send UTXO (response):', response)
return response
    try {
        txResult = JSON.parse(response)
        console.log('TX RESULT', txResult)

        if (txResult.error) {
            console.error(txResult.error)
        }
    } catch (err) {
        console.error(err)
    }

    return txResult
}
