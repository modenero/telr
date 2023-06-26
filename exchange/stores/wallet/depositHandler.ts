/* Import modules. */
import { encodePrivateKeyWif } from '@nexajs/hdnode'
import { getAddressBalance } from '@nexajs/rostrum'
import { listUnspent } from '@nexajs/address'
import { sha256 } from '@nexajs/crypto'

/* Initialize constants. */
const DUST_LIMIT = 546

export default async function (_updatedInfo) {
    console.log('DEPOSIT HANDLER', _updatedInfo)

    // Fetch all unspent transaction outputs for the temporary in-browser wallet.
    let unspent = await listUnspent(this.address)
    console.log('\n  Unspent outputs:\n', unspent)

    this._satoshis = await getAddressBalance(this.address)
    console.log('\n  Address balance:\n', this.satoshis)

    /* Filter out ANY tokens. */
    // FIXME We should probably do something better than this, lol.
    unspent = unspent.filter(_unspent => {
        return _unspent.value > DUST_LIMIT
    })

    /* Validate unspent outputs. */
    if (unspent.length === 0) {
        return console.error('There are NO unspent outputs available.')
    }

    /* Build parameters. */
    this._coins = unspent.map(_unspent => {
        const outpoint = _unspent.outpointHash
        const satoshis = _unspent.value

        return {
            outpoint,
            satoshis,
            wif: this._wif,
        }
    })
    console.log('\n  Coins:', this.coins)
}
