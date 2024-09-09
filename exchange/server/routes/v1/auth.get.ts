/* Import modules .*/
import { v4 as uuidv4 } from 'uuid'

export default defineEventHandler(async (event) => {
    let params

console.log('CONTEXT', event.context)
/* Initailize locals. */
let body

/* Set (request) body. */
body = await readBody(event)
console.log('AUTH BODY', body)

    /* Set parameters. */
    params = event.context.params
    console.log('AUTH PARAMS', params)

    return params
})
