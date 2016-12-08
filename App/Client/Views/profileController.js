import temp from './profileTemplate.vue';

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
  methods: {
    loadUserProfile: function() {
      console.log('before page loaded ', this.$route.params.id);
      this.$http.get('/api/user', {params: {username: this.$route.params.id }})
      .then((res) => {
        var user = res.body;
          if(user.name || user.age || user.location || user.gender || user.profileImg || user.userinfo){
            this.name = user.name;
            this.age = user.age;
            this.location = user.location;
            this.gender = user.gender;
            this.profileImg = user.profileImg;
            this.userinfo = user.userinfo
          } 
        })
      .catch((err) => console.error(err));
    },
    update: function() {
      this.$router.push( '/' + this.username + '/profile')
    }	
  },
  created: function() {
    this.loadUserProfile();
  }
};

export default profile;