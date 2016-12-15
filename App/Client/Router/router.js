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

  ///////////////////////////////////////////////////////////////////////////////////
  /////this one breaks if navigated to before event is 'set up'
  //user can enter and THEN LEAVE before setup and setup will run fine
  //if user enters before setup and STAYS, things will break (fed empty arrays)
  //if user leaves IN THE MIDDLE OF A SESSION, things will break (messes up arrays)
  //as of now, user can only enter a room after it is set up and must stay in room
  //need to create a method to bar user from joining a date room before it is 'set up' by admin
  {
    path: '/date/:dateid',
    meta: { requiresAuth: true },
    component: blank,
    children: [
      {
        path: 'active',
        meta: {requiresEventSetup: true}, //adding conditional to check for event setup
        component: activeDate,
      }
    ]
  }
  ///////////////////////////////////////////////////////////////////////////////////

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

  //CHECK IF DATE ROOM IS SET UP
  if (to.matched.some(record => record.meta.requiresEventSetup)) {
    let readyEvents = store.state.readyEvents;
    let navigatedToEvent = store.state.navigatedToEvent;
    if(readyEvents.indexOf(navigatedToEvent) === -1){ //check readyEvents array for navigatedToEvent
      window.alert('Event is not currently set up!');
      next({
        path: '#'
      });
    }
  } else {
    next();
  }

  //NOT CURRENTLY USED
  // if (to.matched.some(record => record.meta.requiresAdmin)) {
  //   // console.log('requres admin', store.state.user);
  //   if (store.state.user) {
  //     // console.log('logged in');
  //     if (store.state.user.admin) {
  //       // console.log('logged in as admin');
  //       next();
  //     } else {
  //       // console.log('logged in but no admin');
  //       next({
  //         path: '/'
  //       });
  //     }
  //   } else {
  //     // console.log('not logged in');
  //     next({
  //       path: '/'
  //     }
  //     );
  //   }
  // }
});

export default router;