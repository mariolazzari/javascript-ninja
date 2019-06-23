// variables
const name = "Mario";
let age = 44;

console.log(name, age);

var old = "old";
console.log(old);

var old = "old2";
console.log(old);

// strings
const hello = "Ciao";
console.log(hello);

// string concatenaition
console.log(hello + " " + name);
console.log(`${hello} ${name}`);

// getting chars
console.log(`${name} starts with ${name[0]}`);

// string length
console.log(`${name} is ${name.length} chars long.`);

// string methods

console.log(`${name} upper case: ${name.toUpperCase()}`);
let result = name.toLowerCase();
console.log(`${name} lower case: ${result}`);

const index = name.indexOf("a");
console.log(`${name}'s a is index ${index}`);

// string methods
let mail = "mario.lazzari@gmail.com";
const lastIndex = mail.lastIndexOf("m");
console.log("Last index of m:", lastIndex);
// slice: substring
const slice = mail.slice(0, 10); // form a to b
console.log(`${mail} first 10 chars: ${slice}`);
const sub = mail.substr(2, 10); // from a for b chars
console.log(`${mail} from 2 for 10 chars: ${sub}`);
const replaced = mail.replace("a", "X"); // replace first  a with X
console.log(replaced);

// numners
let radius = 10;
const pi = 3.14;

// ** -> exp
console.log("Area:", radius ** 2 * pi);

// increments
let i = 10;
i++;
i += 10;
console.log("i", i);

// template litterals
const author = "Mario";
const title = "Best of 2019";
const likes = 12;
console.log(`${author} wrote ${title}: ${likes} likes`);

// Arrays
let ninjas = ["Mario", "Maria", "Mariarosa"];

// array methods
const joins = ninjas.join("-");
console.log("Ninjas joined:", joins);
const maryIndex = ninjas.indexOf("Mariarosa");
console.log(`${ninjas[2]} is ninja ${maryIndex}`);
const added = ninjas.concat(["Roberto", "Marianna"]);
console.log("Added ninjas:", added);
const push = ninjas.push("Roberto"); // return the length on new array
console.log("Push one ninja:", push, ninjas);
const pop = ninjas.pop(); // remove last
console.log("Popped ninja:", pop);

// null and undefined
let ageNotDef;
console.log("Undefined:", ageNotDef, ageNotDef + 3, `age is ${ageNotDef}`);
ageNotDef = null;
console.log("Null:", ageNotDef, ageNotDef + 3, `age is ${ageNotDef}`);

// boolean
console.log("Mail includes @:", mail.includes("@"));

const x = 30;
const y = "30";
console.log("x == y:", x == y);
console.log("x === y:", x === y);

// types convertion
let score = "100";
console.log("add 1 to string:", score + 1);
console.log("add 1 to number:", Number(score) + 1);
console.log("Type of score:", typeof score);
console.log("Empty string is:", Boolean(""));
