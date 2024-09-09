export default defineEventHandler(async (event) => {
    /* Initailize locals. */
    let body

    /* Set (request) body. */
    body = await readBody(event)
    // console.log('BODY', body)

    /* Set (string) body. */
    body = JSON.stringify(body)

    /* Return response. */
    return await $fetch(process.env.AUTH_ENDPOINT, {
        method: 'POST',
        body,
    }).catch(err => console.error(err))
})
