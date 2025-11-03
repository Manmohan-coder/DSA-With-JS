// leetcode 1578. Minimum Time to Make Rope Colorful
// Alice has n balloons arranged on a rope.You are given a 0 - indexed string colors where colors[i] is the color of the ith balloon.

// Alice wants the rope to be colorful.She does not want two consecutive balloons to be of the same color, so she asks Bob for help.Bob can remove some balloons from the rope to make it colorful.You are given a 0 - indexed integer array neededTime where neededTime[i] is the time(in seconds) that Bob needs to remove the ith balloon from the rope.

// Return the minimum time Bob needs to make the rope colorful.


// Example 1:
// Input: colors = "abaac", neededTime = [1, 2, 3, 4, 5]
// Output: 3

// Example 2:
// Input: colors = "abc", neededTime = [1, 2, 3]
// Output: 0

// Example 3:
// Input: colors = "aabaa", neededTime = [1, 2, 3, 4, 1]
// Output: 2

const minCost = function (colors, neededTime) {
    let time = 0, prev = 0

    for (let i = 1; i < colors.length; i++) {
        if (colors[prev] === colors[i]) {
            if (neededTime[prev] < neededTime[i]) {
                time += neededTime[prev]
                prev = i
            }
            else {
                time += neededTime[i]
            }
        }
        else {
            prev = i
        }
    }
    return time
}

console.log(minCost("abaac", [1, 2, 3, 4, 5]));
console.log(minCost("abc", [1, 2, 3]));
console.log(minCost("aabaa", [1, 2, 3, 4, 1]));


