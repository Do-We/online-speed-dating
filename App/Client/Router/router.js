import Vue from 'vue';
import VueRouter from 'vue-router';

import landingPage from '../Components/landingPageController.js';
import login from '../Components/loginController.js';
import admin from '../Components/adminController.js';
import video from '../Components/videoController.js';
import signup from '../Components/signupController.js';
import profile from '../Components/profileController.js';
import profileCreate from '../Components/profileCreationController.js';
import blank from '../Templates/blank.vue';
import store from '../store.js';
import events from '../Components/eventsController.js';
import activeDate from '../Components/activeDateController.js';
import myProfile from '../Components/myProfileController.js';


var routes = [
  {
    path: '/',
    component: landingPage
  },
  {
    path: '/video',
    meta: { requiresAuth: true },
    component: activeDate,
  },
  {
    path: '/signup',
    component: signup
  },
  {
    path: '/Admin',
    // meta: { requiresAdmin: true },
    component: admin,
  },
  {
    path: '/myprofile/:id',
    meta: { requiresAuth: true },
    component: blank,
    children: [
      {
        path: 'edit',
        name: 'edit',
        component: profileCreate,
      },
      {
        path: '',
        component: myProfile,
      }
    ]
  },
  {
    path: '/profile/:id',
    meta: { requiresAuth: true },
    component: profile,
  },
  {
    path: '/events',
    component: blank,
    meta: { requiresAuth: true },
    children: [
      // {
      //   path: '/signup',
      //   component: eventSignup,
      //   meta: { requiresAuth: true },
      // },
      {
        path: '',
        component: events,
      }
    ]
  },
  {
    path: '/date/:dateid',
    meta: { requiresAuth: true },
    component: blank,
    children: [
      {
        path: 'active',
        component: activeDate,
      }
  //     {
  //       path: '/inactive',
  //       component: inactiveController,
  //     },
    ]
  }
];

const router = new VueRouter({
  routes
});

//we are not refreshing state to get changes on user between pages, if they are already logged in.
//refactor later to set flags on certain routes that require updated user info
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Vue.http.post('auth/authorize')
      .then((res) => {
        console.log(res.body);
        store.commit('setUser', res.body);
        store.commit('setSavedEvents', res.body.events);
        next();
      })
      .catch((res) => {
        window.alert('you must log in to do that');
        next(false);
      });
  } else {
    next(); // make sure to always call next()!
  }
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    // console.log('requres admin', store.state.user);
    if (store.state.user) {
      // console.log('logged in');
      if (store.state.user.admin) {
        // console.log('logged in as admin');
        next();
      } else {
        // console.log('logged in but no admin');
        next({
          path: '/'
        });
      }
    } else {
      // console.log('not logged in');
      next({
        path: '/'
      }
      );
    }

  }
});

export default router;