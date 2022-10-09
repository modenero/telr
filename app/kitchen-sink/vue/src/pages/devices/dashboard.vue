<template>
    <div class="page">
        <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner sliding">
                <div class="left">
                    <a href="#" class="link back">
                        <i class="icon icon-back"></i>
                        <span class="if-not-md">Back</span>
                    </a>
                </div>
                <div class="title">Devices</div>
            </div>
        </div>

        <div class="page-content">
            <f7-block-title>DASHBOARD</f7-block-title>

            <f7-block strong>
                <p>
                    Easily manage your devices from this area.
                </p>
            </f7-block>

            <f7-list>
                <f7-list-item link="/data-table/" title="Crypto (Currency)" panel-close></f7-list-item>
                <f7-list-item link="/data-table/" title="Fiat (Currency)" panel-close></f7-list-item>
                <f7-list-item link="/data-table/" title="Notification" panel-close></f7-list-item>
                <f7-list-item link="/data-table/" title="Look &amp; Feel" panel-close></f7-list-item>
            </f7-list>

            <f7-block strong>
                <p>
                    This is a right panel page 1
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum!
                    Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!
                </p>
            </f7-block>
        </div>
    </div>
</template>

<script>
import {
    f7Block,
    f7BlockTitle,
    f7Row,
    f7Col,
    f7List,
    f7ListItem,
} from 'framework7-vue'

export default {
    components: {
        f7Block,
        f7BlockTitle,
        f7Row,
        f7Col,
        f7List,
        f7ListItem,
    },
}
</script>
