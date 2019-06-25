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

// return value
const circleArea = function(radius) {
  return Math.PI * radius ** 2;
};
console.log("Area radius 2 = ", circleArea(2));

// arrow functions
const circleArea2 = radius => Math.PI * radius ** 2;
console.log("Area radius 2 = ", circleArea2(2));

const greet2 = () => console.log("Hello");
greet2();

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }

  return total;
};
console.log(bill([10, 10], 0.2));

// foreach
const people = ["Mario", "Mariarosa", "Maria"];
people.forEach(p => console.log(p));

// calback
const logPerson = (person, id) => console.log(`${id} - ${person}`);
people.forEach(logPerson);

let html = ``;
people.forEach(p => (html += `<li style="color:purple">${p}</li>`));
document.querySelector(".people").innerHTML = html;
