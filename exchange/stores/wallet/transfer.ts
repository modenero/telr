/* Import modules. */
import { sendCoin } from '@nexajs/purse'

export default async function (_receiver, _satoshis) {
    /* Encode Private Key WIF. */
    const wif = this.wif

    /* Filter out ANY tokens & spent. */
    // FIXME We should probably do something better than this, lol.
    const coins = this.coins.filter(_coin => {
        /* Initialize flag. */
        let isValid = true

        if (this.spentCoins.includes(_coin.outpoint)) {
            /* Set flag. */
            isValid = false
        }

        /* Return flag. */
        return isValid
    })
    console.log('\n  Coins:', coins)

    /* Calculate the total balance of the unspent outputs. */
    const unspentSatoshis = coins
        .reduce(
            (totalValue, unspentOutput) => (totalValue + unspentOutput.satoshis), 0
        )
    console.log('unspentSatoshis' ,unspentSatoshis)

    const balance = this.balance
    console.log('\n  Address balance:\n', balance)

    /* Validate unspent outputs. */
    if (coins.length === 0) {
        return console.error('There are NO coins available.')
    }

    // NOTE: 150b (per input), 35b (per output), 10b (misc)
    // NOTE: Double the estimate (for safety).
    const feeEstimate = ((coins.length * 150) + (35 * 2) + 10) * 2
    // console.log('FEE ESTIMATE', feeEstimate)

    /* Initialize receivers. */
    const receivers = []

    /* Add value output. */
    receivers.push({
        address: _receiver,
        satoshis: _satoshis,
    })

    if ((unspentSatoshis - _satoshis - feeEstimate) > this.DUST_LIMIT) {
        /* Add (change) value output. */
        receivers.push({
            address: this.address,
            satoshis: (unspentSatoshis - _satoshis - feeEstimate),
        })
    }
    console.log('\n  Receivers:', receivers)

    /* Set automatic fee (handling) flag. */
    const autoFee = true

    /* Send UTXO request. */
    const response = await sendCoin(coins, receivers, autoFee)
    console.log('Send UTXO (response):', response)

    try {
        const txResult = JSON.parse(response)
        console.log('TX RESULT', txResult)

        if (txResult?.result) {
            this.manageSpent(coins)

            // alert(`Transaction sent successfully!\n\n${txResult.result}`)

            return txResult.result
        }

        if (txResult?.error) {
            if (txResult?.error.message.includes('txn-mempool-conflict')) {
                return alert(`Oops! Please wait for pending transactions to confirm before sending.`)
            }

            if (txResult?.error.message.includes('bad-txns-in-belowout')) {
                return alert(`Oops! You don't have enough NEXA to send that amount.`)
            }

            alert(txResult?.error.message)

            return null
        }
    } catch (err) {
        console.error(err)
    }
}
