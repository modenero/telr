export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let session

    /* Set session id. */
    const sessionid = event.context.params.sessionid
    // console.log('SESSION ID', sessionid)

    /* Validate session id. */
    if (typeof sessionid === 'undefined' || sessionid === null) {
        /* Set (404) response status. */
        setResponseStatus(event, 404)

        return null
    }

    /* Request session (from endpoint). */
    session = await $fetch(process.env.SESSION_ENDPOINT + '/' + sessionid)
        .catch(err => console.error(err))
    console.log('SESSION', session)

    /* Validate session. */
    if (typeof session === 'undefined' || session === null) {
        /* Set (404) response status. */
        setResponseStatus(event, 404)

        return null
    }

    /* Return (Telr Exchange) session. */
    return session
})
