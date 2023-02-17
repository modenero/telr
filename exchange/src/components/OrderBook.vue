<template>
    <div class="">
        <div class="h-full component component-full">
            <div class="component-header text-warning">Order Book</div>

            <div id="orders">
                <div id="orderBookScroll">
                    <table class="table table-condensed table-borderless">
                    <!-- <table class="table table-condensed table-borderless table-order-book"> -->
                        <tr>
                            <td>NEX</td>
                            <td>NEX/USDT</td>
                            <td>USDT</td>
                        </tr>
                        <tr>
                            <td colspan="3" v-html="orders"></td>
                        </tr>
                    </table>

                    <span class="text-3xl text-rose-500 font-medium">
                        Tailwind CSS
                    </span>

                    <MarketFeed />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Import components. */
import MarketFeed from './MarketFeed.vue'

// import Bitcore from 'bitcore-lib-nexa'
import { version } from 'bitcore-lib-nexa'
// import * as HDPrivateKey from 'bitcore-lib-nexa/lib/hdprivatekey'

export default {
    data: () => {
        return {
            orders: []
        }
    },
    created: function () {
        // console.log('ORDER BOOK', Bitcore.Opcode.OP_EQUALVERIFY)
        console.log('ORDER BOOK', version)
        // console.log('ORDER BOOK', HDPrivateKey)
    },
    mounted: function () {
        //
    },
}
</script>
