
import template from './signinTemplate.vue';

const Login = {
<<<<<<< HEAD
  name: 'Login',
=======
>>>>>>> working on profile page. updated app
  template: template.template,
  data () {
    return {
      username: '',
      password: ''
    }; 
  },
  methods: {
<<<<<<< HEAD
    // notify: function() {
    //   this.$dispatch('signin-user', this.username);
    // },  
    login: function() {
      // this.notify();
=======
    login: function() {

<<<<<<< HEAD
>>>>>>> working on profile page. updated app
      this.$http.get('/api/user', {
        params: {
          username: this.username,
          password: this.password
        }, 
<<<<<<< HEAD
      })
      .then((res) => { 
        console.log(this.username);
        this.$router.push('/profile');
      })
      .catch((err) => console.error(err));
    }
=======
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
>>>>>>> working on profile page. updated app
  }
};

export default Login;
<<<<<<< HEAD
 
=======
>>>>>>> working on profile page. updated app
