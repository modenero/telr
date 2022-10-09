<template>
    <f7-page :page-content="false">
        <f7-navbar>
        <!-- <f7-navbar large largeTransparent :sliding="false"> -->
            <f7-nav-left>
                <!-- Open provider's panel. -->
                <f7-link
                    panel-open="left"
                    icon-ios="f7:briefcase"
                    icon-aurora="f7:briefcase"
                    icon-md="f7:briefcase"
                    v-if="isProvider"
                ></f7-link>
            </f7-nav-left>

            <f7-nav-right>
                <!-- Maximize screen. -->
                <f7-link
                    onclick="openFullscreen()"
                    icon-ios="f7:expand"
                    icon-aurora="f7:expand"
                    icon-md="f7:expand"
                    v-if="isAndroid"
                ></f7-link>

                <!-- Open profile panel. -->
                <f7-link
                    panel-open="right"
                    icon-ios="f7:person"
                    icon-aurora="f7:person"
                    icon-md="material:person"
                ></f7-link>
            </f7-nav-right>

            <!-- <f7-searchbar
                class="searchbar-components"
                search-container=".components-list"
                search-in="a"
                expandable
                :disable-button="!this.$theme.aurora">
            </f7-searchbar> -->
        </f7-navbar>

        <f7-toolbar bottom tabbar>
            <f7-link tab-link="#tab-explore" tab-link-active>Explore</f7-link>
            <f7-link tab-link="#tab-trade">Trade</f7-link>
            <f7-link tab-link="#tab-earn">Earn</f7-link>
        </f7-toolbar>

        <f7-tabs>
            <f7-tab id="tab-explore" class="page-content" tab-active>
                <f7-block>
                    <!-- <h1>Explore Telr</h1> -->

                    <f7-card class="demo-card-header-pic">
                        <f7-card-header class="no-border" valign="bottom" v-bind:style="{ 'background-image': 'url(' + news[5].image + ')' }">
                            {{news[5].heading}}
                        </f7-card-header>
                        <f7-card-content>
                            <p class="date">{{news[5].date}}</p>
                            <p>{{news[5].desc}}</p>
                        </f7-card-content>
                        <f7-card-footer>
                            <f7-link>Like</f7-link>
                            <f7-link :href="news[5].url" external>Read more</f7-link>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="demo-facebook-card">
                        <f7-card-header class="no-border">
                            <div class="demo-facebook-avatar"><img :src="cards[1].avatar" width="34" height="34"/></div>
                            <div class="demo-facebook-name">{{cards[1].name}}</div>
                            <div class="demo-facebook-date">{{cards[1].date}}</div>
                        </f7-card-header>
                        <f7-card-content :padding="false">
                            <img :src="cards[1].image" width="100%"/>
                        </f7-card-content>
                        <f7-card-footer class="no-border">
                            <f7-link>Like</f7-link>
                            <f7-link>Comment</f7-link>
                            <f7-link>Share</f7-link>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="demo-card-header-pic">
                        <f7-card-header class="no-border" valign="bottom" v-bind:style="{ 'background-image': 'url(' + news[4].image + ')' }">
                            {{news[4].heading}}
                        </f7-card-header>
                        <f7-card-content>
                            <p class="date">{{news[4].date}}</p>
                            <p>{{news[4].desc}}</p>
                        </f7-card-content>
                        <f7-card-footer>
                            <f7-link>Like</f7-link>
                            <f7-link :href="news[4].url" external>Read more</f7-link>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="demo-facebook-card">
                        <f7-card-header class="no-border">
                            <div class="demo-facebook-avatar"><img :src="sponsors[2].avatar" width="34" height="34"/></div>
                            <div class="demo-facebook-name">{{sponsors[2].name}}</div>
                            <div class="demo-facebook-date">{{sponsors[2].date}}</div>
                        </f7-card-header>
                        <f7-card-content :padding="false">
                            <img :src="sponsors[2].image" width="100%"/>
                        </f7-card-content>
                        <f7-card-footer class="no-border">
                            <f7-link>Like</f7-link>
                            <f7-link>Comment</f7-link>
                            <f7-link>Share</f7-link>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="demo-card-header-pic">
                        <f7-card-header class="no-border" valign="bottom" v-bind:style="{ 'background-image': 'url(' + news[3].image + ')' }">
                            {{news[3].heading}}
                        </f7-card-header>
                        <f7-card-content>
                            <p class="date">{{news[3].date}}</p>
                            <p>{{news[3].desc}}</p>
                        </f7-card-content>
                        <f7-card-footer>
                            <f7-link>Like</f7-link>
                            <f7-link :href="news[3].url" external>Read more</f7-link>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="demo-facebook-card">
                        <f7-card-header class="no-border">
                            <div class="demo-facebook-avatar"><img :src="sponsors[1].avatar" width="34" height="34"/></div>
                            <div class="demo-facebook-name">{{sponsors[1].name}}</div>
                            <div class="demo-facebook-date">{{sponsors[1].date}}</div>
                        </f7-card-header>
                        <f7-card-content :padding="false">
                            <img :src="sponsors[1].image" width="100%"/>
                        </f7-card-content>
                        <f7-card-footer class="no-border">
                            <f7-link>Like</f7-link>
                            <f7-link>Comment</f7-link>
                            <f7-link>Share</f7-link>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="demo-card-header-pic">
                        <f7-card-header class="no-border" valign="bottom" v-bind:style="{ 'background-image': 'url(' + news[2].image + ')' }">
                            {{news[2].heading}}
                        </f7-card-header>
                        <f7-card-content>
                            <p class="date">{{news[2].date}}</p>
                            <p>{{news[2].desc}}</p>
                        </f7-card-content>
                        <f7-card-footer>
                            <f7-link>Like</f7-link>
                            <f7-link :href="news[2].url" external>Read more</f7-link>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="demo-facebook-card">
                        <f7-card-header class="no-border">
                            <div class="demo-facebook-avatar"><img :src="cards[0].avatar" width="34" height="34"/></div>
                            <div class="demo-facebook-name">{{cards[0].name}}</div>
                            <div class="demo-facebook-date">{{cards[0].date}}</div>
                        </f7-card-header>
                        <f7-card-content :padding="false">
                            <img :src="cards[0].image" width="100%"/>
                        </f7-card-content>
                        <f7-card-footer class="no-border">
                            <f7-link>Like</f7-link>
                            <f7-link>Comment</f7-link>
                            <f7-link>Share</f7-link>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="demo-card-header-pic">
                        <f7-card-header class="no-border" valign="bottom" v-bind:style="{ 'background-image': 'url(' + news[1].image + ')' }">
                            {{news[1].heading}}
                        </f7-card-header>
                        <f7-card-content>
                            <p class="date">{{news[1].date}}</p>
                            <p>{{news[1].desc}}</p>
                        </f7-card-content>
                        <f7-card-footer>
                            <f7-link>Like</f7-link>
                            <f7-link :href="news[1].url" external>Read more</f7-link>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="demo-facebook-card">
                        <f7-card-header class="no-border">
                            <div class="demo-facebook-avatar"><img :src="sponsors[0].avatar" width="34" height="34"/></div>
                            <div class="demo-facebook-name">{{sponsors[0].name}}</div>
                            <div class="demo-facebook-date">{{sponsors[0].date}}</div>
                        </f7-card-header>
                        <f7-card-content :padding="false">
                            <img :src="sponsors[0].image" width="100%"/>
                        </f7-card-content>
                        <f7-card-footer class="no-border">
                            <f7-link>Like</f7-link>
                            <f7-link>Comment</f7-link>
                            <f7-link>Share</f7-link>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="demo-card-header-pic">
                        <f7-card-header class="no-border" valign="bottom" v-bind:style="{ 'background-image': 'url(' + news[0].image + ')' }">
                            {{news[0].heading}}
                        </f7-card-header>
                        <f7-card-content>
                            <p class="date">{{news[0].date}}</p>
                            <p>{{news[0].desc}}</p>
                        </f7-card-content>
                        <f7-card-footer>
                            <f7-link>Like</f7-link>
                            <f7-link :href="news[0].url" external>Read more</f7-link>
                        </f7-card-footer>
                    </f7-card>

                </f7-block>
            </f7-tab>

            <f7-tab id="tab-trade" class="page-content">
                <img src="https://i.imgur.com/gANyuQi.png" class="img-header" alt="Telr.Exchange">

                <f7-block class="page-header">
                    <p>
                        We promise you the <strong>MOST</strong> painless exchange of crypto you've ever made.
                        <strong>GUARANTEED!</strong>
                    </p>

                    <h2>What do you have to offer?</h2>
                </f7-block>

                <f7-list>
                    <f7-list-item link="/trade/cash" title="I have CASH"></f7-list-item>
                    <f7-list-item link="/trade/crypto" title="I have CRYPTO"></f7-list-item>
                    <f7-list-item link="/trade/credit-card" title="I have a CREDIT CARD"></f7-list-item>
                    <f7-list-item link="/trade/bank-transfer" title="I will BANK TRANSFER"></f7-list-item>
                    <f7-list-item link="/trade/gift-card" title="I have a GIFT CARD"></f7-list-item>
                </f7-list>
            </f7-tab>

            <f7-tab id="tab-earn" class="page-content">
                <f7-block>
                    <img src="https://i.imgur.com/Mzvql6p.png" class="coming-soon-img" alt="Under Construction">

                    <h3>
                        Our team is still hard at work developing this area.
                        Here's what's coming soon:
                    </h3>

                    <ol>
                        <li>Bounties</li>
                        <li>Job Postings</li>
                        <li>Rewards</li>
                    </ol>

                </f7-block>
            </f7-tab>

        </f7-tabs>

<!-- Floating Action Buttons (FABs) -->
        <f7-fab position="right-bottom" slot="fixed" style="margin-bottom:50px">
            <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
            <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>

            <f7-fab-buttons position="top">
                <f7-fab-button label="Need help?" href="/help" fab-close>
                    <f7-icon size="20px" ios="f7:question" aurora="f7:question" md="f7:question"></f7-icon>
                </f7-fab-button>

                <!-- <f7-fab-button label="Security Center" href="/security" fab-close>
                    <f7-icon size="24px" ios="f7:lock_shield" aurora="f7:lock_shield" md="f7:lock_shield"></f7-icon>
                </f7-fab-button> -->

                <!-- <f7-fab-button label="Community Chest" href="/community-chest" fab-close>
                    <f7-icon size="20px" ios="f7:gift" aurora="f7:gift" md="f7:gift"></f7-icon>
                </f7-fab-button> -->

                <!-- <f7-fab-button label="Crypto Genie" href="/crypto-genie" fab-close>
                    <f7-icon size="20px" ios="f7:wand_stars" aurora="f7:wand_stars" md="f7:wand_stars"></f7-icon>
                </f7-fab-button> -->

                <f7-fab-button label="My Wallet" href="/wallet" fab-close>
                    <!-- <span style="font-size:1.4em;">Ξ</span> -->
                    <f7-icon size="20px" ios="f7:bitcoin" aurora="f7:bitcoin" md="f7:bitcoin"></f7-icon>
                    <!-- <f7-icon size="20px" ios="f7:creditcard" aurora="f7:creditcard" md="f7:creditcard"></f7-icon> -->
                </f7-fab-button>
            </f7-fab-buttons>
        </f7-fab>

        <!-- <div class="demo-login-screen" :opened="onboardingScreen" @loginscreen:closed="onboardingScreen = false">
            <OnBoarding />
        </div> -->

        <f7-login-screen class="demo-login-screen" :opened="onboardingScreen" @loginscreen:closed="onboardingScreen = false">
            <f7-page login-screen>
                <f7-login-screen-title>Welcome to Telr!</f7-login-screen-title>

                <f7-block-title>STEP #1 — Do you have a dapp browser?</f7-block-title>

                <f7-block>
                    <p class="text-left">
                        Telr requires a <strong>Decentralized Application (DApp) Browser</strong>; as do <strong>MOST</strong> applications on the <strong>NEW</strong> decentralized web.
                    </p>

                    <p class="align-left">
                        Please choose from one of our recommendations below, or feel free to use your own:
                    </p>
                </f7-block>

                <hr width="90%" size="1" color="#cccccc" />

                <f7-list media-list>
                    <f7-list-item
                        link="https://play.google.com/store/apps/details?id=io.metamask"
                        target="_blank"
                        title="MetaMask"
                        after="1M+ users"
                        subtitle="ConsenSys AG"
                        text="Whether you're an experienced user or brand new to blockchain, MetaMask helps you connect to the decentralized web. We're trusted by over a million users across the world."
                    >
                        <img slot="media" src="https://i.imgur.com/93zalQF.png" width="80" />
                    </f7-list-item>

                    <f7-list-item
                        link="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp"
                        target="_blank"
                        title="Trust Browser"
                        after="100K+ users"
                        subtitle="Six Days LLC"
                        text="Trust Wallet is a multi cryptocurrency wallet with Binance DEX support."
                    >
                        <img slot="media" src="https://i.imgur.com/RzJWUNI.png" width="80" />
                    </f7-list-item>

                    <f7-list-item
                        link="#"
                        target="_blank"
                        title="imToken"
                        after="100K+ users"
                        subtitle="ConsenLabs co, ltd."
                        text="imToken is a world-renowned simple, secure and powerful mobile light-wallet for managing Ethereum (ETH), Bitcoin (BTC), EOS, Cosmos ATOM tokens and other digital cryptocurrency assets."
                    >
                        <img slot="media" src="https://i.imgur.com/K0fYSIv.png" width="80" />
                    </f7-list-item>

                    <f7-list-item
                        link="https://play.google.com/store/apps/details?id=org.toshi"
                        target="_blank"
                        title="Coinbase Wallet"
                        after="100K+ users"
                        subtitle="Coinbase"
                        text="Coinbase Wallet is the #1 mobile crypto wallet and Web 3 DApp browser."
                    >
                        <img slot="media" src="https://i.imgur.com/twAptzm.png" width="80" />
                    </f7-list-item>

                    <f7-list-item
                        link="https://play.google.com/store/apps/details?id=com.cipherbrowser.cipher"
                        target="_blank"
                        title="Cipher Browser"
                        after="10K+ users"
                        subtitle="HardFork Inc."
                        text="Cipher Browser is the world's first full-featured mobile Web 3 DApp browser and wallet for the Ethereum blockchain."
                    >
                        <img slot="media" src="https://i.imgur.com/vO0TLA1.png" width="80" />
                    </f7-list-item>

                    <f7-list-item
                        link="https://play.google.com/store/apps/details?id=com.zer0net"
                        target="_blank"
                        title="Zeronet Explorer"
                        after="1K+ users"
                        subtitle="D14na"
                        text="The Zeronet delivers you all the information freedom, identity protection and data privacy that you want from the Internet, but without the creepy funkiness you often see across the Darkweb."
                    >
                        <img slot="media" src="https://i.imgur.com/RasvKRI.png" width="80" />
                    </f7-list-item>
                </f7-list>

                <f7-block-footer>
                    Telr is powered by Modenero
                </f7-block-footer>
            </f7-page>
        </f7-login-screen>

    </f7-page>
</template>

<script>
import {
    f7Block,
    f7Button,
    f7Fab,
    f7FabButton,
    f7FabButtons,
    f7Icon,
    f7Link,
    f7List,
    f7ListButton,
    f7ListInput,
    f7ListItem,
    f7Navbar,
    f7NavLeft,
    f7NavTitle,
    f7NavTitleLarge,
    f7NavRight,
    f7Page,
    f7Searchbar,
    f7Tab,
    f7Tabs,
    f7Toolbar,
    f7Card,
    f7CardHeader,
    f7CardContent,
    f7CardFooter,
    f7LoginScreen,
    f7LoginScreenTitle,
    f7BlockHeader,
    f7BlockTitle,
    f7BlockFooter,
} from 'framework7-vue'

export default {
    components: {
        // OnBoarding,

        f7Block,
        f7Button,
        f7Fab,
        f7FabButton,
        f7FabButtons,
        f7Icon,
        f7Link,
        f7List,
        f7ListButton,
        f7ListInput,
        f7ListItem,
        f7Navbar,
        f7NavLeft,
        f7NavTitle,
        f7NavTitleLarge,
        f7NavRight,
        f7Page,
        // f7Searchbar,
        f7Tab,
        f7Tabs,
        f7Toolbar,
        f7Card,
        f7CardHeader,
        f7CardContent,
        f7CardFooter,
        f7LoginScreen,
        f7LoginScreenTitle,
        f7BlockHeader,
        f7BlockTitle,
        f7BlockFooter,
    },
    data: () => {
        return {
            app: null,
            onboardingScreen: false,

            /* Initialize booleans. */
            isProvider: false,
            isAndroid: false,

            /* NEWS */
            news: [{
                heading: 'Proof Of Keys Less Than A Month Away; HODLERs Will Collectively Stress Test The Crypto Space By Withdrawing Bitcoin (BTC) From Trusted Third Parties',
                date: 'December 12, 2019',
                desc: 'Jan. 3, 2020 is the 11th anniversary of the Bitcoin (BTC) genesis block, and in general, a day of increased enthusiasm across the crypto space. There is now another event that happens on Jan. 3 of every year called Proof of Keys, where HODLERs collectively stress test the crypto space’s trusted third parties by withdrawing…',
                author: 'Zachary Mashiach',
                url: 'https://cryptoiq.co/proof-of-keys-less-than-a-month-away-hodlers-will-collectively-stress-test-the-crypto-space-by-withdrawing-bitcoin-btc-from-trusted-third-parties/',
                image: 'https://i.imgur.com/HZWLmsd.png',
            },{
                heading: 'Bitcoin (BTC) Still the Top Performing Asset Class By Far in 2019 Despite Stock Market at All-Time Highs',
                date: 'December 13, 2019',
                desc: 'Despite the stock market being at all-time highs and Bitcoin (BTC) losing just under half of its value since July, Bitcoin (BTC) is still the top-performing asset class of 2019 by far with a gain of 90% as the year comes to a close. In comparison, the Dow Jones Industrial Average (DJIA) is up 20%…',
                author: 'Crypto.IQ',
                url: 'https://cryptoiq.co/bitcoin-btc-still-the-top-performing-asset-class-by-far-in-2019-despite-stock-market-at-all-time-highs/',
                image: 'https://i.imgur.com/EEBBbCD.png',
            },{
                heading: 'Twitter To Develop a Decentralized Blockchain-Based Social Media Platform',
                date: 'December 14, 2019',
                desc: 'Jack Dorsey, the CEO of Twitter and Square, announced that Twitter will be developing a decentralized blockchain-based social media platform. More specifically, Twitter Chief Technical Officer (CTO) Parag Agrawal will find a leader for a team that will develop this platform. Then the leader will hire everyone else needed. After that, Twitter Inc. will fund…',
                author: 'Zachary Mashiach',
                url: 'https://cryptoiq.co/twitter-to-develop-a-decentralized-blockchain-based-social-media-platform/',
                image: 'https://i.imgur.com/MapZmOx.png',
            },{
                heading: 'Lawyers Call For QuadrigaCX Founder’s Body To Be Exhumed After It Is Discovered That He Previously Ran Ponzi Schemes',
                date: 'December 16, 2019',
                desc: 'The law firm Miller Thomson has requested that the Royal Canadian Mounted Police exhume and perform an autopsy on the body of Gerald Cotten, who is the Founder of QuadrigaCX. Essentially, there is a need to confirm that Cotten is really dead considering the questionable circumstances surrounding his death, which led to the loss of…',
                author: 'Crypto.IQ',
                url: 'https://cryptoiq.co/lawyers-call-for-quadrigacx-founders-body-to-be-exhumed-after-it-is-discovered-that-he-previously-ran-ponzi-schemes/',
                image: 'https://i.imgur.com/OqFNZWJ.png',
            },{
                heading: 'Bitcoin (BTC) Mining Could Drive The Expansion Of Renewable Energy Production',
                date: 'December 16, 2019',
                desc: 'A report from CoinShares Research finds that the Bitcoin (BTC) mining industry heavily uses renewable energy resources like hydropower, wind power, and solar power, and could actually drive the expansion of renewable energy production. Essentially, Bitcoin (BTC) mining farms are often a buyer of last resort for electricity produced by renewable energy sources, meaning they…',
                author: 'Crypto.IQ',
                url: 'https://cryptoiq.co/bitcoin-btc-mining-could-drive-the-expansion-of-renewable-energy-production/',
                image: 'https://i.imgur.com/0V5BpTU.png',
            },{
                heading: 'Could The Chinese Government Cripple The Bitcoin (BTC) Network At A Time Of Their Choosing Now That Sichuan Province Alone Has 54% Of The Global Mining Hash Rate?',
                date: 'December 17, 2019',
                desc: 'An in-depth Bitcoin (BTC) mining analysis from CoinShares Research reveals that 54% of the global Bitcoin (BTC) mining hash rate is located in a single Chinese province, Sichuan and that this is mostly from only seven major mining farms. This seems like an unacceptable level of centralization for Bitcoin (BTC) and begs the question: Can…',
                author: 'Zachary Mashiach',
                url: 'https://cryptoiq.co/could-the-chinese-government-cripple-the-bitcoin-btc-network-at-a-time-of-their-choosing-now-that-sichuan-province-alone-has-54-of-the-global-mining-hash-rate/',
                image: 'https://i.imgur.com/7Qm6s0q.png',
            }],

            /* CARDS */
            cards: [{
                name: 'Satoshi Nakamoto',
                date: 'Monday at 3:47 PM',
                avatar: 'https://i.imgur.com/YLNl0SG.png',
                image: 'https://i.imgur.com/jFj7TsD.png',
            }, {
                name: 'Taylor Monahan',
                date: 'Tuesday at 9:00 PM',
                avatar: 'https://i.imgur.com/AJvW7dB.png',
                image: 'https://i.imgur.com/RsQSJcp.png',
            }],

            /* SPONSORS */
            sponsors: [{
                name: 'Bitcoins & Candies',
                date: 'Wednesday at 11:25 AM',
                avatar: 'https://i.imgur.com/fyHYxen.png',
                image: 'https://i.imgur.com/PsTyDvb.png',
            }, {
                name: 'Bitcoins & Candies',
                date: 'Friday at 1:58 AM',
                avatar: 'https://i.imgur.com/fyHYxen.png',
                image: 'https://i.imgur.com/G5jeLSH.png',
            }, {
                name: 'Garden Fresh Bitcoin',
                date: 'Tuesday at 9:51 AM',
                avatar: 'https://i.imgur.com/CcazhUb.png',
                image: 'https://i.imgur.com/CcazhUb.png',
            }],
        }
    },
    methods: {
        signIn() {
            this.app.dialog.alert(`Username: ${this.username}<br>Password: ${this.password}`, () => {
                this.app.loginScreen.close()
            })
        },
    },
    mounted: function () {
        console.log('Telr.App has mounted.')

        /* Initialize Framework7 application. */
        this.app = this.$f7

        /* Parse the query string for shortcut. */
        if (window.location && window.location.search) {
            /* Set param (remove &). */
            const param = window.location.search.substr(1)

            /* Handle service providers. */
            if (param === 'isProvider') {
                console.info('Enable service provider (left) panel.')

                /* Set flag. */
                this.isProvider = true
            }

            /* Handle shortcuts. */
            if (param.length === 36) {
                /* Demo of Customer experience. */
                if (param === '31cec33e-20b5-4beb-a43e-c7f3c8fd5b0a') {
                    this.app.views.main.router.navigate('/demo/customer')
                }

                /* Demo of Admin experience. */
                if (param === '699b40ab-2aae-4b97-9fd6-9c2dc1a0e295') {
                    this.app.views.main.router.navigate('/demo/admin')
                }
            }
        }
    },

}
</script>
