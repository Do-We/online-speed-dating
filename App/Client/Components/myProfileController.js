import temp from '../Templates/myProfileTemplate.vue';
import { mapState } from 'vuex';
import moment from 'moment';
import auth from '../Auth/auth.js';


var myProfile = {
  name: 'myProfile',
  template: temp.template,
  data: function() {
    return {
      msg: `${this.$store.state.user.username} Welcome To Do-We!`,
      background: '../Images/background.jpg',
      savedEvents: '',
      match: true,
      user: ''
    };
  },
  computed: {
    savedEvents () {
      return this.$store.state.savedEvents;
    }
  },
  // watch: {
  //   '$route': 'checkRoute'
  // },

  methods: {
    toDate (event) {
      this.$router.push('/date/' + event._id + '/active');
    },
    editProfile () {
      this.$router.push('/myprofile/' + this.username + '/edit');
    },
  },

  // route: {
  //   canActivate() {
  //     console.log('can activate on `LOGIN` route - auth.user.isAuth', auth.user.isAuth)
  //     return auth.user.isAuth;
  //   }
  // }

};

export default myProfile;





// created () {
  //   this.loadUserProfile();
  // },

    // loadUserProfile () {
    //   if(!this.$store.getters.getProfileInfo) {
    //     this.$http.get('/api/user', { params: {username: this.$route.params.id}})
    //     .then((res)=> {
    //       console.log("NEW USER", res.body, this.$store.state);
    //       this.$store.setUser(this.$store.state, res.body);
    //     })
    //   } else {
    //     console.log('ELSE', this.$store.getters.getProfileInfo);
    //     return this.$store.getters.getProfileInfo;
    //   }
    //   // if (this.$route.params.id !== this.$store.state.user.username) {
    //   //   this.$http.get('/api/user', { params: {username: this.$route.params.id}})
    //   //   .then((res)=> {
    //   //     console.log("RES.BODY", res.body);
    //   //     return this.setProfileInfo(res.body);
    //   //   });
    //   // } else {
    //   //   this.setProfileInfo(this.$store.getters.getProfileInfo);
    //   // }
    // },
    // moment (date) {
    //   return moment(date);
    // },
    // checkRoute () {
    //   if (this.$route.params.id !== this.$store.state.user.username) {
    //     console.error('dont do that HO!');
    //     this.$router.go(-1);
    //   } else {
    //     this.$router.push('/myprofile/' + this.$route.params.id);
    //   }
    // }
