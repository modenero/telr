<template>
    <f7-page>
        <f7-navbar :title="nickname"></f7-navbar>

        <!-- <f7-block-title>{{nickname}}</f7-block-title> -->

        <f7-block>
            <h3>Your Telr Summary</h3>

            <p>
                Bitcoin: <strong class="text-info">$7,500.00</strong>
                <br />Ethereum: $165.00
                <br />Ripple: <strong>$0.50</strong>
            </p>
        </f7-block>

        <!-- <f7-block>
            <p>
                You can close it by clicking outsite or on this link: <f7-link panel-close>close me</f7-link>.
            </p>
        </f7-block> -->

        <f7-list>
            <f7-list-item link="/profile/wallets/" title="My Wallets"></f7-list-item>
            <f7-list-item link="/profile/settings/" title="Settings"></f7-list-item>
        </f7-list>

        <f7-block-title>Telr LIVE Demo</f7-block-title>

        <f7-list>
            <f7-list-item link="/demo/customer/" title="Customer Experience" view=".view-main" panel-close></f7-list-item>
            <f7-list-item link="/demo/admin/" title="Admin Experience" view=".view-main" panel-close></f7-list-item>
        </f7-list>

        <f7-block-title>Advanced Options</f7-block-title>

        <f7-list>
            <f7-list-item link="/affiliates/" title="Affiliate Manager" view=".view-main" panel-close></f7-list-item>
            <f7-list-item link="/pos/" title="POS Wallet" view=".view-main" panel-close></f7-list-item>
        </f7-list>

        <f7-block-title>Resource Center</f7-block-title>

        <f7-list>
            <f7-list-item link="/calculators/" title="Calculators" view=".view-main" panel-close></f7-list-item>
            <f7-list-item link="/learn/" title="Crypto 101" view=".view-main" panel-close></f7-list-item>
            <f7-list-item link="/faq/" title="FAQ" view=".view-main" panel-close></f7-list-item>
        </f7-list>

        <f7-list>
            <f7-list-item link="/provider/welcome/" title="Are you a service provider?" view=".view-main" panel-close></f7-list-item>
        </f7-list>
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
    f7Link,
} from 'framework7-vue'

export default {
    components: {
        f7Page,
        f7Navbar,
        f7BlockTitle,
        f7Block,
        f7List,
        f7ListItem,
        f7Link,
    },
    data: () => {
        return {
            nickname: 'Guest User'
        }
    },
}
</script>
