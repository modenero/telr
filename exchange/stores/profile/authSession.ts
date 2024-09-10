/* Import modules. */
import moment from 'moment'
import {
    sha256,
    signMessageHashSchnorr,
} from '@nexajs/crypto'
import {
    binToHex,
    hexToBin,
    sleep,
} from '@nexajs/utils'

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'

export default async function () {
    console.log('WALLET', this.wallet)
    console.log('ADDRESS', this.address)
    console.log('PUBLIC KEY', binToHex(this.wallet.publicKey))

    /* Initialize locals. */
    let message
    let messageHash
    let timestamp
    let response
    let signature
    let unitSeparator

    const Profile = useProfileStore()
    console.log('PROFILE', Profile)
    console.log('PROFILE CHALLENGE-1', Profile.challenge)

    while (!Profile.challenge) {
        console.log('SLEEPING FOR A SEC...')
        await sleep(1000)
    }
    console.log('PROFILE CHALLENGE-2', Profile.challenge)
    console.log('PROFILE SESSION', Profile.session)
    console.log('PROFILE SESSION ID', Profile.sessionid)

    /* Set unit separator. */
    unitSeparator = '1f'

    /* Set (timestamp) timestamp.*/
    timestamp = moment().unix()
    // console.log('TIMESTAMP-1', timestamp)
    timestamp = timestamp.toString(16)
    // console.log('TIMESTAMP-2', timestamp)

    // console.log('\n\nPRIVATE KEY', this.wallet.privateKey)

    // NOTE: Format is <timestamp> <0x1F> <challenge>
    // NOTE: We use 0x1F as the default "unit separator".
    message = `${timestamp}${unitSeparator}${Profile.challenge}`
    console.log('MESSAGE', message)
    messageHash = sha256(message)
    console.log('MESSAGE HASH', messageHash)

    // Generate a signature over the "sighash" using the passed private key.
    signature = signMessageHashSchnorr(this.wallet.privateKey, hexToBin(messageHash))
    // console.log('SIGNATURE BIN', signature)
    // console.log('SIGNATURE HEX', binToHex(signature))

    response = await $fetch('/v1/auth', {
        method: 'POST',
        body: {
            sessionid: Profile.sessionid,
            publicKey: binToHex(this.wallet.publicKey),
            signature: binToHex(signature),
            timestamp,
        },
    })
    console.log('AUTH SESSIONS (response):', response)
}
