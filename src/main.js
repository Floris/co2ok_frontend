// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';

import {
  store
} from './store';

// axios csrf settings
import Axios from 'axios'
Axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
Axios.defaults.xsrfCookieName = 'XCSRF-TOKEN';
Axios.defaults.withCredentials = true;
Vue.prototype.$axios = Axios;

import {
  routes
} from './routes';

import App from './App';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
