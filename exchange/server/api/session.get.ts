export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let query
    let sessionid

    /* Set (request) query. */
    query = getQuery(event)

    /* Set session id. */
    sessionid = query?.sid

    // FIXME Validate session id.

    return $fetch('https://api.telr.io/v1/exchange/session/' + sessionid)
        .catch(err => console.error(err))
})
