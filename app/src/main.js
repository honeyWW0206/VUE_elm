// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

//引入Vuex
import Vuex from 'vuex';
Vue.use(Vuex);

// 引入vue-axIos
import axios from 'axios'
import VueAxios from 'vue-axios'

const store=new Vuex.Store({
  state:{
    address:{},
  },
  mutations:{
    saveAddress(state,payload){
      state.address=payload;
      // console.log(state.address)
    }
  }
});

axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    config.withCredentials = true; // 允许携带token ,这个是解决跨域产生的相关问题

    return config;
  },
  error => {
    return Promise.error(error);
  });
Vue.use(VueAxios,axios);

// 样式重置
import '@/assets/css/reset.css';
// 页面调整
import '@/assets/js/resize.js';

// 引入 vAnt
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
