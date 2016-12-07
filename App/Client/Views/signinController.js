
import template from './signinTemplate.vue';

const Login = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  name: 'Login',
=======
>>>>>>> working on profile page. updated app
=======
  name: 'Signin',
>>>>>>> working on profile controller and template. working on sending props between children
=======
  name: 'Login',
>>>>>>> editing files to get username input to be passed between components
  template: template.template,
  data () {
    return {
      username: '',
      password: ''
    }; 
  },
  methods: {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    notify: function() {
      this.$broadcast()
    },  
    login: function() {
>>>>>>> working on profile controller and template. working on sending props between children
=======
    // notify: function() {
    //   this.$dispatch('signin-user', this.username);
    // },  
    login: function() {
      // this.notify();
>>>>>>> editing files to get username input to be passed between components
      this.$http.get('/api/user', {
        params: {
          username: this.username,
          password: this.password
        }, 
<<<<<<< HEAD
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
=======
      })
      .then((res) => { 
        console.log(this.username);
>>>>>>> working on profile controller and template. working on sending props between children
        this.$router.push('/profile');
      })
      .catch((err) => console.error(err));
<<<<<<< HEAD
    },
>>>>>>> working on profile page. updated app
=======
    }
>>>>>>> working on profile controller and template. working on sending props between children
  }
};

export default Login;
<<<<<<< HEAD
<<<<<<< HEAD
 
=======
>>>>>>> working on profile page. updated app
=======
 
>>>>>>> working on profile controller and template. working on sending props between children
