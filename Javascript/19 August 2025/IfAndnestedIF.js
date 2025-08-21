// if / else if / else Used when you have multiple conditions.

let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

// Nested if (an if inside another if)

let age = 20;
let hasId = true;
if (age >= 18){
    if(hasId){
        console.log("enter Allowed");
    }else{
        console.log("You need an Id before enter");
    }
}else{
    console.log("You are under 18, You are not allowed to enter");
}