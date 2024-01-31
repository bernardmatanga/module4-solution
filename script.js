// script.js

(function() {
  // The array of names
  var names = ["John", "Jane", "Jerry", "Jasmine", "Bob", "Alice", "Charlie", "David"];

  // Loop over each name in the array
  for (var i = 0; i < names.length; i++) {
    // Get the current name from the array
    var name = names[i];
    
    // Retrieve the first letter of the current name, convert to lowercase
    var firstLetter = name.charAt(0).toLowerCase();
    
    // Check if the first letter is 'j'
    if (firstLetter === 'j') {
      // If it is, say Good Bye using byeSpeaker
      byeSpeaker.speak(name);
    } else {
      // If it's not, say Hello using helloSpeaker
      helloSpeaker.speak(name);
    }
  }
})();
