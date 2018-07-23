/**
 * 积分模块 (和 wallet 使用一致的模块合并到打包)
 */
const Currency = () =>
  import(/* webpackChunkName: 'wallet' */ "@/page/currency/Currency.vue");
const CurrencyRecharge = () =>
  import(/* webpackChunkName: 'wallet' */ "@/page/currency/CurrencyRecharge.vue");
const CurrencyWithdraw = () =>
  import(/* webpackChunkName: 'wallet' */ "@/page/currency/CurrencyWithdraw.vue");

export default [
  {
    path: "/currency",
    component: Currency,
    meta: {
      title: "钱包",
      requiresAuth: true
    }
  },
  {
    path: "/currency/recharge",
    component: CurrencyRecharge,
    meta: {
      title: "充值"
    }
  },
  {
    path: "/currency/withdraw",
    component: CurrencyWithdraw,
    meta: {
      title: "提现"
    }
  }
];
