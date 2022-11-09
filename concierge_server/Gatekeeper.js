/* Require modules. */
const EventEmitter = require('events')
const moment = require('moment')
const PouchDB = require('pouchdb')
const superagent = require('superagent')
const uuidv4 = require('uuid/v4')

/* Add Mango queries to PouchDB. */
PouchDB.plugin(require('pouchdb-find'))

/* Create a custom PouchDB configuration. */
const CustomPouchDB = PouchDB.defaults({
    prefix: '/usr/src/app/data'
})

/**
 * Crypto Manager (Class)
 */
class CryptoManager extends EventEmitter {
    /* Constructor. */
    constructor () {
        console.log('\nCryptoManager started construction @', moment().unix())

        /* Call super. */
        super()

        /* Set bot token. */
        // NOTE: Retrieved from environment variable.
        this.botToken = process.env.SLACK_BOT_TOKEN
    }

    /**
     * Database Initialization
     */
    dbInit () {
        this.dbProviders = new PouchDB('http://telr:Q5uYKWMGF95fAnBi7opL@localhost:5984/providers')
        this.dbTelrDevices = new PouchDB('http://telr:Q5uYKWMGF95fAnBi7opL@localhost:5984/telr_devices')
        this.dbTelrProviders = new PouchDB('http://telr:Q5uYKWMGF95fAnBi7opL@localhost:5984/telr_providers')
        this.dbTelrTxs = new PouchDB('http://telr:Q5uYKWMGF95fAnBi7opL@localhost:5984/telr_txs')
    }

    registration () {
        console.info('\nRegistering event emitters...')

        /**
         * EVENT: Error
         */
        this.on('error', function (_error) {
            console.error('\nSLACK EVENT ERROR:', _error)
        })

        /**
         * EVENT: Database Entry
         */
        // this.on('dbEntry', async function (_body) {
        //     console.info('\nMaking database entry...')
        //
        //     /* Build database entry. */
        //     const dbEntry = {
        //         _id: uuidv4(),
        //         body: _body,
        //         createdAt: moment().valueOf()
        //     }
        //
        //     /* Request new database entry. */
        //     const result = await this.db.put(dbEntry)
        //         .catch(err => this.emit('error', err))
        //
        //     console.log('DB ENTRY RESULT', result)
        // })
    }

    /**
     * Get Device
     *
     * NOTE: This will search all relevant databases for a matching
     *       acccount / address to retrieve a device profile.
     *
     * FIXME: We "should" prevent possibility of retieving "multiple" devices,
     *        possibly "different" profiles for the same account.
     */
    getDevice (_account) {
        // NOTE: Returns a promise.
        return require('./_getDeviceByAccount').bind(this)(_account)
    }

    /**
     * Get Provider
     */
    getProvider (_providerid) {
        // NOTE: Returns a promise.
        return require('./_getProviderById').bind(this)(_providerid)
    }

    /**
     * Send Crypto
     */
    sendCrypto (_txDetails) {
        // NOTE: Returns a promise.
        return require('./_sendCrypto').bind(this)(_txDetails)
    }

}

/* Export class. */
module.exports = CryptoManager
