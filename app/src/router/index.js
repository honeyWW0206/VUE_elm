import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);
import elmNavigation from '../components/elmNavigation/elmNavigation';
import lmy from '../components/lxw/Lmy';
import balance from '../components/lxw/MyBalance'
import balanceExplain from '../components/lxw/balanceExplain'
import LmyDiscounts from '../components/lxw/LmyDiscounts'
import downloadELM from  '../components/lxw/noTimeHb/downloadELM'
import noTimeHb from  '../components/lxw/noTimeHb/noTimeHb'
import  changePackage from '../components/lxw/noTimeHb/changePackage'
import  logIN from '../components/lxw/userinfo/logIN'
import reset from '../components/lxw/userinfo/reset'
import profile from "../components/lxw/userinfo/profile"
import commend from "../components/lxw/noTimeHb/commend"
import mynumber from "../components/lxw/myNumber"
import  info from "../components/lxw/userinfo/info"
import  address from "../components/lxw/userinfo/address"
import newress  from "../components/lxw/userinfo/newRess"
import addDetail from "../components/lxw/userinfo/addDetail"
import setusername from "../components/lxw/userinfo/setusername"
import service from "../components/lxw/service/service"
import  questionDetail from  "../components/lxw/service/questionDetail"
import  order from "../components/lxw/order/order"
import orderDetails from "../components/lxw/order/orderDetails"
import HBexplain from "../components/lxw/noTimeHb/HBexplain"


import orderDeta from "../components/lxw/order/orderDeta"

export default new Router({
  routes: [
    {path: '/', redirect: '/profile'},
    {path: '/home', component: elmNavigation},
    //最初 我的登录注册页面
    {path:"/profile",component:profile},
    //密码登录页面
    {path:'/logIN',component:logIN},
    //密码修改
    {path:'/reset',component:reset},
    //我的页面
    {path:'/lmy',component:lmy},
    //我的余额
    {path:'/balance',component:balance},
    //我的积分
    {path:'/mynumber',component:mynumber},
    //余额说明
    {path:'/balanceExplain',component:balanceExplain},
  //  我的优惠
    {path:'/LmyDiscounts',component:LmyDiscounts},
  //  提示下载饿了么app界面
    {path:'/downloadELM',component:downloadELM},
    //查看历史红包
    {path:'/noTimeHb',component:noTimeHb},
  //  红包说明
    {path:"/HBexplain",component:HBexplain},
  //  兑换红包组件
    {path:'/changePackage',component:changePackage},
  //  推荐有奖组件
    {path:'/commend',component:commend},
  //账户信息页面
    {path:'/info1',component:info},
  //  编辑地址页面
    {path:"/address",component:address},
  //  新增地址
    {path:"/newRess",component:newress},
  // 搜索地址
    {path:"/addDetail",component:addDetail},
  //  修改用户名
    {path:"/setusername",component:setusername},
  //  服务中心
    {path:"/service",component:service},
  //  服务中心里的问题说明
    {path:"/questionDetail",component:questionDetail},

  //  订单列表
    {path:"/order",component:order},
  //  订单详情
    {path:"/orderDetails",component:orderDetails},
    // {path:"/orderDeta",component:orderDeta}

  ]
})
