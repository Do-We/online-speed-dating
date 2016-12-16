import temp from '../Templates/profileLinkTemplate.vue';
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
      return this.$store.state.user.username;
    }
  },

  methods: {
  },
};

export default profileLink;