import temp from './signupTemplate.vue';

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
        password: this.password
      };

      this.$http.post('/api/user', body)
      .then((response) => {
        this.$router.push('/signin');
      })
      .catch((err) => {
        alert('username already exists');
                    // this.$router.push('/signup');
      });
    }
  }
};

export default signup;