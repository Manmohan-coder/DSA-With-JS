// Q.1 WAP that accepts two numbers and prints the greater number. If both are equal, print "Both are equal".
const prompt = require('prompt-sync')();
function greaterFrom2Nums() {
    let num1 = Number(prompt('Enter first number: '));
    let num2 = Number(prompt('Enter second number: '));

    let sum = (num1 > num2) ? num1 : (num1 < num2) ? num2 : "Both are equal";
    return `The greater number: ${sum}`;
}

//  Q.2 WAP that accepts two number and check given number is even or odd.
function checkEvenOdd() {
    let number = Number(prompt('Enter a number: '));
    let result = (number % 2 === 0) ? "Even" : "Odd";
    return `The number of ${number}  is: ${result}`;
}

// Q.3 WAP that accepts name and age and print "rahul is valid voter" if age is greater than or equal to 18, otherwise print "rahul is invalid vote".
function validVoter() {
    let name = prompt('Enter your name: ');
    let age = Number(prompt('Enter your age: '));
    return (age >= 18) ? `${name} is valid voter` : `${name} is invalid voter`;
}

// Q.4 WAP that accepts three numbers and print the greatest number.
function greaterFrom3Nums() {
    let numA = Number(prompt('Enter first number: '));
    let numB = Number(prompt('Enter second number: '));
    let numC = Number(prompt('Enter third number: '));
    let greatest = (numA > numB && numA > numC) ? numA : (numB > numA && numB > numC) ? numB : numC;
    return `The greatest number is: ${greatest}`
}

// Q.5 WAP that accepts a number and print given number is prime or not.
function checkPrime() {
    let num = Number(prompt('Enter a number: '));
    let isPrime = isprimeFun(num)
    function isprimeFun(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    return isPrime ? `${num} is a prime number.` : `${num} is not a prime number.`;
}
// Q.6 WAP that accepts a integer respresenting a year as input and checks whether the year is a leap year or not.
// Hints: A year is a leap year if it is divisible by 4, but not divisible by 100. and it is divisible by 100.

function isLeapYear() {
    let year = Number(prompt('Enter any year: '));
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Q.7 WAP that takes an initial amount as input and calulates the final amount after applying a flat discount based on the following conditions:
//  if amount 0-5000 then discount is 0%, if amount 5001-7000 then discount is 5%, if amount 7001-9000 then discount is 10% and if amount greater than 9001 then discount is 20%.
function calculateDiscount() {
    let amount = Number(prompt('Enter the initial amount: '));
    let dis;
    if (amount > 9000) dis = 20;
    else if (amount > 7000 && amount <= 9000) dis = 10;
    else if (amount > 5000 && amount <= 7000) dis = 5;
    return amount - Math.floor((amount * dis) / 100);
}
// Q.8 WAP that takes the number of electricity units consumed as input and calculates the total bill amount based on the following conditions:
//  if unit 100+ then price is 4.2 rs., if unit 101 - 200 then price is 6 rs, if unit 201 + 400 then price is 8 rs and if unit 401+ then price is 13 rs.
function calculateElectricityBill() {
    let units = Number(prompt('Enter the number of electricity units consumed: '));
    let amount
    if(units> 400) {
        amount = (units - 400) * 13;
        units = 400;
    }
    if(units > 200 && units <= 400) {
        amount += (units - 200) * 8;
        units = 200;
    }
    if(units > 100 && units <= 200) {
        amount += (units - 100) * 6;    
        units = 100;
    }
    return amount + (units * 4.2);
}


console.log('1 Two greater number.\n2 Check even or odd.\n3 Check valid voter or not.\n4 three greatest number.\n5 Check prime or not.\n6 Check leap year or not.\n7 Calculate discount on amount.\n8 Calculate electricity bill.\n');
console.log('--------------------------------------------------');
console.log(`Select any one other-wise exit enter 0\n`);

let q = Number(prompt(`Enter the question number:`));
console.log('\n--------------------------------------------------\n');
while (q !== 0) {
    switch (q) {
        case 1:
            console.log(greaterFrom2Nums());
            break;
        case 2:
            console.log(checkEvenOdd());
            break;
        case 3:
            console.log(validVoter());
            break;
        case 4:
            console.log(greaterFrom3Nums());
            break;
        case 5:
            console.log(checkPrime());
            break;
        case 6:
            console.log(isLeapYear());
            break;
        case 7:
            console.log(calculateDiscount());
            break;
        case 8:
            console.log(calculateElectricityBill());
            break;
        default:
            console.log('Invalid selection. Please try again.');
    }
    console.log('\n--------------------------------------------------\n');
    console.log('1 Two greater number.\n2 Check even or odd.\n3 Check valid voter or not.\n4 three greatest number.\n5 Check prime or not.\n6 Check leap year or not.\n7 Calculate discount on amount.\n8 Calculate electricity bill.\n');
    q = Number(prompt(`Select a given number or 0 to exit:`));
}