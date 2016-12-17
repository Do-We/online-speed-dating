
import template from '../Templates/videoTemplate.vue';
import Vue from 'vue'; 
import { mapState } from 'vuex';

var video = {
  template: template.template,
  data: function () {
    return {
      videoOut: '',
      phone: {},
      session: {},
      yourNumber: 0,
      myNumber: 0
    };
  },

  computed: mapState(['videoOut', 'sessionOut', 'username', 'name', 'phone', 'sessionIn']),

  methods: {
    makePhone: function(myNumber) {
      this.phone = window.phone = PHONE({
        number: myNumber, // listen on username line else Anonymous
        publish_key: process.env.PUBNUB_PUBLISH_KEY,
        subscribe_key: process.env.PUBNUB_SUBSCRIBE_KEY,
        ssl: true 
      });
      var sessionConnected = function(session) {
        console.log('connected with', session);
        this.videoOut = session.video.outerHTML;
      };
      this.phone.ready(function() {
        console.log('phone ready');
      });
      this.phone.receive(function(session) {
        console.log( 'i receieved');
        this.$store.state.videoIn = session;
        session.connected(sessionConnected);
        session.ended(function(idk) {
          console.log('sessionn ended');
        });
      });
    },

    dial (number) {
      var session = this.$store.state.phone.dial(number);
      if (!session) { return; }
    },
    
    initStatePhone () {
      this.$store.commit('initPhone');
    }  
  }
};
export default video;

