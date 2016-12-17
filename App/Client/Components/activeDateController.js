
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
      //subscribe our pubnub to the channels that control calls
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




    ///////////////////////////////////////////////////////////////////

    // LIKING

    //in this controller and view
    //add method that updates user likes store with an http post
    //update user schema to hold likes
    //can ignore the dislike button and putting any logic behind it

      //likeCallee: function(){
        //var callee = this.$store.state.user.callList[this.$store.state.currentRound];
        //this.$http.post('some new route', callee);
      //};


    // GETTING MATCHES

    //in a seperate controller and view
    //make a get request to a new route
    //add handler in route listener to loop through all request user's likes and find liked usernames in db
    //check each liked user's likes
    //if liked user's likes includes current user, push liked user's name to a temp array
      //possible extra step
      //add a 'matches' property on user schema
      //check if user matches already includes liked user
      //if not in matches, save to matches AND push to temp array
      //send matches and temp array with string 'you have new matches'
    //send array as response

      //this.$http.get('some new route', this.$store.state.user)
      //.then(function(response){ this.$store.commit('some new method', response})

    ///////////////////////////////////////////////////////////////////


  //   TESTcurrentRoundButton: function(number) {
  //     this.$store.state.pubnub.publish({
  //       message: number,
  //       channel: [this.event._id.$oid]
  //     });
  //   },

  //   TESTendEventButton: function() {
  //     this.$store.state.pubnub.publish({
  //       message: 'End',
  //       channel: [this.event._id.$oid]
  //     });

  //   },
  //   TESTSoloView: function() {
  //     this.$store.state.soloViewFlag = !this.$store.state.soloViewFlag;
  //   }
  // },

  name: 'activeDate'
};

export default activeDate;