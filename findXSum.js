// 3318. Find X - Sum of All K - Long Subarrays I

// You are given an array nums of n integers and two integers k and x.

// The x - sum of an array is calculated by the following procedure:

// Count the occurrences of all elements in the array.
// Keep only the occurrences of the top x most frequent elements.If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
// Calculate the sum of the resulting array.
// Note that if an array has less than x distinct elements, its x - sum is the sum of the array.

// Return an integer array answer of length n - k + 1 where answer[i] is the x - sum of the subarray nums[i..i + k - 1].

// Example 1:
// Input: nums = [1, 1, 2, 2, 3, 4, 2, 3], k = 6, x = 2
// Output: [6, 10, 12]

// Example 2:
// Input: nums = [3, 8, 7, 8, 7, 5], k = 2, x = 2
// Output: [11, 15, 15, 15, 12]



const findXSum = function (nums, k, x) {
    let res = []
    for (let i = 0; i < nums.length - k + 1; i++) {
        let subarr = nums.slice(i, i + k)
        let count = new Map()
        for (let num of subarr) {
            count.set(num, (count.get(num) || 0) + 1)
        }
        if (count.size <= x) {
            res.push(subarr.reduce((a, b) => a + b, 0))
        }
        else {
            const pairs = Array.from(count.entries())
            pairs.sort((a, b) => {
                if (b[1] === a[1]) return b[0] - a[0]
                return b[1] - a[1]
            })
            let sum = 0
            for (let [num, cnt] of pairs.slice(0, x)) {
                sum += num * cnt
            }
            res.push(sum)
        }
    }
    return res
};

console.log(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2));
console.log(findXSum([3, 8, 7, 8, 7, 5], 2, 2));
