<template>
    <f7-page>
        <f7-navbar title="Page Not Found" backLink="Back"></f7-navbar>

        <img src="https://i.imgur.com/AZFRPTR.png" class="img-header" alt="Page Header">

        <f7-list class="list-header">
            <f7-list-item link="/" title="Back to Start"></f7-list-item>
        </f7-list>

        <f7-block strong>
            <p>
                Oops! We're sorry, but your requested content could not be found.
            </p>
        </f7-block>
    </f7-page>
</template>

<script>
import { f7Page, f7Navbar, f7Block, f7List, f7ListItem } from 'framework7-vue'

export default {
    components: {
        f7Page,
        f7Navbar,
        f7Block,
        f7List,
        f7ListItem,
    },
}
</script>
