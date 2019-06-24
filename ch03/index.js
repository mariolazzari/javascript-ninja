// for
for (let i = 0; i < 5; i++) {
  console.log("i", i);
}

const names = ["Mario", "Mariarosa", "Maria"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// while
let i = 0;
while (i < 5) {
  console.log("i", i);
  i++;
}

i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

// do-while
i = 5;
do {
  console.log(i);
  i++;
} while (i < 5);

// if
const age = 20;
if (age >= 20) {
  console.log(`You are ${age} years old or more`);
}
if (names.length > 2) {
  console.log("More than 2 names");
}

// logical operator
const password = "p@ss";
if (password >= 12 && password.includes("@")) {
  console.log("Strong password");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length > 5)
) {
  console.log("Good password");
} else {
  console.log("Bad password");
}

// not
let user = false;
if (!user) {
  console.log("user logged.");
}

// breack and continue
