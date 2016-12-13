
import template from '../Templates/activeDateTemplate.vue';

const activeDate = {
  template: template.template,

  data () {
    return {
      number: null
    };
  },

  methods: {
    signalEventReady: function() {
      //create instance of PubNub
      this.$store.commit('initPubNub');
      //create our Phone instance
      this.$store.commit('initPhone');
      //subscribe our pubnub to the channels tha t control calls
      this.$store.state.pubnub.subscribe({
        channels: [this.$route.params.dateid],
        withPresence: true, // also subscribe to presence instances.
      });
      this.$store.commit('signalEventReadyFlags');
    },

    signalCalleeReady: function() {
      this.$store.state.pubnub.publish({

        message: 'Ready',
        channel: 'eventId' + this.$store.state.user.username

      });
      this.$store.commit('signalCalleeReadyFlag');
    },

    callCallee: function() {
      this.$store.state.phone.dial(this.$store.state.user.callList[this.$store.state.currentRound]);
    },

    TESTcurrentRoundButton: function(number) {
      this.$store.state.pubnub.publish({
        message: number,
        channel: [this.event._id.$oid]
      });
    },

    TESTendEventButton: function() {
      this.$store.state.pubnub.publish({
        message: 'End',
        channel: [this.event._id.$oid]
      });

    },
    TESTSoloView: function() {
      this.$store.state.soloViewFlag = !this.$store.state.soloViewFlag;
    }
  },

  name: 'activeDate'
};

export default activeDate;