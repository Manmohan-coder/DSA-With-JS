// 1526. Minimum Number of Increments on Subarrays to Form a Target Array

// You are given an integer array target. You have an integer array initial of the same size as target with all elements initially zeros.
// In one operation you can choose any subarray from initial and increment each value by one.
// Return the minimum number of operations to form a target array from initial.
// The test cases are generated so that the answer fits in a 32-bit integer.

// Example 1:
// Input: target = [1,2,3,2,1]
// Output: 3

// Example 2:
// Input: target = [3,1,1,2]
// Output: 4

// Example 3:
// Input: target = [3,1,5,4,2]
// Output: 7

const minNumberOperation = function (arr) {
    const n = arr.length
    let sum = arr[0]
    for (let i = 0; i < n - 1; i++) {
        if (target[i + 1] > target[i]) {
            sum += target[i + 1] - target[i]
        }
    }
    return sum
}
// second approch without condiition check
const minNumberOperation1 = function (arr) {
    const n = arr.length
    let sum = arr[0]
    for (let i = 1; i < n; ++i) {
        sum += Math.max(target[i] - target[i - 1], 0)
    }
    return sum
}

console.log(minNumberOperation());
