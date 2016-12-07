
import template from './signinTemplate.vue';

const Login = {
  name: 'Login',
  template: template.template,
  data () {
    return {
      username: '',
      password: ''
    }; 
  },
  methods: {
    // notify: function() {
    //   this.$dispatch('signin-user', this.username);
    // },  
    login: function() {
      // this.notify();
      this.$http.get('/api/user', {
        params: {
          username: this.username,
          password: this.password
        }, 
      })
      .then((res) => { 
        console.log(this.username);
        this.$router.push('/profile');
      })
      .catch((err) => console.error(err));
    }
  }
};

export default Login;
 