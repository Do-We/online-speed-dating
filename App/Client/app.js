import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'; 
import AppTEST from './appController.js';
import signin from './Views/signinController.js';
import video from './Views/videoController.js';
import signup from './Views/signupController.js';

Vue.use(VueResource);
Vue.use(VueRouter);

var routes = [

  {
    path: '/',
    component: AppTEST
  },  
  {
    path: '/signin',
    component: signin
  },
  {
    path: '/video',
    component: video
  },
  {
    path: '/signup',
    component: signup
  }
];


const router = new VueRouter({
  routes
});



const app = new Vue({
  router
}).$mount('.app');

