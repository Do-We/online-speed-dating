import Vue from 'vue';
import VueResource from 'vue-resource'; 
import VueRouter from 'vue-router';

import router from './Router/router.js';
import store from './store.js';

import login from './Components/loginController.js';
import profileLink from './Components/profileLinkController.js';

import aboutus from './Components/aboutUsController.js';
import techstack from './Components/techStackController.js';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.component('login', login);
Vue.component('profilelink', profileLink);
Vue.component('aboutus', aboutus);
Vue.component('techstack', techstack);

const app = new Vue({
  store,
  router
}).$mount('.app');
