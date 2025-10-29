// 3370. Smallest Number With All Set Bits

// You are given a positive number n.
// Return the smallest number x greater than or equal to n, such that the binary representation of x contains only set bits

// Example 1:
// Input: n = 5
// Output: 7

// Example 2:
// Input: n = 10
// Output: 15

// Example 3:
// Input: n = 3
// Output: 3

function check(x) {
    return (x & (x + 1)) === 0
}
const smallestNumber = function (n) {
    let ans = n;
    while (!check(ans)) {
        ans++
    }
    return ans
};
// second approch
const smallestNumber1 = function (n) {
    let ans = 1
    while (ans < n) {
        ans = 2 * ans + 1
    }
    return ans
}
// third approch
const smallestNumber2 = function (n) {
    let ans = Math.log2(n) + 1
    return (1 << ans) - 1
}