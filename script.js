MAX_RGB_CHANNEL_NUMBER = 255;
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hey there',
    styles: {
      backgroundColor: 'rgb(0,0,0)',
    }
  },
  methods: {
      changeBackgroundColor: function() {
        this.styles.backgroundColor = `
          rgb(
            ${this.generateChannelRandomNumber()},
            ${this.generateChannelRandomNumber()},
            ${this.generateChannelRandomNumber()}
          )`;
      },
      generateChannelRandomNumber: function () {
          return Math.floor(Math.random()*MAX_RGB_CHANNEL_NUMBER);
      }
  }
})