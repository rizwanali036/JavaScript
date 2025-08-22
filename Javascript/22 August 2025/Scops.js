// Global Scope Example

let globalVar1 = "I am global";

function showGlobal() {
  console.log(globalVar1); // can access global variable
}

showGlobal();
console.log(globalVar1); // also accessible here


// Local / Function Scope Example
function myFunction() {
  let localVar = "I am local";
  console.log(localVar); // accessible inside the function
}  

myFunction();
console.log(localVar); // ❌ Error: localVar is not defined


// Block Scope Example
if (true) {
  let blockVar = "I am block scoped";
  const constVar = "I am also block scoped";
  var varVar = "I am not block scoped";
  console.log(blockVar); // works
  console.log(constVar); // works
  console.log(varVar);   // works
}

console.log(blockVar); // ❌ Error
console.log(constVar); // ❌ Error
console.log(varVar);   // works because var is function/global scoped


// Function + Block Scope Together
function testScope() {
  let a = 10; // function scope
  if (true) {
    let b = 20;  // block scope
    var c = 30;  // function scope
    console.log(a, b, c); // 10 20 30
  }
  console.log(a); // 10
  console.log(b); // ❌ Error
  console.log(c); // 30
}

testScope();


// Nested Function Scope
let globalVar = "Global";

function outer() {
  let outerVar = "Outer";
  
  function inner() {
    let innerVar = "Inner";
    console.log(globalVar); // Global
    console.log(outerVar);  // Outer
    console.log(innerVar);  // Inner
  }
  
  inner();
  // console.log(innerVar); // ❌ Error: innerVar is not defined
}

outer();
