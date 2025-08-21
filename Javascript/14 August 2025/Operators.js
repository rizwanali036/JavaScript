// Value replacement without external variable  Output shoud be A =  10 and B =  5
var a = 5;
var b = 10;


a = a + b; // 5+ 10 = 15
b = a - b; // 15 - 10 = 5
a = a - b; // 15 - 5 = 10
console.log("The value of a is " + a);
console.log("The value of b is " + b);