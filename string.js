// let str = 'AhwbHIUBHnionhMN'

// reversed
// let rev = ''
// for (let i = s.length - 1; i >= 0; i--) {
//     rev = rev +s.charAt(i)
// }
// console.log(rev);

// plaindrome string

// let start = 0, end = s.length, result = true

// while (start < end) {
//     let f = s.charAt(start), e = s.charAt(end-1)

//     if (f !== e) {
//         result = false
//         break
//     }
//     start++, end--
// }
// console.log(result);

// console.log(result?'palindrom':'not palindrom');
// let toggle = ''
// for (let i = 0; i < str.length; i++) {
//     let ch = str.charCodeAt(i)
//     if (ch >= 65 && ch <= 90) {
//         toggle = toggle + String.fromCharCode(ch + 32)
//     }
//     else if (ch >= 97 && ch <= 122) {
//         toggle = toggle + String.fromCharCode(ch - 32)
//     }
//     else toggle = toggle + String.fromCharCode(ch)

// }
// console.log(toggle)
let str = 'hello bhai kya hall'
let arr = str.split(' ')
let sen = ''
for (var i = 0; i < arr.length; i++) {
    let len = arr[i].length
    if(len<2) sen += arr[i].toUpperCase()
    else{
        let rest = arr[i].substring(1, len-1)
        let start = arr[i][0].toUpperCase()
        let last = arr[i][len-1].toUpperCase()
        sen += start+rest+last+' '
    }
}
console.log(sen);
