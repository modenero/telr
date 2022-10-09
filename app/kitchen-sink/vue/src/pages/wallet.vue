<template>
    <div class="page">
        <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner sliding">
                <div class="left">
                    <a href="#" class="link back">
                        <i class="icon icon-back"></i>
                        <span class="if-not-md">Back</span>
                    </a>
                </div>
                <div class="title">Bitcoin Wallet</div>
            </div>
        </div>

        <div class="page-content">
            <div class="block">
                <p>
                    Welcome to your Bitcoin Wallet
                </p>

                <h3>Main Identity</h3>

                <h3>Address: {{address}}</h3>
                <h5>Sig: {{sig}}</h5>

                <h1>1,153.58 <small>mBTC</small></h1>

                <h5>Last Update: 2019.11.10</h5>

                <!-- <hr /> -->

                <h3>Recent Transactions</h3>
            </div>

            <f7-list>
                <f7-list-item link="/data-table/" title="Today - Rcv 843 mBTC"></f7-list-item>
                <f7-list-item link="/data-table/" title="Fiat (Currency)"></f7-list-item>
                <f7-list-item link="/data-table/" title="Notification"></f7-list-item>
                <f7-list-item link="/data-table/" title="Look &amp; Feel"></f7-list-item>
            </f7-list>

            <div class="block">
                <p>
                    This is a right panel page 1
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum!
                    Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {
//     f7Page,
//     f7Navbar,
//     f7BlockTitle,
//     f7Block,
    f7List,
    f7ListItem,
//     f7Link
} from 'framework7-vue'

export default {
    components: {
        // f7Page,
        // f7Navbar,
        // f7BlockTitle,
        // f7Block,
        f7List,
        f7ListItem,
        // f7Link,
    },
    data: () => {
        return {
            address: '1Web3Legacy',
            currency: 'ETH',
            sig: 'n/a',
        }
    },
    methods: {
        init () {
            if (window.ethereum) {
                // Request account access if needed
                console.log('window.ethereum')

                try {
                    /* Enable Ethereum. */
                    // NOTE: EIP 1102 (https://eips.ethereum.org/EIPS/eip-1102)
                    ethereum.enable()

                    /* Initialize (injected) provider. */
                    window.telr.ethereum = new ethers
                        .providers.Web3Provider(window.ethereum)
                } catch (error) {
                    // User denied account access...
                }
            } else if (window.web3) { // Legacy dapp browsers...
                console.log('window.web3')

                /* Initialize (injected) provider. */
                window.telr.web3 = new ethers
                    .providers.Web3Provider(window.web3.currentProvider)

                // NOTE: This legacy object always exposes User Accounts.
            } else { // Non-dapp browsers...
                alert('Non-Ethereum browser detected.\nYou should consider trying MetaMask!')
            }

            // console.log('TELR', window.telr)

            /* Initialize web provider. */
            let web3Provider = null

            /* Set web3 provider. */
            if (window.telr.ethereum) {
                web3Provider = window.telr.ethereum
            } else if (window.telr.web3) {
                web3Provider = window.telr.web3
            }

            /* Validate web3 provider. */
            if (web3Provider) {
                // web3Provider.listAccounts().then((accounts) => {
                //     console.log('ACCOUNTS', accounts)
                // })

                /* Set signer. */
                let signer = web3Provider.getSigner()
                // console.log('SIGNER', signer)

                // console.log('ADDRESS', await signer.getAddress())
                signer.getAddress()
                    .then(address => {
                        console.log('ADDRESS', address)

                        /* Update address. */
                        this.address = address
                    })

                /* Set request nonce. */
                const nonce = moment().unix()

                /* Set authorization message (optionally used for un-locking salt). */
                const authMsg = `TELR GUARDIAN is ACTIVE
[ Challenge #${nonce} ]

You MUST first SIGN this message
to complete identity verification.`

                /* Set un-locking message (used for signature of key holder). */
                // NOTE: This message should be as i18n-friendly as possible.
                // NOTE: `00` is prepended for readability.
                // FIXME: Review this format for ANY possible improvements.
                //        Do we want to use EIP712: TypedData??
                // const unlockMsg = 'Telr Wallet for Bitcoin Cash (BCH)'
                // const unlockMsg = 'Telr Wallet - Bitcoin Cash (BCH)'
                // const unlockMsg = 'Un-locking Telr Wallet - Bitcoin Cash (BCH)'
                // const unlockMsg = `TELR CLOUD VAULT
                const unlockMsg = `TELR SMART WALLET
Authorization Request

Please SIGN to UNLOCK`

                /* Request message signature. */
                signer.signMessage(authMsg)
                    .then(sig => {
                        console.log('SIGNATURE', sig)

                        /* Update signature. */
                        this.sig = sig

                        /* Generate new private key. */
                        const pk = ethers.utils.keccak256(sig)
                        console.log('NEW PRIVATE KEY', pk)
                    })
                    .catch(err => {
                        console.error('Oops! Looks like the user said NO!', err.message)

                        // FIXME: We need to properly parse this error message.
                    })

            }

        }
    },
    mounted: function () {
        // console.log('WE ARE MOUNTED!!')
        this.init()
    },
}
</script>
