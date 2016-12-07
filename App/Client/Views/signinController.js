
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
<<<<<<< HEAD
        this.$router.push('/profile')

>>>>>>> working on profile page. updated app
=======
        var username = res.body.username;
        console.log(username);
        this.username = username;
        console.log(this.username)
        this.$router.push('/profile');
>>>>>>> working on on page load functionality
      })
      .then((res) => { console.log('request sent'); })
      .catch((err) => console.error(err));
    },
  }
};

export default Login;
