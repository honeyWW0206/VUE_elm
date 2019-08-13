import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 选择城市
import elmNavigation from '../components/elmNavigation/elmNavigation';
// 查询城市
import searchCity from '../components/searchCity/searchCity';


// 外卖容器主页面
import shop from '../components/shop/shop';
// 外卖主页附近商家
import mSite from '../components/msite/msite';
// 搜索商店
import searchGood from '../components/searchGood/searchGood';
// 商品首页分类
import Food from '../components/shop/food/food';
/*
  商店相关逻辑页面
 */
// 商家首页
import shopDetail from '../components/shopDetail/shopDetail';
// 单个商品详情
import goodInfo from '../components/shopDetail/goodInfo/goodInfo';
// 店家详情
import shopDesc from '../components/shopDetail/shopDesc/shopDesc';
// 提交订单
import confirmOrder from '../components/confirmOrder/confirmOrder';
import remark from '../components/confirmOrder/children/remark/remark';
import invoice from '../components/confirmOrder/children/invoice/invoice';
import payment from '../components/confirmOrder/children/payment/payment';
import userValidation from '../components/confirmOrder/children/userValidation/userValidation';
// import chooseAddress from '../components/confirmOrder/children/chooseAddress/chooseAddress';
const chooseAddress = r => require.ensure([], () => r(require('../components/confirmOrder/children/chooseAddress/chooseAddress')), 'chooseAddress');
const addAddress = r => require.ensure([], () => r(require('../components/confirmOrder/children/chooseAddress/children/addAddress/addAddress')), 'addAddress');
const searchAddress = r => require.ensure([], () => r(require('../components/confirmOrder/children/chooseAddress/children/searchAddress/searchAddress')), 'searchAddress');

// 我的订单
import myOrder from '../components/order/order';
// 个人中心
import Mine from '../components/mine/mine';

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: elmNavigation},
    {path: '/searchCity', name: 'searchCity', component: searchCity},
    {
      path: '/shop',
      component: shop,
      children: [
        {path: 'msite', component: mSite},
        {path: 'food', component: Food},
        {path: 'shopDetail', component: shopDetail},
        {path: 'goodInfo', component: goodInfo},
        {path: 'shopDesc', component: shopDesc},
        // 搜索
        {path: 'searchGood', component: searchGood},
        // 订单
        {path: 'order', component: myOrder},
        // 我的
        {path: 'mine', component: Mine},
      ]
    },
    // 购物车
    {
      path: "/confirmOrder",
      component: confirmOrder,
      children: [{
        path: 'remark', //订单备注
        component: remark,
      }, {
        path: 'invoice', //发票抬头
        component: invoice,
      }, {
        path: 'payment', //付款页面
        component: payment,
      },
        {
        path: 'userValidation', //用户验证
        component: userValidation,
      }, {
        path: 'chooseAddress', //选择地址
        component: chooseAddress,
        children: [{
          path: 'addAddress', //添加地址
          component: addAddress,
          children: [{
            path: 'searchAddress', //搜索地址
            component: searchAddress,
          }]
        },]
      },]
    },
  ]
})
