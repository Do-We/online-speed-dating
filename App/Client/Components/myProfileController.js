import temp from '../Templates/myProfileTemplate.vue';
import { mapState } from 'vuex';
import moment from 'moment';

var myProfile = {
  name: 'myProfile',
  template: temp.template,
  data: function() {
    return {
      savedEvents: '',
      match: true
    };
  },
  computed: {
    savedEvents () {
      return this.$store.state.savedEvents;
    }
  },
  created () {
    this.loadUserProfile();
  },
  watch: {
    '$route': 'checkRoute'
  },
  methods: {

  //////part that breaks/////////////////////////////////
    toDate (event) {
      //set current event in store to this, then check if exists in setup array
      this.$store.commit('setNavigatedToEvent', event._id)
      //console.log('navigatedEvent from toDate', this.$store.state.navigatedToEvent)
      this.$router.push('/date/' + event._id + '/active');
    },
  //////////////////////////////////////////////////////

    editProfile () {
      this.$router.push('/myprofile/' + this.username + '/edit');
    },
    setProfileInfo (res) {
      for (var key in res) {
        this[key] = res[key];
      }
    },
    loadUserProfile () {
      if (this.$route.params.id !== this.$store.state.user.username) {
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
    },
    moment (date) {
      return moment(date);
    },
    checkRoute () {
      if (this.$route.params.id !== this.$store.state.user.username) {
        console.error('dont do that HO!');
        this.$router.go(-1);
      } else {
        this.$router.push('/myprofile/' + this.$route.params.id);
      }
    }
  },

};

export default myProfile;