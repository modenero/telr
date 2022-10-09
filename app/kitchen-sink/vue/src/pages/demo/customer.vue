<template>
    <f7-page>
        <f7-navbar title="DEMO ONLY" back-link="Home"></f7-navbar>

        <img src="https://i.imgur.com/f3YtmMs.png" class="img-header" alt="Page Header">

        <f7-list class="list-header">
            <f7-list-item link="/demo/customer/profile" title="My Crypto — Account Center"></f7-list-item>
            <f7-list-item link="/demo/customer/helpdesk" title="Help Desk — LIVE Support Center"></f7-list-item>
            <f7-list-item link="/demo/customer/help" title="Crypto 101 — FREE Education Center"></f7-list-item>
        </f7-list>

        <f7-block>
            <h2>Transaction Details</h2>

            <p>
                Cash In: <strong>$500.00</strong>
                <br />Crypto Out: <strong>0.00148 BTC</strong>
            </p>
        </f7-block>

        <div class="timeline">
            <div class="timeline-item" v-for="event of events">
                <div class="timeline-item-date">{{event.timestamp}} <small>{{event.timeAgo}}</small></div>
                <div class="timeline-item-divider"></div>
                <div class="timeline-item-content">
                    <div class="timeline-item-inner" v-html="event.description"><!-- placeholder --></div>
                </div>
            </div>
        </div>
    </f7-page>
</template>

<script>
/* Import libraries. */
import moment from 'moment'

/* Import Framework modules. */
import {
    f7Page,
    f7Navbar,
    f7BlockTitle,
    f7Block,
    f7List,
    f7ListItem,
//     f7Link
} from 'framework7-vue'

/* Initialize DEMO stages. */
const demoStages = [{
    description: 'Started blockchain <strong>Security and Compliance</strong> verification. <br /><br />Please wait as this process may take a few minutes to complete.',
    timestamp: moment().subtract(13, 'minutes').format('h:mma'),
    timeAgo: '14 mins',
}, {
    description: 'Security and compliance verification <strong>completed successfully!</strong>',
    timestamp: moment().subtract(10, 'minutes').format('h:mma'),
    timeAgo: '11 mins',
}, {
    description: 'Your bitcoin(s) are <strong>now being transferred,</strong> through the blockchain, to your account.',
    timestamp: moment().subtract(10, 'minutes').format('h:mma'),
    timeAgo: '11 mins',
}, {
    description: 'Your bitcoin(s) have been delivered to your account:<br /><code><strong>1NRRJYe64n ... a9KBaNVhkB</strong></code> <br /><br />Blockchain Transaction Id:<br /><code><strong>fe9075f75b ... a48ade0a6d</strong></code> <br /><br />Please wait for blockchain confirmation..',
    timestamp: moment().subtract(9, 'minutes').format('h:mma'),
    timeAgo: '10 mins',
}, {
    description: 'Blockchain confirmation has completed. Your bitcoin(s) are <strong>READY TO SPEND!</strong> <br /><br />Thank you for your business. Please come again.',
    timestamp: moment().add(1, 'minutes').format('h:mma'),
    timeAgo: 'just now',
}]


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
    data: () => {
        return {
            events: [{
                description: 'Your ATM purchase was <strong>completed successfully!</strong> <br /><br />We\'re processing your order now and <strong>your bitcoin(s) will be delivered shortly.</strong> <br /><br />Thank you for your patience.',
                timestamp: moment().subtract(13, 'minutes').format('h:mma'),
                timeAgo: '14 mins',
            }, {
                description: 'Your Bitcoin purchase started at the <strong>Homemade Crypto ATM</strong> located at 1100 Peachtree Rd in Atlanta, GA.',
                timestamp: moment().subtract(14, 'minutes').format('h:mma'),
                timeAgo: '15 mins',
            }],
        }
    },
    methods: {
        /**
         * Run (60-second) Demonstration
         */
        runDemo () {
            /* Security and compliance. */
            setTimeout(() => {
                this.events.unshift(demoStages[0])
            }, 10000) // 10 seconds

            /* Security and compliance COMPLETE. */
            setTimeout(() => {
                this.events.unshift(demoStages[1])
            }, 25000) // 15 seconds

            /* Transferring. */
            setTimeout(() => {
                this.events.unshift(demoStages[2])
            }, 30000) // 5 seconds

            /* Delivered. */
            setTimeout(() => {
                this.events.unshift(demoStages[3])
            }, 40000) // 10 seconds

            /* Confirmed. */
            setTimeout(() => {
                this.events.unshift(demoStages[4])
            }, 60000) // 20 seconds
        },
    },
    mounted: function () {
        console.log('Customer: Transaction Monitor has mounted.')

        /* Run demo. */
        this.runDemo()
    },
}
</script>
