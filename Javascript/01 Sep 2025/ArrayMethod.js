// Start with an array
let numbers = [1, 2, 3];

// push: add item at the end
numbers.push(4);  
console.log("After push:", numbers); // [1, 2, 3, 4]

// pop: remove last item
numbers.pop();    
console.log("After pop:", numbers);  // [1, 2, 3]

// map: create a new array with transformed values
let doubled = numbers.map(num => num * 2);
console.log("After map:", doubled);  // [2, 4, 6]

// filter: create a new array with only matching values
let even = numbers.filter(num => num % 2 === 0);
console.log("After filter:", even);  // [2]

// forEach: loop through array and perform action
console.log("Using forEach:");
numbers.forEach(num => {
  console.log("Number is:", num);
});