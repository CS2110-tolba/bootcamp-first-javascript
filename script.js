// app component
const app = document.getElementById("app");

// Code

const input = 8;

const output1 = (input / 2) % 2 == 0 ? "YES" : "NO" // 5 / 2 = 2 ===> 2 % 2 = 0 ===> YES

const output2 = input % 2 == 0 && (input / 2) % 2 == 0 ? "YES" : "NO" // correct

app.innerText = output2;

// what to use that is similar to Cpp ?

let xLet;
var xVar;

console.log("First Let : ", xLet);
console.log("First Var : ", xVar);

xLet = 1;
xVar = 1;

console.log("second Let : ", xLet);
console.log("second Var : ", xVar);

{
  let xLet = 2;
}

{
  var xVar = 2;
}

console.log("third Let : ", xLet);
console.log("third Var : ", xVar);

// use let :/

// conditions
// log big word in console that says conditions
console.log("%cConditions", "color: red; font-size: 30px");
console.log(5 == 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 === 5);

// if
console.log("%cif", "color: red; font-size: 30px");

let x = 5;
if (x == 5) {
  console.log("x == 5");
}

// if else
console.log("%cif else", "color: red; font-size: 30px");

if (x == 5) {
  console.log("x == 5");
} else {
  console.log("x != 5");
}

// if else if
console.log("%cif else if", "color: red; font-size: 30px");

if (x == 5) {
  console.log("x == 5");
} else if (x == 4) {
  console.log("x == 4");
} else {
  console.log("x != 5 && x != 4");
}

// conditional statement
console.log("%cconditional statement", "color: red; font-size: 30px");

x == 5 ? console.log("x == 5") : console.log("x != 5");

// for loop
console.log("%cfor loop", "color: red; font-size: 30px");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// scopes
// global scope
console.log("%cglobal scope", "color: red; font-size: 30px");

let y = 5;
console.log(y);

// local scope
console.log("%clocal scope", "color: red; font-size: 30px");

{
  let y = 10;
  console.log(y);
}

console.log(y);

// functions
console.log("%cfunctions", "color: red; font-size: 30px");

function myFunction() {
  console.log("Hello World");
}

myFunction();

// function scope
console.log("%cfunction scope", "color: red; font-size: 30px");
function myFunction2() {
  let y = 10;
  console.log(y);
}

// event listener
document.getElementById("btn").addEventListener("click", myFunction2);
