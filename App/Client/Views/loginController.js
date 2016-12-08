
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
        console.log(res);
        this.$router.push('/profile/' + res.body.username); 
        })
      .catch((err) => console.error(err));
    },
  },
  name: 'login'
};

export default login;
