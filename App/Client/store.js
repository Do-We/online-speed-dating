import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import PubNub from 'pubnub';
import PHONE from './Dependencies/pubnubWebrtc.js';

Vue.use(Vuex);
Vue.use(VueResource);

var store = new Vuex.Store({
  state: {
    videoOutSrc: '',
    myVideoSrc: '',
    beforeEventFlag: true,
    soloViewFlag: true,
    calleeReadyFlag: false,
    activeViewFlag: true,
    beforeStartFlag: true,
    datePartnerOffline: false,
    currentRound: null,
    savedEvents: [],
    allEvents: [],
    navigatedToEvent: null, //sets on link navigation to an event
    readyEvents: [], //new storage for set up events here
    user: {
      username: '',
    }
  },
  getters: {
    getProfileInfo(state, name) {
      return state.user;
    }
  },
  mutations: {
    clearState(state) {
      console.log('this is before ', state);
      var initialState = {
        videoOutSrc: '',
        myVideoSrc: '',
        beforeEventFlag: true,
        soloViewFlag: true,
        calleeReadyFlag: false,
        activeViewFlag: true,
        beforeStartFlag: true,
        datePartnerOffline: false,
        currentRound: null,
        savedEvents: [],
        allEvents: [],
        navigatedToEvent: null,
        readyEvents: [],
        user: {
          username: '',
        }
      };

      for (var key in initialState) {
        state[key] = initialState[key];
      }

      state = initialState;
      console.log('this is after ', state);
      if (state.pubnub) {
        state.pubnub.stop();
      }
      if (state.phone) {
        state.phone.hangup();
        state.phone.mystream.getVideoTracks()[0].stop();
      }

    },
    setUser(state, obj) {
      for (var key in obj) {
        state.user[key] = obj[key];
        state.isCallerFlag = obj.callList[0];
      }
    },
    setSavedEvents(state, arr ) {
      var tempSavedEvents = [];
      for (var i = 0; i < arr.length; i++) {
        Vue.http.get('/api/user/events', { params: { _id: arr[i] } })
          .then((res) => {
            if (res.body._id) {
              tempSavedEvents.push(res.body);
            }
            state.savedEvents = tempSavedEvents;
          })
          .catch((err) => console.log(err));
      }
    },
    initPubNub(state) {
      state.pubnub = new PubNub({
        publishKey: process.env.PUBNUB_PUBLISH_KEY,
        subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
        ssl: true
      });
      state.pubnub.addListener({
        message: function(message) { //listens for event from signalCalleeReady on activedatectrl
          if (message.message === 'Ready') {
            console.log('GotReadyMessageFromPartner');
            state.calleeReadyFlag = true;
          } else if (message.message === 'End') {
            console.log('Got End MESSAGE');
            state.activeViewFlag = false;
            state.pubnub.stop();
            state.phone.hangup();

            state.phone.mystream.getVideoTracks()[0].stop();
          } else {
            console.log('This is round', message.message);
            state.phone.hangup();
            if (state.currentRound) {
              state.pubnub.unsubscribe({
                channels: ['eventId' + state.user.callList[state.currentRound]]
              });
            }
            state.currentRound = message.message;
            //possibly check if corresponding user is online currently--use presence to do this
            //alternatively use failed call error handling
            if (state.user.callList[0]) {
              state.pubnub.subscribe({
                channels: ['eventId' + state.user.callList[state.currentRound]]
              });
            }
            state.soloViewFlag = true;
            state.beforeStartFlag = false;
            state.calleeReadyFlag = false;
          }
        },
      });
    },
    initPhone(state) {
      state.phone = window.phone = new PHONE({
        number: state.user.username,
        publish_key: process.env.PUBNUB_PUBLISH_KEY,
        subscribe_key: process.env.PUBNUB_SUBSCRIBE_KEY,
        ssl: true
      });

      var sessionConnected = function (session) {
        console.log('connected with', session);
        state.videoOutSrc = session.video.src;
      };
      state.phone.ready(function() {
        state.myVideoSrc = URL.createObjectURL(phone.mystream);
        console.log('phone ready');
      });
      state.phone.receive(function (session) {
        state.soloViewFlag = false;
        console.log( 'i receieved');
        state.videoIn = session;

        session.connected(sessionConnected);
        session.ended(function(idk) {
          console.log('session ended');
        });
      });
    },
    signalEventReadyFlags(state) {
      state.beforeStartFlag = true;
      state.beforeEventFlag = false;
      state.soloViewFlag = true;
      state.activeEventFlag = true;
    },
    signalCalleeReadyFlag(state) {
      state.calleeReadyFlag = true;
    },

    setEvents (state, arr) {
      state.user.events = arr;
    },

    setAllEvents (state, arr) {
      state.allEvents = arr;
    },

    setNewEvent (state, event) {
      state.allEvents.push(event);
    },

    addToReadyEvents (state, event) {
      state.readyEvents.push(event);
    }, //push set up events to an array

    setNavigatedToEvent (state, event) {
      state.navigatedToEvent = event;
    }, //set navigated to last link clicked on

    addToSavedEvents(state, arr) {
      state.savedEvents = arr;
    }
  }
});

export default store;