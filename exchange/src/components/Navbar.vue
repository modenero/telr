<template>
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
        <a class="navbar-brand text-primary" href="/">
            Telr <span class="text-info">Exchange</span>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <button class="navbar-toggler" type="button" data-toggle="modal" data-target="#mobileModal" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> -->
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-divider"></li>

                <li class="theme-selector nav-item">
                    <a class="nav-link" href="javascript://" onclick="document.querySelector('body').classList.remove('light'); document.querySelector('body').classList.add('dark');">
                        <i class="fa fa-square" aria-hidden="true"></i>
                    </a>

                    <a class="nav-link" href="javascript://" onclick="document.querySelector('body').classList.remove('dark'); document.querySelector('body').classList.add('light');">
                        <i class="far fa-square" aria-hidden="true"></i>
                    </a>
                </li>

                <li class="nav-divider"></li>

                <li class="nav-item dropdown" id="tokensDropdown">
                    <a href="javascript://" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        {{tokenName}} ({{tokenSymbol}})&nbsp;
                    </a>

                    <ul class="dropdown-menu">
                        <li>
                            <form>
                                <input type="search" class="form-control" id="searchToken" placeholder="Search coins &amp; tokens">
                            </form>
                        </li>

                        <!-- separator -->
                        <li role="separator" class="dropdown-divider"></li>

                        <li>
                            <h5 class="text-center text-info">Featured Tokens</h5>
                        </li>

                        <li class="dropdown-item btn text-primary">
                            Bai Stablecoin <small><small class="text-muted">[ <span class="text-primary">BAI</span> ]</small></small>
                        </li>

                        <li class="dropdown-item btn text-primary">
                            Dai Stablecoin <small><small class="text-muted">[ <span class="text-primary">DAI</span> ]</small></small>
                        </li>

                        <li class="dropdown-item btn text-primary">
                            Tether Stablecoin <small><small class="text-muted">[ <span class="text-primary">USDt</span> ]</small></small>
                        </li>

                        <li class="dropdown-item btn text-primary">
                            USDC Stablecoin <small><small class="text-muted">[ <span class="text-primary">USDC</span> ]</small></small>
                        </li>

                        <!-- separator -->
                        <li role="separator" class="dropdown-divider"></li>

                        <li>
                            <h5 class="text-center text-info">Featured Coins</h5>
                        </li>

                        <li class="dropdown-item btn text-primary">
                            Bitcoin <small><small class="text-muted">[ <span class="text-primary">BCH</span> ]</small></small>
                        </li>

                        <li class="dropdown-item btn text-primary">
                            Bitcoin Legacy <small><small class="text-muted">[ <span class="text-primary">BTC</span> ]</small></small>
                        </li>

                        <li class="dropdown-item btn text-primary">
                            Ethereum <small><small class="text-muted">[ <span class="text-primary">ETH</span> ]</small></small>
                        </li>

                        <!-- separator -->
                        <li role="separator" class="dropdown-divider"></li>

                        <li class="dropdown-item btn text-primary text-center" data-toggle="modal" data-target="#loadMoreModal">
                            Load more coins &amp; tokens...
                        </li>

                        <li class="dropdown-item btn text-primary text-center" data-toggle="modal" data-target="#customAssetModal">
                            Add a custom asset?
                        </li>
                    </ul>
                </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li class="nav-item dropdown">
                    <a href="javascript://" class="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <i class="far fa-user-circle"></i> <span>My Account</span></a>

                    <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-item">
                            <a href="javascript://">
                                <span class="badge badge-success">Badger</span>

                                <strong class="text-info">&nbsp; &nbsp; {{getProfileAddress}}</strong>

                                <span class="text-muted">&nbsp; &middot; &middot; &nbsp;</span>

                                <span class="badge badge-dark">0.013 BCH</span>
                            </a>
                        </li>

                        <!-- separator -->
                        <li role="separator" class="dropdown-divider"></li>

                        <li class="dropdown-item btn text-info">
                            <i class="fa fa-fw fa-piggy-bank"></i>
                            Make a Deposit <small><small class="text-danger">(Telr Wallet)</small></small>
                        </li>

                        <li class="dropdown-item btn text-info">
                            <i class="fa fa-fw fa-money-check-alt"></i>
                            Withdraw Funds <small><small class="text-danger">(Telr Wallet)</small></small>
                        </li>

                        <!-- separator -->
                        <li role="separator" class="dropdown-divider"></li>

                        <li class="dropdown-item btn text-info" @click="connectBadger">
                            <i class="fa fa-fw fa-plug"></i>
                            Connect Badger <small><small class="text-danger">(Plugin Wallet)</small></small>
                        </li>

                        <li class="dropdown-item btn text-info" @click="connectMetamask">
                            <i class="fa fa-fw fa-plug"></i>
                            Connect MetaMask <small><small class="text-danger">(Plugin Wallet)</small></small>
                        </li>

                        <!-- separator -->
                        <li role="separator" class="dropdown-divider"></li>

                        <li class="dropdown-item btn text-info">
                            <i class="fa fa-fw fa-plug"></i>
                            Connect Ledger <small><small class="text-danger">(Hardware Wallet)</small></small>
                        </li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a href="javascript://" class="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-language"></i> English
                    </a>

                    <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-item">
                            <a href="javascript://"><span>English</span></a>
                        </li>

                        <li class="dropdown-item">
                            <a href="javascript://"><span class="text-muted">??????</span></a>
                        </li>

                        <li class="dropdown-item">
                            <a href="javascript://"><span class="text-muted">Espa??ol</span></a>
                        </li>

                        <li class="dropdown-item">
                            <a href="javascript://"><span class="text-muted">?????????</span></a>
                        </li>

                        <li class="dropdown-item">
                            <a href="javascript://"><span class="text-muted">??????????????</span></a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a href="javascript://" class="nav-link text-danger" data-toggle="dropdown" role="button" aria-haspopup="true" data-offset="50,50" aria-expanded="false">
                        <i class="far fa-life-ring"></i>&nbsp;<span>Need Help?</span>
                    </a>

                    <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-item">
                            <a href="https://www.reddit.com/r/Telr" target="_blank">
                                <i class="fab fa-fw fa-reddit-alien" aria-hidden="true"></i>
                                Reddit
                            </a>
                        </li>

                        <li class="dropdown-item">
                            <a href="http://riot.im/app" target="_blank">
                                <i class="far fa-fw fa-comment" aria-hidden="true"></i>
                                <span>[ Matrix ]</span>
                            </a>
                        </li>

                        <li class="dropdown-item">
                            <a href="https://github.com/modenero/telr.exchange" target="_blank">
                                <i class="fab fa-fw fa-github" aria-hidden="true"></i>
                                GitHub
                            </a>
                        </li>

                    </ul>
                </li>
            </ul>
        </div>

        <!-- Load More Modal -->
        <div class="modal fade" id="loadMoreModal" tabindex="-1" role="dialog" aria-labelledby="loadMoreModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-info" id="loadMoreModalLabel">Coins &amp; Tokens</h5>

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">

                        <ul>
                            <li class="dropdown-item btn text-primary">
                                HonestCoin <small><small class="text-muted">[ <span class="text-primary">USDH</span> ]</small></small>
                            </li>

                            <li class="dropdown-item btn text-primary">
                                Spice <small><small class="text-muted">[ <span class="text-primary">SPICE</span> ]</small></small>
                            </li>
                        </ul>

                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Custom Asset Modal -->
        <div class="modal fade" id="customAssetModal" tabindex="-1" role="dialog" aria-labelledby="customAssetModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-info" id="customAssetModalLabel">Custom Assets</h5>

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <p class="text-secondary">
                            Adding a custom asset for trading is very simple.
                        </p>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

export default {
    props: {
        // msg: String
    },
    data: () => {
        return {
            token: null,
        }
    },
    computed: {
        ...mapGetters([
            'getProfileAddress',
        ]),

        ...mapGetters('tokens', [
            'getToken'
        ]),

        tokenName() {
            if (!this.token) {
                return null
            }

            return this.token.title
        },

        tokenSymbol() {
            if (!this.token) {
                return null
            }

            return this.token.symbol
        },

    },
    methods: {
        ...mapActions([
            //
        ]),

        connectBadger() {
            // console.log('TODO: connect Badger')
        },

        connectMetamask() {
            // console.log('TODO: connect MetaMask')
        },

    },
    created: async function () {
        // console.log('PROFILE ADDRESS', this.getProfileAddress)

        /* Retrieve current token. */
        this.token = await this.getToken('0x505A442B3E3E9AEDF06D54572a295F8D64f8F582')
        // console.log('CURRENT TOKEN', this.token)

    },
    mounted: function () {

    },
}
</script>

<style scoped>
@media (max-width:768px) {
    nav {
        background-color: rgba(255, 255, 255, 1.0) !important;
        z-index: 1000;
        /* height: 100px !important; */
    }

    .navbar-collapse {
        position: absolute;
        top: 48px;
        left: 0;
        padding: 5px;
        width: 100vw;
        background-color: rgba(255, 255, 255, 1.0);
    }
}
</style>
