function outerFunction() {
  let outerVar = "I am from outer";

  function innerFunction() {
    console.log(outerVar); // remembers outerVar
  }

  return innerFunction;
}

const closureFunc = outerFunction(); // outerFunction has finished
closureFunc();


// Simple Closure
function greet(name) {
  return function() {
    console.log("Hello " + name);
  }
}

const sayHello = greet("Alice");
sayHello(); // Output: Hello Alice



// Closure with Private Variables
function counter() {
  let count = 0; // private variable

  return function() {
    count++;
    console.log(count);
  }
}

const increment = counter();
increment(); // 1
increment(); // 2


// Closure in Loops (with let)
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}


// Callback Closures
function fetchData(id) {
  setTimeout(function() {
    console.log("Fetched data for ID:", id);
  }, 1000);
}

fetchData(5); // Output after 1s: Fetched data for ID: 5
