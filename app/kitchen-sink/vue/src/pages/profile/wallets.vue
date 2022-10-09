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
                <div class="title">My Wallets</div>
            </div>
        </div>

        <div class="page-content">
            <div class="block">
                <p>
                    Telr offers compatiblity with over 300+ cryptocurrencies from over 30+ blockchains, including: Bitcoin, Ethereum and Monero.
                </p>

                <h3>Please choose a currency:</h3>
            </div>

            <f7-list>
                <f7-list-item link="/wallet/" title="Bitcoin" view=".view-main" panel-close></f7-list-item>
                <f7-list-item link="/wallet/" title="Bitcoin Cash" view=".view-main" panel-close></f7-list-item>
                <f7-list-item link="/wallet/" title="Ethereum" view=".view-main" panel-close></f7-list-item>
                <f7-list-item link="/wallet/" title="Dai" view=".view-main" panel-close></f7-list-item>
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
}
</script>
