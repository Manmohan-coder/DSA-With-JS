// 2169. Count Operations to Obtain Zero

// You are given two non-negative integers num1 and num2.
// In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.
// For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, after one operation, num1 = 4 and num2 = 1.
// Return the number of operations required to make either num1 = 0 or num2 = 0.

// Example 1:
// Input: num1 = 2, num2 = 3
// Output: 3

// Example 2:
// Input: num1 = 10, num2 = 10
// Output: 1


const countOperations1 = function (num1, num2) {
    let count = 0
    while (num1 && num2) {
        if (num1 >= num2) {
            count += Math.floor(num1 / num2)
            num1 %= num2
        }
        else {
            count += Math.floor(num2 / num1)
            num2 %= num1
        }
    }
    return count
};

const countOperations2 = function (num1, num2) {
    let count = 0
    while (num1 && num2) {
        if (num1 < num2) [num1, num2] = [num2, num1]
        count += Math.floor(num1 / num2)
        num1 %= num2
    }
    return count
};

console.log(countOperations2(2, 3));
console.log(countOperations2(10, 10));
