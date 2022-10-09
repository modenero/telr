<template>
    <f7-page>
        <f7-navbar>
            <f7-nav-left>
                <f7-link class="searchbar-enable" data-searchbar=".searchbar-components" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>
            </f7-nav-left>

            <f7-nav-right>
                <f7-link panel-close icon-ios="f7:xmark" icon-aurora="f7:xmark" icon-md="f7:xmark"></f7-link>
            </f7-nav-right>

            <f7-searchbar
                class="searchbar-components"
                search-container=".components-list"
                search-in="a"
                expandable
                :disable-button="!this.$theme.aurora">
            </f7-searchbar>
        </f7-navbar>

        <f7-block>
            <h3>Your Telr Summary</h3>

            <p>
                Bitcoin: <strong class="text-info">$7,500.00</strong>
                <br />Ethereum: $165.00
                <br />Ripple: <strong>$0.50</strong>
            </p>
        </f7-block>

        <f7-block-title>Management Menu</f7-block-title>

        <f7-list>
            <f7-list-item link="/devices/" title="Devices"></f7-list-item>
            <f7-list-item link="/customers/" title="Customers"></f7-list-item>
            <f7-list-item link="/billing/" title="Billing"></f7-list-item>
        </f7-list>

        <f7-block-title>Support Menu</f7-block-title>

        <f7-list>
            <f7-list-item link="/compliance/" title="Compliance"></f7-list-item>
            <f7-list-item link="/providers/logs/" title="Logs"></f7-list-item>
            <f7-list-item link="/providers/settings/" title="Settings"></f7-list-item>
        </f7-list>

        <f7-block-title>More Options</f7-block-title>

        <f7-list>
            <f7-list-item link="/sponsors/" title="Sponsors" view=".view-main" panel-close></f7-list-item>
            <f7-list-item link="/about/" title="About Telr" view=".view-main" panel-close></f7-list-item>
        </f7-list>

        <f7-block>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse faucibus mauris leo, eu bibendum neque congue non.
            </p>
        </f7-block>

    </f7-page>
</template>

<script>
import {
    f7Page,
    f7BlockTitle,
    f7Block,
    f7List,
    f7ListItem,
    f7Link,

    f7Navbar,
    f7NavLeft,
    f7NavTitle,
    f7NavTitleLarge,
    f7NavRight,
    f7Searchbar,
} from 'framework7-vue'

export default {
    components: {
        f7Page,
        f7BlockTitle,
        f7Block,
        f7List,
        f7ListItem,
        f7Link,

        f7Navbar,
        f7NavLeft,
        f7NavTitle,
        f7NavTitleLarge,
        f7NavRight,
        f7Searchbar,
    },
}
</script>
