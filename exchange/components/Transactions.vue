<template>
    <main class="px-2 py-1 bg-gradient-to-b from-gray-900 to-gray-700 border-2 border-gray-500 rounded-lg">
        <h2 class="text-sm text-yellow-500 font-medium uppercase tracking-widest">
            Your Transactions
        </h2>

        <div class="">
            <ul class="px-5 flex flex-row justify-between text-gray-100 text-sm" role="tablist">
                <li role="presentation" class="nav-item">
                    <a href="javascript://#myTrades" aria-controls="myTrades" role="tab" data-toggle="tab" class="active nav-link" data-original-title="" title="">Trades</a>
                </li>

                <li role="presentation" class="nav-item">
                    <a href="javascript://#myOrders" aria-controls="myOrders" role="tab" data-toggle="tab" class="nav-link" data-original-title="" title="">Orders</a>
                </li>

                <li role="presentation" class="nav-item">
                    <a href="javascript://#myFunds" aria-controls="myFunds" role="tab" data-toggle="tab" class="nav-link" data-original-title="" title="">Funds</a>
                </li>
            </ul>
        </div>

        <div class="">
            <div role="tabpanel" class="text-gray-100" id="myTrades">
                <div>
                    <table class="table table-condensed table-borderless table-my-trades">
                        <thead>
                            <tr class="table-header">
                                <th>Transaction</th>
                                <th>Type</th>
                                <th>USDT</th>
                                <th>NEX</th>
                                <th>NEX/USDT</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td colspan="5" class="text-xs">
                                    Note: Nexa Exchange will only show recent transactions.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div role="tabpanel" class="text-gray-100 text-sm">
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
            </div>

            <div role="tabpanel" class="text-gray-100 text-sm">
                <div>
                    <table class="table table-condensed table-borderless table-funds">
                        <thead>
                            <tr class="table-header">
                                <th>Transaction</th>
                                <th>Type</th>
                                <th>NEX</th>
                                <th>USDT</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td colspan="5" class="text-xs">
                                    Note: Nexa Exchange will only show recent transactions.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>
