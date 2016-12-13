import temp from '../Templates/landingPageTemplate.vue';

var app = {
  template: temp.template,
  data: function() {
    return {
      msg: 'Welcome To hell', //+ this.$store.state.user.username,
      background: '../Images/bigdog.jpg'
    };
  },

  methods: {
    TESTpublish: function() {
      this.$http.post('/event/start', {
        eventId: 1234
      })
      .then((res) => {
        var body = res.body;
        this.$store.commit('setUser', body);
      })
      .catch((err) => console.error(err));
    },

    TESTpublash: function() {
      this.$http.post('/event/setup', {
        eventName: 'Menergy'
      })
      .then((res) => {
        var body = res.body;
        this.$store.commit('setUser', body);
      })
      .catch((err) => console.error(err));
    },
  },
};


export default app;