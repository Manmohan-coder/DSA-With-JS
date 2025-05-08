// WAP that accepts two integers as input and swaps their values. After swapping, return the new values of the two numbers.

let prompt = require('prompt-sync')();
let x = Number(prompt('Enter the 1st value: '))
let y = Number(prompt('Enter the 2nd value: '))

console.log(`Before swapping 1st value: ${x} \n Before swapping 2nd value ${y}`);

const swapTwoNumber = (a, b) => {
    let temp = a
    a = b
    b = temp
    return `After swapping 1st value: ${a} \n After swapping 2nd value ${b}`
}

console.log(swapTwoNumber(x, y));

// WAP that accepts two integers and swaps their values without using a third variable. After swapping , returns the new values of the two numbers. 

//1 method Mathametical way 
const swappingTwoNumber = (a, b) => {
    a = a + b
    b = a - b
    a = a - b
    return `After swapping 1st value: ${a} \n After swapping 2nd value ${b}`
}
console.log(swappingTwoNumber(x, y));

// 2nd method array or swap value by indexes
const swappingTwoNums = (a, b) => {
    [a, b] = [b, a]
    return `After swapping 1st value: ${a} \n After swapping 2nd value ${b}`
}
console.log(swappingTwoNums(x, y));

// 3rd method if using function direct
const swapByFunc = (a, b) => {
    return [b, a]
}

const [newX, newY] = swapByFunc(x, y)
console.log(`After swapping 1st value: ${newX} \n After swapping 2nd value ${newY}`)