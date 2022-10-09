<template>
    <f7-page>
        <f7-navbar backLink="Back"></f7-navbar>

        <f7-block>
            <img src="https://i.imgur.com/Mzvql6p.png" class="coming-soon-img" alt="Under Construction">

            <h3>
                Our team is still hard at work developing this area.
                Here's what's coming soon:
            </h3>

            <ol>
                <li>Buy Bitcoins with a Bank Transfer</li>
            </ol>

        </f7-block>
    </f7-page>
</template>

<script>
import { f7Page, f7Navbar, f7Block } from 'framework7-vue'

export default {
    components: {
        f7Page,
        f7Navbar,
        f7Block,
    },
}
</script>
