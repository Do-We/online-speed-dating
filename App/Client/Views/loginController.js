
import template from './loginTemplate.vue';

const login = {
  template: template.template,
  data () {
    return {
      username: '',
      password: ''
    }; 
  },
  methods: {
    login: function() {
      this.$http.post('/auth/login', {
        username: this.username,
        password: this.password 
      })
      .then((res) => { 
<<<<<<< HEAD
        this.$router.push('/profile/' + res.body.username);
      })
      .catch((err) => console.error(err)); 
=======
        console.log(res);
        this.$router.push('/profile/' + res.body.username); 
        })
      .catch((err) => console.error(err));
>>>>>>> testing on creation render
    },
  },
  name: 'login'
};

export default login;
