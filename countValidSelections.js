// 3354. Make Array Elements Equal to Zero

// You are given an integer array nums.
// Start by selecting a starting position curr such that nums[curr] == 0, and choose a movement direction of either left or right.
// After that, you repeat the following process:
// If curr is out of the range [0, n - 1], this process ends.
// If nums[curr] == 0, move in the current direction by incrementing curr if you are moving right, or decrementing curr if you are moving left.
// Else if nums[curr] > 0:
// Decrement nums[curr] by 1.
// Reverse your movement direction (left becomes right and vice versa).
// Take a step in your new direction.
// A selection of the initial position curr and movement direction is considered valid if every element in nums becomes 0 by the end of the process.
// Return the number of possible valid selections.

// Example 1:
// Input: nums = [1,0,2,0,3]
// Output: 2

// Example 2:
// Input: nums = [2,3,4,0,4,1,0]
// Output: 0
// brute force approch
const check = function (nums, i, dir, count) {
    let temp = [...nums]
    let idx = i;
    while (idx >= 0 && idx < nums.length && count > 0) {
        if (temp[idx] > 0) {
            temp[idx]--
            dir *= -1
            if (temp[idx] === 0) {
                count--
            }
        }
        idx += dir
    }
    return count === 0
}
const countValidSelections = function (nums) {
    let ans = 0
    let n = nums.length
    let count = 0

    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            count++
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            if (check(nums, i, -1, count)) {
                ans++
            }

            if (check(nums, i, 1, count)) {
                ans++
            }
        }
    }
    return ans
}

// optimal approch
const countValidSelections1 = function (nums) {
    let ans = 0
    let sum = nums.reduce((acc, val) => acc + val, 0)
    let curSum = 0

    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i]
        let left = curSum
        let right = sum - left
        if (nums[i] !== 0) continue
        if (left === right) {
            ans += 2
        }
        else if (Math.abs(left - right) === 1) {
            ans += 1
        }
    }
    return ans
}
// optimize code
const countValidSelections2 = function (nums) {
    let n = nums.length
    let ans = 0
    let sum = nums.reduce((acc, val) => acc + val, 0)
    let curSum = 0

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            let left = curSum
            let right = sum - left
            if (left === right) ans += 2
            else if (Math.abs(left - right) === 1) ans += 1
        }
        curSum += nums[i]
    }
    return ans
}

