/* Import modules .*/
import { v4 as uuidv4 } from 'uuid'

export default defineEventHandler(async (event) => {
    let params

    /* Set parameters. */
    params = event.context.params
    console.log('AUTH PARAMS', params)

    return params
})
