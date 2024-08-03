/* Import modules. */
import moment from 'moment'
import { sha256 } from '@nexajs/crypto'
import { v4 as uuidv4 } from 'uuid'

/**
 * Create Session
 *
 * @returns session
 */
const createSession = async (_source, _headers) => {
    /* Initialize locals. */
    let challenge
    let headers
    let logDetails
    let session
    let success

    /* Set headers. */
    headers = _headers
    // console.log('HEADERS', headers)

    /* Build log details. */
    logDetails = {
        source: _source,
        i18n: _headers['accept-language'],
        client: _headers['user-agent'],
        referer: _headers['referer'],
        host: _headers['host'],
        ip: _headers['x-real-ip'],
        ip_fwd: _headers['x-forwarded-for'],
    }
    // console.info('LOG (api):', logDetails)

    /* Create new challenge (string). */
    // NOTE: Used for (optional) secure authentication.
    challenge = sha256(uuidv4()).slice(0, 40)

    /* Create (new) session. */
    session = {
        _id: uuidv4(),
        ...logDetails,
        challenge,
        isActive: true,
        createdAt: moment().unix(),
        expiresAt: moment().add(1, 'days').unix(),
        killedAt: moment().add(7, 'days').unix(),
    }

    /* Return session. */
    return session
}

const manageSession = async () => {
    const monitor = setInterval(() => {
        console.log('monitoring sessions...')
    }, 60000)


}

export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let body
    let response
    let session
    let sessionid
    let success

    /* Set (request) body. */
    body = await readBody(event)
    // console.log('SESSIONS.POST (body):', body)

    /* Set session id. */
    sessionid = body?.sessionid
    // console.log('SESSION ID', sessionid)

    /* Request session (if available). */
    session = await sessionsDb
        .get(sessionid)
        .catch(err => console.error(err))
    // console.log('SESSION (api):', session)

    /* Validate session. */
    if (!session?.isActive) {
        const source = event.node.req?.url
        const headers = event.node.req?.headers

        session = await createSession(source, headers)
    } else {
        /* Update timestamp. */
        session = {
            ...session,
            expiresAt: moment().add(1, 'days').unix(),
            updatedAt: moment().unix(),
        }

        /* Save (updated) session. */
        success = await sessionsDb
            .put(session)
            .catch(err => console.error(err))
    }
    console.log('SESSION (api):', session)

    /* Save session to database. */
    response = await sessionsDb
        .put(session)
        .catch(err => console.error(err))
    console.log('SAVE/UPDATE SESSION (api):', response)

    /* Update session. */
    session = {
        id: session?._id,
        ...session,
    }

    delete session._id
    delete session._rev

    /* Return session. */
    return session
})
