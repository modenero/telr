<template>
    <main class="my-2 px-2 py-1 bg-gradient-to-b from-gray-900 to-gray-700 border-2 border-gray-500 rounded-lg">
        <h2 class="text-lg text-yellow-500 font-medium">
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
                                <td colspan="5" class="table-note">Note: Nexa Exchange will only show recent transactions.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div role="tabpanel" class="text-gray-100" id="myOrders">
                <div>
                    <table class="table table-condensed table-borderless table-orders">
                        <thead>
                            <tr class="table-header">
                                <th>NEX/USDT</th>
                                <th>Available volume</th>
                                <th>Expires in</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td colspan="4" class="table-note">There are no orders here.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div role="tabpanel" class="text-gray-100" id="myFunds">
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
                                <td colspan="5" class="table-note">Note: Nexa Exchange will only show recent transactions.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>
