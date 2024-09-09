export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let body
    let session
    let sessionid

    /* Set (request) body. */
    body = await readBody(event)
    // console.log('SESSIONS.POST (body):', body)

    /* Set session id. */
    sessionid = body?.sessionid
    // console.log('SESSION ID', sessionid)

    /* Validate session id. */
    if (typeof sessionid === 'undefined' || sessionid === null || sessionid === '') {
        console.error('NO SESSION ID')

        /* Request NEW session. */
        session = await $fetch(process.env.SESSION_ENDPOINT, {
            method: 'POST',
            body: { action: 'new' },
        }).catch(err => console.error(err))
        // console.log('NEW SESSION', session)
    } else {
        /* Request session (if available). */
        session = await $fetch(`/v1/session/${sessionid}`)
            .catch(err => console.error(err))
        // console.log('SESSION (api):', session)
    }

    /* Return session. */
    return session
})
