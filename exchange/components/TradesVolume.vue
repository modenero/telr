<script setup>
/* Import modules. */
import moment from 'moment'

const today = computed(() => {
    return moment().format('M/d')
})

const yesterday = computed(() => {
    return moment().subtract(1, 'days').format('M/d')
})

</script>

<template>
    <main class="px-2 py-1 bg-gradient-to-b from-gray-900 to-gray-700 border-2 border-gray-500 rounded-lg">
        <h2 class="text-sm text-yellow-500 font-medium uppercase tracking-widest">
            Trades &amp; Volume
        </h2>

        <div class="">
            <ul class="pb-1 px-3 flex flex-row justify-around text-xs text-gray-100 border-b-2 border-gray-700" role="tablist">
                <button role="presentation" class="nav-item">
                    <span class="active nav-link" data-original-title="" title="">
                        Trades
                    </span>
                </button>

                <button role="presentation" class="nav-item">
                    <span class="nav-link" data-original-title="" title="">
                        Volume
                    </span>
                </button>
            </ul>
        </div>

        <div class="">
            <div role="tabpanel" class="" id="trades">
                <div class="overflow-y-scroll h-[220px] text-gray-100 text-sm">
                    <table class="table table-condensed table-borderless table-trades">
                        <thead>
                            <tr class="table-header">
                                <th>Time</th>
                                <th>USDT</th>
                                <th>NEX/USDT</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody class="text-xs">
                            <tr>
                                <td>12:44:52 AM {{today}}</td>
                                <td>
                                    <span cdata-toggle="tooltip" data-placement="bottom" title="10.000000000">10.000</span>
                                </td>
                                <td>
                                    <span class="buy">0.000205414</span>
                                </td>
                                <td>
                                    <a href="https://etherscan.io/tx/0x70a322dcad5da800e439c5c36c3e4aa3a218e186dfe48fd72c045aa0652fa198" target="_blank">
                                        <i class="fa fa-external-link-square-alt" aria-hidden="true"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    12:42:00 AM {{today}}
                                </td>
                                <td>
                                    <span cdata-toggle="tooltip" data-placement="bottom" title="9.999999990">10.000</span>
                                </td>
                                <td>
                                    <span class="buy">0.000190172</span>
                                </td>
                                <td>
                                    <a href="https://etherscan.io/tx/0x7656494e4ee100422688f364b45ca58a3e5d6213ef982828ddd2c2b3e990c515" target="_blank">
                                        <i class="fa fa-external-link-square-alt" aria-hidden="true"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    7:09:16 PM {{yesterday}}
                                </td>
                                <td>
                                    <span cdata-toggle="tooltip" data-placement="bottom" title="10.000000000">10.000</span>
                                </td>
                                <td>
                                    <span class="buy">0.000190309</span>
                                </td>
                                <td>
                                    <a href="https://etherscan.io/tx/0x8c08711f1b46b3f41c475112ed7572fa2c52dc27ac5d09bab1e2160b51f074ac" target="_blank">
                                        <i class="fa fa-external-link-square-alt" aria-hidden="true"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    7:00:44 PM {{yesterday}}
                                </td>
                                <td>
                                    <span cdata-toggle="tooltip" data-placement="bottom" title="10.000000000">10.000</span>
                                </td>
                                <td>
                                    <span class="buy">0.000189355</span>
                                </td>
                                <td>
                                    <a href="https://etherscan.io/tx/0x3aa3383af5fff454855f02e11ccbaa6285cb25f3cd2d6aecd7842b00358a4115" target="_blank">
                                        <i class="fa fa-external-link-square-alt" aria-hidden="true"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    6:13:12 PM {{yesterday}}
                                </td>
                                <td>
                                    <span cdata-toggle="tooltip" data-placement="bottom" title="25.000000000">25.000</span>
                                </td>
                                <td>
                                    <span class="buy">0.000162390</span>
                                </td>
                                <td>
                                    <a href="https://etherscan.io/tx/0x7c5eaf0a07000fba9efc76883750a500883ed42753cae0d38ec0d23923b0ca69" target="_blank">
                                        <i class="fa fa-external-link-square-alt" aria-hidden="true"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" class="table-note">
                                    Note: Nexa Exchange will only show recent transactions.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <section class="grid grid-cols-3 text-gray-100 text-sm font-medium">
                <h3>Token</h3>
                <h3>Daily</h3>
                <h3>last</h3>

            </section>

            <section class="grid grid-cols-3 text-gray-100 text-xs font-medium">
                <div>
                    <a href="javascript://#RHOC-BCH">RHOC</a>
                </div>
                <div>
                    200000
                </div>
                <div class="text-danger">
                    0.000151421
                </div>

                <div>
                    <a href="javascript://#PLR-BCH">PLR</a>
                </div>
                <div>119621</div>
                <div class="text-danger">0.000162000</div>

                <div>
                    <a href="javascript://#VERI-BCH">VERI</a>
                </div>
                <div>112</div>
                <div class="text-success">0.127800000</div>

                <div>
                    <a href="javascript://#%C2%A2-BCH">¢</a>
                </div>
                <div>0</div>
                <div class="text-success"></div>
            </section>

        </div>
    </main>
</template>
