import temp from './profileTemplate.vue';
import { mapState } from 'vuex';

var profile = {
  name: 'profile',
  template: temp.template,
  data: function() {
    return {
      username: this.$route.params.id,
      name: '',
      age: '',
      gender: '',
      location: '',
      profileImg: 'profile_img_here',
      userinfo: '',
    };
  },
  //mapping local variables to state variables
  computed: mapState(['username', 'name', 'age', 'location']),
  methods: {
    setUserInfo: function() {
      var body = {
        '_id': { 
          '$oid': '5848beeedd9d206204a7aab1'
        }, 
        'username': '0',
        'password': '0',
        'userinfo': 'a',
        'name': 'b',
        'age': 0,
        'location': 'c',
        '__v': 0
      };
      console.log('clicked');
      this.$store.commit('setUser', body);
    },
    loadUserProfile: function() {
      console.log('before page loaded ', this.$route.params.id);
      this.$http.get('/api/user', {params: {username: this.$route.params.id }})
      .then((res) => {
        var user = res.body;
        if (user.name || user.age || user.location || user.gender || user.profileImg || user.userinfo) {
          this.name = user.name;
          this.age = user.age;
          this.location = user.location;
          this.gender = user.gender;
          this.profileImg = user.profileImg; 
          this.userinfo = user.userinfo;
        } 
      .catch((err) => console.error(err));
    },
    update: function() {
      this.$router.push('/profileCreate/' + this.username);
    }	
  },
  created: function() {
    console.log(this.$route.params.id);
    this.loadUserProfile();
  }
};

export default profile;