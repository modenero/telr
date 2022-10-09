/* Foundation */
import User from './pages/user.vue'
import PanelProviders from './pages/panel-providers.vue'
import PanelProfile from './pages/panel-profile.vue'
import PanelProfileSummary from './pages/panel-profile-summary.vue'

/* Providers */
import ProvidersSettings from './pages/providers/settings.vue'

/* Devices */
import Devices from './pages/devices/dashboard.vue'

/* Help */
import HelpStart from './pages/help/start.vue'

/* Profile */
import ProfileWallets from './pages/profile/wallets.vue'

/* Pages */
import About from './pages/about.vue'
import Wallet from './pages/wallet.vue'

/* Compliance */
import ComplianceDashboard from './pages/compliance/dashboard.vue'

/* Trade */
import TradeCash from './pages/trade/cash.vue'
import TradeCrypto from './pages/trade/crypto.vue'
import TradeCreditCard from './pages/trade/credit-card.vue'
import TradeBankTransfer from './pages/trade/bank-transfer.vue'
import TradeGiftCard from './pages/trade/gift-card.vue'

/* FOR DEMONSTRATION PURPOSES ONLY */
import DemoAdminApprove from './pages/demo/admin/approve.vue'
import DemoCustomer from './pages/demo/customer.vue'
import DemoAdminDecline from './pages/demo/admin/decline.vue'
import DemoAdminMessenger from './pages/demo/admin/messenger.vue'
import DemoAdmin from './pages/demo/admin.vue'

/* Default 404. */
import NotFound from './pages/404.vue'

export default [
/*******************************************************************************

   FOUNDATION

*******************************************************************************/

    /* Index */
    {
        path: '/',
        component: User,
    },

    /* Provider's Panel */
    {
        path: '/panel-left/',
        component: PanelProviders,
    },

    /* Profile Panel */
    {
        path: '/panel-right/',
        component: PanelProfile,
    },
    {
        path: '/panel-right-3/',
        component: PanelProfileSummary,
    },


/*******************************************************************************

   PROVIDERS CENTER

*******************************************************************************/

    /* Provider's Settings */
    {
        path: '/providers/settings',
        component: ProvidersSettings,
    },


/*******************************************************************************

   DEVICES

*******************************************************************************/

    /* Dashboard */
    {
        path: '/devices',
        component: Devices,
    },


/*******************************************************************************

   HELP

*******************************************************************************/

    /* Start */
    {
        path: '/help',
        component: HelpStart,
    },


/*******************************************************************************

   PROFILES AREA

*******************************************************************************/

    /* Wallets */
    {
        path: '/profile/wallets/',
        component: ProfileWallets,
    },


/*******************************************************************************

   COMPLIANCE

*******************************************************************************/

    /* Dashboard */
    {
        path: '/compliance/',
        component: ComplianceDashboard,
    },

/*******************************************************************************

   TRADE

*******************************************************************************/

    /* Cash */
    {
        path: '/trade/cash',
        component: TradeCash,
    },

    /* Crypto */
    {
        path: '/trade/crypto',
        component: TradeCrypto,
    },

    /* Credit Card */
    {
        path: '/trade/credit-card',
        component: TradeCreditCard,
    },

    /* Bank Transfer */
    {
        path: '/trade/bank-transfer',
        component: TradeBankTransfer,
    },

    /* Gift Card */
    {
        path: '/trade/gift-card',
        component: TradeGiftCard,
    },

/*******************************************************************************

   PAGES

*******************************************************************************/

    /* About */
    {
        path: '/about/',
        component: About,
    },

    /* Wallet */
    {
        path: '/wallet/',
        component: Wallet,
    },

/*******************************************************************************

   FOR DEMONSTRATION PURPOSES ONLY

*******************************************************************************/

    {
        path: '(/demo/admin/approve)',
        component: DemoAdminApprove,
    },
    {
        path: '(/demo/customer)',
        component: DemoCustomer,
    },
    {
        path: '(/demo/admin/decline)',
        component: DemoAdminDecline,
    },
    {
        path: '(/demo/admin/messenger)',
        component: DemoAdminMessenger,
    },
    {
        path: '(/demo/admin)',
        component: DemoAdmin,
    },

/*******************************************************************************

   Default route (404 page). MUST BE THE LAST

*******************************************************************************/

    {
        path: '(.*)',
        component: NotFound,
    },
]
