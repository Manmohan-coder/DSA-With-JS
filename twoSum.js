// WAP that takes two integer as input and print their sum.

var prompt = require('prompt-sync')();
var a = Number(prompt('Enter a First value: '));
var b = Number(prompt('Enter a Second value: '));

const sum = (x, y) =>`Sum of two integer is: ${x + y}`;

console.log(sum(a, b));