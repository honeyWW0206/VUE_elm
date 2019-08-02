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

Vue.use(VueAxios,axios);

// 样式重置
import '@/assets/css/reset.css';
// 页面调整
import '@/assets/js/resize.js';

// 引入 vAnt
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

/*
  Vuex状态管理
 */
const store = new Vuex.Store({
  state: {
    userLocation: null,
  },
  mutations: {
    changeUserLocation(state, payload){
      state.userLocation = payload;
    }
  },
  getters: {

  },
  modules: {

  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
