// Print a Triangular Number Pattern
// Write a function printPattern(n) that prints a triangle of numbers with n rows. 
// Zoho Interview Question of pattern programming.

const prompt = require('prompt-sync')();
let n = Number(prompt('Enter the number of rows: '));
const printPattern = (num) => {
    let diff = 1, count = 0, curr = 1;
    for (let i = 1; i <= num; i++) {
        row_start = curr;
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += row_start + ' ';
            row_start += 2;
        }
        console.log(row.trim());
        curr += diff;
        count++;
        if (count === 2) {
            diff += 2;
            count = 0;
        }
    }
}
printPattern(n);