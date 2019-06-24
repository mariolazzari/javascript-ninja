// fx declaration: hoisting
function greet() {
  console.log("Hello");
}

greet();

// fx expression
const speak = function(name = "Mario", time = "morning") {
  console.log(`Good ${time} ${name}`);
};

speak();
speak("Mariarosa");
