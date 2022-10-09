<template>
    <f7-page>
        <f7-navbar title="DEMO ONLY" backLink="Home"></f7-navbar>

        <img src="https://i.imgur.com/NRtbYlj.png" class="img-header" alt="Page Header">

        <f7-list class="list-header">
            <f7-list-item link="/demo/admin/messenger" title="Customer Help Desk"></f7-list-item>
            <f7-list-item link="/demo/admin/help" title="Telr (Operator) Help Desk"></f7-list-item>
        </f7-list>

        <f7-block>
            <p>
                Customer (+1 212 555-1337)
                <br />has requested $3,000 in Bitcoin (BTC).
            </p>

            <p>
                Your current threshold is set @ $2,500.
            </p>

            <p>
                Would you like to approve this transaction
                <br />(YES / NO)?
            </p>
        </f7-block>

        <f7-list>
            <f7-list-item link="/demo/admin/profile-history" title="Full Profile & History"></f7-list-item>
            <f7-list-item link="/demo/admin/approve" title="Approve Transaction"></f7-list-item>
            <f7-list-item link="/demo/admin/decline" title="Decline Transaction"></f7-list-item>
        </f7-list>

        <f7-block>
            <hr />

            <h2>Customer Quick View</h2>

            <p>
                This customer has made 2 prior transactions in the last 90 days.
            </p>
        </f7-block>

        <f7-list>
            <f7-list-item link="/demo/admin/transaction-1" title="Transaction #1"></f7-list-item>
            <f7-list-item link="/demo/admin/transaction-2" title="Transaction #2"></f7-list-item>
            <f7-list-item link="/demo/admin/transaction-3" title="Transaction #3"></f7-list-item>
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
}
</script>
