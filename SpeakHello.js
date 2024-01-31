// SpeakHello.js

(function(window) {
  var helloSpeaker = {};

  helloSpeaker.speakWord = "Hello";

  helloSpeaker.speak = function(name) {
    console.log(this.speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;

})(window);
