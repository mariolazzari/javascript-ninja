// Objects

const blogs = [
  { title: "comment 1", likes: 11 },
  { title: "comment 2", likes: 3 }
];

let user = {
  name: "Mario",
  age: 44,
  mail: "mario.lazzario@gmail.com",
  location: "Riva del Garda",
  blogs,
  login: function() {
    console.log("User logged in.");
  },
  logout() {
    console.log("User logged out.");
  },
  logBlogs() {
    console.log("User blogs:");
    this.blogs.forEach(blog => console.log(blog.title, blog.likes));
  }
};

console.log("user:", user);
console.log("user name:", user.name);
user.age = 35;
console.log("user age:", user.age);
console.log(user["name"]);
user["name"] += " Lazzari";
console.log(user.name);
console.log(typeof user);

// methods
user.login();
user.logout();
user.logBlogs();

// Math
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// randon
const random = Math.random();
console.log(random);
console.log(random * 100);

// reference
let score1 = 50;
let score2 = score1;
console.log(`score 1: ${score1} - score 2: ${score2}`);
score1 = 100;
console.log(`score 1: ${score1} - score 2: ${score2}`);

const user1 = { name: "Mario", age: 44 };
const user2 = user1;
console.log(user1, user2);
user1.age = 33;
console.log(user1, user2);
