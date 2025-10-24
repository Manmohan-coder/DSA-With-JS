// LC 3147. Taking Maximum Energy From the Mystic Dungeon
// In a mystic dungeon, n magicians are standing in a line. Each magician has an attribute that gives you energy. Some magicians can give you negative energy, which means taking energy from you.
// You have been cursed in such a way that after absorbing energy from magician i, you will be instantly transported to magician (i + k). This process will be repeated until you reach the magician where (i + k) does not exist.
// In other words, you will choose a starting point and then teleport with k jumps until you reach the end of the magicians' sequence, absorbing all the energy during the journey.
// You are given an array energy and an integer k. Return the maximum possible energy you can gain.
// Note that when you are reach a magician, you must take energy from them, whether it is negative or positive energy.

// Example 1:
// Input: energy = [5,2,-10,-5,1], k = 3
// Output: 3
// Explanation: We can gain a total energy of 3 by starting from magician 1 absorbing 2 + 1 = 3.

// Example 2:
// Input: energy = [-2,-3,-1], k = 2
// Output: -1
// Explanation: We can gain a total energy of -1 by starting from magician 2.

// const maximumEnergy = function(energy, k) {
//     const n = energy.length;
//     const dp = new Array(n);

//     // Initialize dp array with energy values
//     for (let i = 0; i < n; i++) {
//         dp[i] = energy[i];
//     }

//     // Bottom-up approach: build from end to start
//     for (let i = n - 1 - k; i >= 0; i--) {
//         dp[i] = energy[i] + dp[i + k];
//     }

//     // Find maximum energy from all possible starting points
//     let maxEnergy = Math.max(...dp);
//     return maxEnergy;
// };


const maximumEnergy = function (energy, k) {
    let n = energy.length
    let dp = [...energy]

    for (let i = n - 1 - k; i >= 0; i--) {
        dp[i] += dp[i + k]
    }
    
    return Math.max(...dp)
}




console.log(maximumEnergy([5, 2, -10, -5, 1], 3));
console.log(maximumEnergy([-2, -3, -1], 2));
