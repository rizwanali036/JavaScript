// CHallenge 1 
let name = "Ali";
function Greet(name) {
    console.log("Hello " + name);
}
Greet(name);

// Arrow function version

// let name = "Ali";

// const Greet = (name) => {
//     console.log("Hello " + name);
// }

Greet(name); // Hello Ali


// Challenge 2 
// function square(n) {
//     return n * n;
// }
// console.log(square(3));
// console.log(square(2));
// console.log(square(5));

const square = (n) => {
    return n * n;
}
console.log(square(3));
console.log(square(2));
console.log(square(5));

// Challenge 3 using if/else
function isEven(num) {
    if (num % 2 === 0) {
        return "The number is Even";
    } else {
        return "the number is Odd";
    }
}
console.log(isEven(101));

// Challenge 3 using ternary operator
function isEveen(num) {
    return num % 2 === 0 ? "Even" : "ood";
}
console.log(isEveen(55));



// Challenge 4 — Find Maximum
// What to do: Write a function findMax(a, b) that returns the larger number between a and b.
const findMax1 = function findMax(a, b) {
    if (a > b) {
        return a;
    }
    else if (b > a) {
        return `${b} is greater than ${a}`;
    }
    else {
        return "Bothe are equal";
    }
}
console.log(findMax1(55, 55));

// Challenge 5 — Sum of Array
// What to do: Write a function sumArray(numbers) that takes an array of numbers and returns the sum of all the numbers.
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray([1, 3, 5, 6]));
console.log(sumArray([1, 3, 5, 6, 30, 40, 50]));


// Challenge 6 
// Function to calculate factorial using a loop
function factorial(n) {
    if (n === 0) return 1; // 0! = 1
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;  // multiply result by i
    }
    return result;
}

// Testing
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(3)); // 6




// Challenge 7 — Palindrome Checker
// What to do: Write a function isPalindrome(str) that checks if a string is the same forwards and backwards.
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("madam"));       // true
console.log(isPalindrome("hello"));       // false
console.log(isPalindrome("racecar"));     // true
console.log(isPalindrome("JavaScript"));  // false


// Challenge 8 — Reverse an Array
// What to do: Write a function reverseArray(arr) that returns a new array with elements reversed.

function reverseArray(arr) {
    let reversedArr = arr.slice().reverse()
    return reversedArr
}

console.log(reverseArray(["a", "b", "c"]))

// Challenge 9 — Count Vowels
// What to do: Write a function countVowels(str) that counts how many vowels (a, e, i, o, u) are in a given string.

function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";
    str = str.toLowerCase();


}




// Challenge 10 — Check Prime Number (using Arrow Function

const isPrime = (num) => {
    if (num <= 1) return false; // 0 and 1 are not prime

    for (let i = 2; i < num; i++) {
        if (num % i === 0) { // divisible by i
            return false;
        }
    }
    return true; // no divisors found
}

// Testing
console.log(isPrime(2));   // true
console.log(isPrime(4));   // false
console.log(isPrime(13));  // true
console.log(isPrime(1));   // false
console.log(isPrime(17));  // true


