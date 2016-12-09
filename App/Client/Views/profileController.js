import temp from './profileTemplate.vue';
import { mapState } from 'vuex';

var profile = {
  name: 'profile',
  template: temp.template,
  data: function() {
    return {
      username: '',
      userinfo: '',
      name: '',
      age: '',
      location: '',
      profileImg: '',
      gender: ''
    };
  },
  created () {
    this.loadUserProfile();
  },
  watch: {
    '$route': 'loadUserProfile'
  },
  methods: {
    editProfile: function() {
      this.$router.push('/profile/' + this.username + '/edit');
    }, 
    setProfileInfo: function(res) {
      for (var key in res) {
        this[key] = res[key]; 
      }
    },
    loadUserProfile: function() {
      if (this.$route.params.id !== this.$store.state.username) {
        this.$http.get(
          '/api/user',
          { params: {username: this.$route.params.id}}
        )
        .then((res)=>{
          this.setProfileInfo(res.body); 
        });
      } else {
        this.setProfileInfo(this.$store.getters.getProfileInfo); 
      } 
    }
  },
};

export default profile;