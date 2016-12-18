import temp from '../Templates/eventsTemplate.vue';
/* date formatting library */
var moment = require('moment'); 


var events = {
  template: temp.template,
  data () {
    return {
      username: this.username,
      date: this.date,
      result: '',
      joined: '',
    };
  },
  created () {
    this.getEvents();
  },
  computed: {
    result () {
      return this.$store.state.allEvents;
    }
  },

  methods: {
    getEvents () {
      this.$http.get('/api/events')
      .then((res) => { 
        this.$store.commit('setAllEvents', res.body);
      })
      .catch((err) => { console.error('There was an err with your GET request, ', err); });
    },

    hasNotJoined (event) {
      if (this.$store.state.user.events.indexOf(event._id) === -1) {
        return true;
      }
      return false;
    },

    join (event) {
      //handles event creation within users array 
      var currentUserEvents = this.$store.state.user.events;
      var savedUserEvents = this.$store.state.savedEvents;

      //check to see if event is in curren users event list
      if (currentUserEvents.indexOf(event._id) === -1 ) {
        //if not, then 
        //put current users username on to given event's usernames property's array
        event.usernames.push(this.$store.state.user.username);
        //put eventID on current users events property's array
        currentUserEvents.push(event._id);
        this.$store.commit('setEvents', currentUserEvents);

        //update user on db with new events array
        this.$http.put('/api/user', this.$store.state.user)
        .then((res) => { 
          savedUserEvents.push(event);
          //update savedEvents with new event added to user
          this.$http.put('/api/events', event)
          .then((res) => { 
          //update event on db with new usernames array
            this.$store.commit('addToSavedEvents', savedUserEvents);
            this.getEvents(); 
          })
          .catch((err) => { console.error('error ', err); });
        })
        .catch((err) => { console.error('error ', err); });

      }
    },

    moment: function (date) {
      return moment(date);
    }
  }
};



export default events;