// get first p
const para = document.querySelector("p");
console.log(para);

const paraError = document.querySelector(".error");
console.log(paraError);

// class selector
const divError = document.querySelector("div.error");
console.log(divError);

// get more tags
const paras = document.querySelectorAll("p");
console.log(paras);
paras.forEach(para => console.log(para));
const errors = document.querySelectorAll(".error");
console.log(errors);
errors.forEach(error => console.log(error));

// get element by id
const title = document.getElementById("page-title");
console.log("Get title by id:", title);

// get element by class name
const errorClass = document.getElementsByClassName("error");
console.log("Get errors by class:", errorClass); // -> HTML collection does not support foreach

// get element by tag name
const pTags = document.getElementsByTagName("p");
console.log(pTags);

// change element content
console.log("Content inner text", para.innerText);
para.innerText = "Inner text  updated by Mario.";
// change multiple elements
paras.forEach(p => (p.innerText += " new text"));

// change inner html
const content = document.querySelector(".content");
console.log("content HTML:", content.innerHTML);
content.innerHTML = "<h2>New html content</h2>";

const people = ["Mario", "Mariarosa", "Maria"];
people.forEach(p => (content.innerHTML += `<p>${p}</p>`));
