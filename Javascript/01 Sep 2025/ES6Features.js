//1- Arrow Functions
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));    
console.log(addArrow(2, 3));

//2- Destructuring

// Array destructuring
const numbers = [10, 20, 30];
const [a, b] = numbers;
console.log(a, b);

// Object destructuring
const user = { name: "Ali", age: 25 };
const { name, age } = user;
console.log(name, age);


// 3- Spread Operator
// Array example
// Combine 
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);

// Normal vs spread array
// const array1 = [1,2,3];
// array1 = array2;
// array2.push(4);

//Using simple array the original array will also changed while using spread array the first array will not changed.

const array1 = [1, 2, 3];
const array2 = [...array1];
array2.push(4);

console.log(arr1);
console.log(arr2);


// Object example
const obj1 = { x: 1 };
const obj2 = { y: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { x:1, y:2 }


// -4 Default Parameters
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet();
greet("Sara");

//-5 Template Literals (Backticks ``)
const name1 = "Ali";
const age1 = 22;
console.log(`My name is ${name1} and I am ${age1} years old.`);

// -6 Let & Const
if (true) {
  let a = 10;   // block scope
  const b = 20; // block scope
  var c = 30;   // function scope
}
console.log(c); //
// console.log(a);


// - Promises & Async/Await (ES6+ Advanced)
// Promise
const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 2000);
  });
};

getData().then(data => console.log(data));

// Async/Await
async function fetchData() {
  const data = await getData();
  console.log(data);
}
fetchData();
