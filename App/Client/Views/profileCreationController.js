import temp from './profileCreationTemplate';

var profileCreation = {
  template: temp.template,
  name: profileCreation,
  data: function() {
    return {
      username: this.$route.params.id,
      name: '',
      age: '',
      gender: '',
      location: '',
      profileImg: '',
      userinfo: '',
    }
  },
  methods: {
    setUserInfo: function() {
      var body = {
        name: this.name,
        age: this.age,
        location: this.location,
        profileImg: this.profileImg,
        gender: this.gender,
        userinfo: this.userinfo
      };
      this.$http.post('/api/user', body)
      .then((response) => {

      })
      .catch((err) => {

      });
    },
  }
}