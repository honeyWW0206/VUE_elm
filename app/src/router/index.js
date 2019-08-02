import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 选择城市
import elmNavigation from '../components/elmNavigation/elmNavigation';
// 查询城市
import searchCity from '../components/searchCity/searchCity';


// 外卖容器主页面
import MainP from '../components/mainP/mainP';
// 外卖主页附近商家
import mSite from '../components/msite/msite';
// 搜索商店
import searchGood from '../components/searchGood/searchGood';
// 我的订单
import myOrder from '../components/order/order';
// 个人中心
import Mine from '../components/mine/mine';

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: elmNavigation},
    {path: '/searchCity', name: 'searchCity', component: searchCity},
    {
      path: '/mainP',
      component: MainP,
      children: [
        {path: 'msite', component: mSite},
        {path: 'searchgood', component: searchGood},
        {path: 'order', component: myOrder},
        {path: 'mine', component: Mine},
      ]
    }
  ]
})
