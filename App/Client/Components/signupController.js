import temp from '../Templates/signupTemplate.vue';

var signup = {
  template: temp.template,
  data: function() {
    return {
      username: '',
      password: ''
    };
  },

  methods: {
    signup: function($http) {
      var body = {
        username: this.username,
        password: this.password,
        admin: false
      };

      this.$http.post('/api/user', body)
      .then((response) => {
        this.login();
      })

      .catch((err) => {
        alert('username already exists');
      });
    },
    //need to port over login function correctly from login controller
    login: function() {
      this.$http.post('/auth/login', {
        username: this.username,
        password: this.password
      })
      .then((res) => {
        var body = res.body;
        this.$http.get('/api/events')
          .then((res) => {
            this.$store.commit('setAllEvents', res.body);
          });
        this.$store.commit('setUser', body);
        this.$store.commit('setSavedEvents', body.events);
        this.$router.push('/')
      })
      .catch((err) => console.error(err));
    }
  }
};

export default signup;