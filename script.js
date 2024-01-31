// script.js

// The array of names
var names = ["John", "Jane", "Jerry", "Jasmine", "Bob", "Alice", "Charlie", "David"];

// Loop over each name in the array
for (var i = 0; i < names.length; i++) {
  // Get the current name from the array
  var name = names[i];
  
  // Check if the name starts with 'J' or 'j'
  if (name.charAt(0).toLowerCase() === 'j') {
    // If it does, say Good Bye using byeSpeaker
    byeSpeaker.speak(name);
  } else {
    // If it doesn't, say Hello using helloSpeaker
    helloSpeaker.speak(name);
  }
}
