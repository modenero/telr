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
                <div class="title">Logs</div>
            </div>
        </div>

        <div class="page-content">
            <f7-list>
                <f7-list-item link="/contacts-list/" title="Admin" view=".view-main" panel-close></f7-list-item>
                <f7-list-item link="/contacts-list/" title="Master" view=".view-main" panel-close></f7-list-item>
            </f7-list>

            <div class="block">
                <p>This is a right panel page 1</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
            </div>
        </div>
    </div>
</template>

<script>
import {
//     f7Page,
//     f7Navbar,
//     f7BlockTitle,
//     f7Block,
    f7List,
    f7ListItem,
//     f7Link
} from 'framework7-vue'

export default {
    components: {
        // f7Page,
        // f7Navbar,
        // f7BlockTitle,
        // f7Block,
        f7List,
        f7ListItem,
        // f7Link,
    },
}
</script>
