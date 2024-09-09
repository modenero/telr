/* Import modules .*/
import { v4 as uuidv4 } from 'uuid'

export default defineEventHandler(async (event) => {
    /* Initailize locals. */
    let body
    let requestBody
    let postBody

    /* Set (request) body. */
    requestBody = await readBody(event)
    console.log('REQUEST BODY (_reg_/auto)', requestBody)

    postBody = {
        id: uuidv4(),
        jsonrpc: '2.0',
        method: 'auth',
        params: requestBody,
    }

    body = JSON.stringify(postBody.params)
    console.log('BODY', body)

    return await $fetch(process.env.AUTH_ENDPOINT, {
        method: 'POST',
        body,
    })
    .catch(err => console.error(err))
})
