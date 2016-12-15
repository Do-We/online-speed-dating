import temp from '../Templates/adminTemplate.vue';
import moment from 'moment';

var admin = {
  template: temp.template,
  data: function () {
    return {
      username: '',
      date: '',
      eventType: '',
      eventName: ''
    };
  },
  computed: {
    allEvents () {
      return this.$store.state.allEvents;
    }
  },

  created () {
    this.$store.commit('initPubNub');
  },

  methods: {
    startEvent(event) {
      this[event._id] = 1;
    },

    /////////////do something here?
    setupEvent(event) { //activeEventHandler.setupEvent (by _id)
      console.log(event._id);
      this.$http.post('/event/setup', {
        _id: event._id //search db for event by _id --> findOne({_id: event._id})
      })
      .then((res) => {
        console.log('setup res', res.body) // --> 'CALL LISTS SO HOT RIGHT NOW'
        //res.body could be something to use as a conditional
        var body = res.body;
        this.$store.commit('setUser', body);
        //commit something else in store and then check it before navigating to event
      })
      .catch((err) => console.error(err));
    },
    //////////////////////////

    endEvent(event) {
      this.$store.state.pubnub.publish({
        message: 'End',
        channel: [event._id]
      });
    },

    incrementRound(event) {
      this.$store.state.pubnub.publish({
        message: this[event._id],
        channel: [event._id]
      });
      this[event._id]++;
    },

    moment: function (date) {
      return moment(date);
    },


//////CREATE A NEW EVENT
    submit () { //submit form from adminTemplate.vue
      var body = {
        username: this.username,
        date: this.date,
        eventType: this.eventType,
        eventName: this.eventName
      }; //send as body obj

      //eventHandler.js
      let dbUrl = '/api/events'; //sends to eventHandler.postEvent
      this.$http.post(dbUrl, body) //creates new model with body and saves to db

      //store.js
      .then((res) => {
        this.$store.commit( 'setNewEvent', res.body);
        //setNewEvent with server res (state.allEvents.push(res.body))
        this.username = '',
        this.date = '',
        this.eventType = '',
        this.eventName = '';  //clear form fields

      })
      .catch((err) => {
        console.error('Something went wrong with POST: ', err);
      });
    }
  },
};

export default admin;