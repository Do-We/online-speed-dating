import temp from './profileLinkTemplate.vue';
import {mapState} from 'vuex';

const profileLink = {
  name: 'profileLink',
  template: temp.template,
  data () {
    return {
    };
  },
  computed: {
    username () {
      return this.$store.state.username;
    } 
  },

  methods: {
    goToProfile: function() {
      this.$router.push('/profile/' + this.username);
    },   
    editProfile: function() {
      this.$router.push('/profile/' + this.username + '/edit');
    },  
    logout: function() {
      var body = {
        username: '',
        userinfo: '',
        name: '',
        age: '',
        location: '',
        profileImg: '',
        gender: '',
      };
      this.$store.commit('setUser', body);
      this.$router.go('/'); 
      this.$http.get('/auth/logout')
      .then(()=>{

        console.alert('logged out');
      });
    }
  },
};

export default profileLink;