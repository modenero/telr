<template>
    <main class="px-2 py-1 bg-gradient-to-b from-gray-900 to-gray-700 border-2 border-gray-500 rounded-lg">
        <h2 class="text-lg text-yellow-500 font-medium">
            Price Chart
        </h2>

        <div id="chartPrice">
            <div class="chart-quote">
                <div></div>
            </div>

            <div class="">
                <ul class="px-5 flex flex-row justify-between text-gray-100 text-sm" role="tablist">
                    <li role="presentation" class="nav-item">
                        <a aria-controls="1h" role="tab" data-toggle="tab" class="nav-link" data-original-title="" title="">
                            1M
                        </a>
                    </li>

                    <li role="presentation" class="nav-item">
                        <a aria-controls="2h" role="tab" data-toggle="tab" class="nav-link" data-original-title="" title="">
                            1H
                        </a>
                    </li>

                    <li role="presentation" class="nav-item">
                        <a aria-controls="6h" role="tab" data-toggle="tab" class="nav-link" data-original-title="" title="">
                            6H
                        </a>
                    </li>

                    <li role="presentation" class="nav-item">
                        <a aria-controls="24h" role="tab" data-toggle="tab" class="active nav-link" data-original-title="" title="">
                            24H
                        </a>
                    </li>

                    <li role="presentation" class="nav-item">
                        <a aria-controls="7d" role="tab" data-toggle="tab" class="nav-link" data-original-title="" title="">
                            7D
                        </a>
                    </li>

                    <li role="presentation" class="nav-item">
                        <a aria-controls="30d" role="tab" data-toggle="tab" class="nav-link" data-original-title="" title="">
                            30D
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <div class="">
                    <div class="price-chart">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
