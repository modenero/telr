<template>
    <f7-page>
        <f7-navbar backLink="Back"></f7-navbar>

        <img src="https://i.imgur.com/XufOyxT.png" class="img-header" alt="Page Header">

        <f7-block class="page-header">
            <h3>Find The Closest Bitcoin ATM</h3>

            <p>
                <strong>Enter Your Postal/Area Code:</strong>
                <br /><input type="text" placeholder="Enter your postal/area code here" />
            </p>
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
