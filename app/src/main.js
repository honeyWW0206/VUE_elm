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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
