// Q Given a string, write a program to count and print the frequency of each alphabetic character present in the string.
// • Ignore spaces in the input.
// • The output should be sorted alphabetically by character and should not contain any repetitions.

function characterFrequency(str) {
    let map = new Map()
    for (let ch of str) {
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1)
        }
        else map.set(ch, 1)
    }
    for (let [ch, i] of map) {
        console.log(`${ch}: ${i}`)
    }
}