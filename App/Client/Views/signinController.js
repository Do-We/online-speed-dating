
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

<<<<<<< HEAD
      this.$http.get('/api/user', {
        params: {
          username: this.username,
          password: this.password
        }, 
=======
      this.$http.get('/api/user', {params: {username: this.username}})
      .then((res) => {
        this.$router.push('/profile')

>>>>>>> working on profile page. updated app
      })
      .then((res) => { console.log('request sent'); })
      .catch((err) => console.error(err));
    },
  }
};

export default Login;
