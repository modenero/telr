/* Import modules. */
import moment from 'moment'

export default defineEventHandler(async (event) => {
    /* Return (Telr Exchange) session. */
    // return $fetch('https://api.telr.io/v1/exchange/orders', {
    //     method: 'POST',
    //     'ttl': 86400, // 24 hours
    // })

    const samples = []

    samples.push({
        orderid: '42db03fe-8963-4abb-9762-016610a00e4c',
        updatedAt: moment().valueOf()
    })

    return samples
})
