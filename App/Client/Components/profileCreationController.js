import temp from '../Templates/profileCreationTemplate.vue';
import { mapState } from 'vuex';

var profileCreation = {
  template: temp.template,
  name: 'edit',
  data: function() {
    return {
      user: this.$store.state.user,
      basic: {
        firstname: {value: this.$store.state.user.firstname},
        lastname: {value: this.$store.state.user.lastname},
        location: {value: this.$store.state.user.location},
        email: {value: this.$store.state.user.email},
        phone: {value: this.$store.state.user.phone}
      },
      personal: {
        divorced: this.$store.state.user.divorced,
        kids: this.$store.state.user.kids,
        description: this.$store.state.user.description
      },
      interests: {
        reading: {value: this.$store.state.user.reading},
        cooking: {value: this.$store.state.user.cooking},
        traveling: {value: this.$store.state.user.traveling},
        outdoor: {value: this.$store.state.user.outdoor},
        food: {value: this.$store.state.user.food},
        crafting: {value: this.$store.state.user.crafting},
        partying: {value: this.$store.state.user.partying},
        animals: {value: this.$store.state.user.animals},
        culture: {value: this.$store.state.user.culture},
      },
      picked: ''
    };
  },

  watch: {
    '$route': 'checkRoute'
  },

  methods: {
    checkRoute () {
      if (this.$route.params.id !== this.$store.state.user.username) {
        console.error('dont do that HO!');
        this.$router.go(-1);
      } else {
        this.$router.push('/myprofile/' + this.$route.params.id + '/edit');
      }
    },

    updateUserBasicInfo: function(userProp, updatedInfo) {
      var body = {
        username: this.$store.state.user.username,
      };
      body[userProp] = updatedInfo;
      this.$http.put('/api/userBasic', body)
      .then((response) => {
        this.$store.commit('setUser', body);
      })
      .catch((err) => {
      });
    },

    updateUserPersonalInfo: function(personal) {
      // var body = {username: this.$store.state.user.username};
      // body[personal] = this.$data.personal;
      var body = this.$data.personal;
      body['username'] = this.$store.state.user.username;
      console.log('body', body)

      this.$http.put('/api/userPersonal', body)
      .then((response) => {
        console.log('response', response)
        console.log('body again', body)
        this.$store.commit('setUser', body);
      })
      .catch((err) => {
      });
    },

    updateInterests: function(interest) {
      this.$data.interests[interest].value = !this.$data.interests[interest].value;
      var body = {username: this.$store.state.user.username};
      body[interest] = this.$data.interests[interest].value;
      console.log('body: ', body);
      this.$http.put('/api/userInterests', body)
      .then((response) => {
        console.log('response', response)
        console.log('body again', body)
        this.$store.commit('setUser', body);
      })
      .catch((err) => {
      });
    }
  },
};

export default profileCreation;