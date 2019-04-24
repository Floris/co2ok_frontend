// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  routes
} from './routes';
import App from './App'

// import {
//   library
// } from '@fortawesome/fontawesome-svg-core'

// import {
//   faCoffee
// } from '@fortawesome/free-solid-svg-icons'

// import {
//   faFacebook,
//   faJs
// } from '@fortawesome/free-brands-svg-icons'

// import {
//   FontAwesomeIcon
// } from '@fortawesome/vue-fontawesome'

// library.add(faCoffee, faFacebook, faJs);


// Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
