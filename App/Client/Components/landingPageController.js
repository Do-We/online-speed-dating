import temp from '../Templates/landingPageTemplate.vue';

var app = {
  template: temp.template,
  data: function() {
    return {
      msg: 'placeholder', //+ this.$store.state.user.username,
      background: '#'
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