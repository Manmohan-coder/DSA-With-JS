// 3289. The Two Sneaky Numbers of Digitville

// In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.
// As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

// Example 1:
// Input: nums = [0,1,1,0]
// Output: [0,1]


// Example 2:
// Input: nums = [0,3,2,1,3,2]
// Output: [2,3]

// Example 3:
// Input: nums = [7,1,5,4,3,4,6,0,9,5,8,2]
// Output: [4,5]

const ctz = function (x) {
    if (x === 0) return 32;
    return Math.clz32(x & -x) ^ 31;
}

const getSneakyNumbers = function (nums) {
    let n = nums.length - 2
    let XOR = 0
    for (let num of nums) {
        XOR ^= num
    }
    for (let num = 0; num <= n - 1; num++) {
        XOR ^= num
    }

    let mask = 1 << ctz(XOR)

    let G1 = 0, G2 = 0
    for (let num of nums) {
        if (num & mask) {
            G1 ^= num
        } else {
            G2 ^= num
        }
    }
    for (let num = 0; num <= n - 1; num++) {
        if (num & mask) {
            G1 ^= num
        } else {
            G2 ^= num
        }
    }
    return [G1, G2]
}

console.log(getSneakyNumbers([0, 1, 1, 0]));
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]));
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]));
