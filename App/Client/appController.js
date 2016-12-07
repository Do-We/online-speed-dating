import temp from './appTemp.vue';

var app = {
  template: temp.template,
  data: function() {
    return { 
      msg: 'Hello from vue-loader!'
    };
  }
};


export default app;