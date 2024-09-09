/* Import modules. */
import moment from 'moment'
import { sha256 } from '@nexajs/crypto'
import { v4 as uuidv4 } from 'uuid'

/**
 * Create Session
 *
 * @returns session
 */
// const createSession = async (_source, _headers) => {
//     /* Initialize locals. */
//     let challenge
//     let headers
//     let logDetails
//     let session

//     /* Set headers. */
//     headers = _headers
//     // console.log('HEADERS', headers)

//     /* Build log details. */
//     logDetails = {
//         source: _source,
//         i18n: headers['accept-language'],
//         client: headers['user-agent'],
//         referer: headers['referer'],
//         host: headers['host'],
//         ip: headers['x-real-ip'],
//         ip_fwd: headers['x-forwarded-for'],
//     }
//     // console.info('LOG (api):', logDetails)

//     /* Create new challenge (string). */
//     // NOTE: Used for (optional) secure authentication.
//     challenge = sha256(uuidv4()).slice(0, 40)

//     /* Create (new) session. */
//     session = {
//         _id: uuidv4(),
//         ...logDetails,
//         challenge,
//         isActive: true,
//         createdAt: moment().unix(),
//         expiresAt: moment().add(1, 'days').unix(),
//         killedAt: moment().add(7, 'days').unix(),
//     }

//     /* Return session. */
//     return session
// }

export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let body
    let response
    let session
    let sessionid

    /* Set (request) body. */
    body = await readBody(event)
    console.log('SESSIONS.POST (body):', body)

    /* Set session id. */
    sessionid = body?.sessionid
    console.log('SESSION ID', sessionid)

    /* Validate session id. */
    if (typeof sessionid === 'undefined' || sessionid === null || sessionid === '') {
        console.error('NO SESSION ID')

        /* Request NEW session. */
        session = await $fetch(process.env.SESSION_ENDPOINT, {
            method: 'POST',
            body: { action: 'new' },
        }).catch(err => console.error(err))
        console.log('NEW SESSION', session)
    } else {
        /* Request session (if available). */
        session = await $fetch(`/v1/session/${sessionid}`)
            .catch(err => console.error(err))
        console.log('SESSION (api):', session)
    }

    /* Validate session. */
    if (false) {
        /* Save (updated) session. */
        response = await $fetch(process.env.SESSION_ENDPOINT, {
            method: 'POST',
            body: session,
        }).catch(err => console.error(err))
        console.log('SAVE/UPDATE SESSION (api):', response)
    }
    console.log('SESSION (api):', session)

    /* Update session. */
    // session = {
    //     id: session?._id,
    //     ...session,
    // }

    // delete session._id
    // delete session._rev

    /* Return session. */
    return session
})
