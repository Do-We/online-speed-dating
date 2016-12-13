import temp from '../Templates/techStackTemplate.vue';

var techstack = {
  template: temp.template,
  data: function() {
    return {
      vue: '../Images/bigdog.jpg',
      mongo: '../Images/bigdog.jpg',
      express: '../Images/bigdog.jpg',
      pubnub: '../Images/bigdog.jpg'
    };
  },
};

export default techstack;