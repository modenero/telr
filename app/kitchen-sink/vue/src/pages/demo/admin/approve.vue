<template>
    <f7-page>
        <f7-navbar title="DEMO ONLY" backLink="Back"></f7-navbar>

        <f7-block>
            <h3>Transaction Approved!</h3>

            <p>
                Thank you for using Bitcoins &amp; Candies ATM.
            </p>
        </f7-block>

        <f7-list>
            <f7-list-item link="/identity-search/" title="Identity Search" view=".view-main" panel-close></f7-list-item>
            <f7-list-item link="/watchlists/" title="Watchlists" view=".view-main" panel-close></f7-list-item>
        </f7-list>

        <f7-block>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!
            </p>
        </f7-block>
    </f7-page>
</template>

<script>
import {
    f7Page,
    f7Navbar,
    f7BlockTitle,
    f7Block,
    f7List,
    f7ListItem,
//     f7Link
} from 'framework7-vue'

export default {
    components: {
        f7Page,
        f7Navbar,
        f7BlockTitle,
        f7Block,
        f7List,
        f7ListItem,
        // f7Link,
    },
}
</script>
