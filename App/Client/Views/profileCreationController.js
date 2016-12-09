import temp from './profileCreationTemplate.vue';
import { mapState } from 'vuex';

var profileCreation = {
  template: temp.template,
  name: 'edit',
  data: function() {
    return {
      username: '',
      name: '',
      age: '',
      gender: '',
      location: '',
      profileImg: '',
      userinfo: '',
    };
  },
  computed: mapState([
    'username', 'name', 'age', 'gender', 'location', 'userinfo', 'profileImg'
  ]),
  methods: {
    setUserInfo: function() {
      var body = {
        username: this.username,
        name: this.name,
        age: this.age,
        location: this.location,
        profileImg: this.profileImg,
        gender: this.gender,
        userinfo: this.userinfo,
      };
      this.$http.put('/api/user', body)
      .then((response) => {
        this.$store.commit('setUser', body);
        this.$router.push('/profile/' + this.username);
      })
      .catch((err) => {

      });
    },
  },
};

export default profileCreation;