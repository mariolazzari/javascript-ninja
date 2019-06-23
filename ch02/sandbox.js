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
console.log("i++", ++i);
