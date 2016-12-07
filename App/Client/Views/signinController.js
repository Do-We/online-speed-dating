
import template from './signinTemplate.vue';

const Login = {
  template: template.template,
  data () {
    return {
      username: '',
      password: ''
    }; 
  },
  methods: {
    login: function() {

      this.$http.get('/api/user', {
        params: {
          username: this.username,
          password: this.password
        }, 
      })
      .then((res) => { console.log('request sent'); })
      .catch((err) => console.error(err));
    },
  }
};

export default Login;
