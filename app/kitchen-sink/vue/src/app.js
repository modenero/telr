/* Import Vuejs. */
import Vue from 'vue'

/* Import Framework7. */
import Framework7 from 'framework7/framework7.esm.bundle'
import Framework7Vue from 'framework7-vue'

/* Import App. */
import App from './app.vue'

/* Initialize Framework7. */
Framework7.use(Framework7Vue)

/* Initialize Vuejs App. */
export default new Vue({
    /* Root element. */
    el: '#app',
    render: c => c(App),
})
