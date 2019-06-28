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
