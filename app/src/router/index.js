import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
import elmNavigation from '../components/elmNavigation/elmNavigation';
export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: elmNavigation}
  ]
})
