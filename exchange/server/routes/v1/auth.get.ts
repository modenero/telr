/* Import modules .*/
import { v4 as uuidv4 } from 'uuid'

export default defineEventHandler((event) => {
    let params

console.log('CONTEXT', event.context)
    /* Set parameters. */
    params = event.context.params
    console.log('AUTH PARAMS', params)

    return params
})
