import { readFileSync } from 'fs';
let data = readFileSync(`${process.cwd()}/day3/day3.txt`, 'utf-8');
let result = 0;
// console.log('z'.charCodeAt(0) - 96);
// console.log('l'.charCodeAt(0) - 96 + 26);
data = data.split('\n');
// part 1
// for(let array of data) {
//     const halfArr = array.slice(0, array.length/2);
//     const secondHalfArr = array.slice(array.length/2);
//
//     for(const letter of halfArr) {
//         if(secondHalfArr.includes(letter) && letter == letter.toUpperCase()) {
//             result += (letter.toLowerCase().charCodeAt(0) - 96 + 26);
//             break;
//         }
//         else if(secondHalfArr.includes(letter) && letter == letter.toLowerCase()) {
//             result += (letter.charCodeAt(0) - 96);
//             break;
//         }
//
//     }
// }
// part 2
for (let i = 0; i < data.length;) {
    for (const letter of data[i]) {
        if (data[i + 1].includes(letter) && data[i + 2].includes(letter)) {
            if (letter == letter.toLowerCase()) {
                result += (letter.charCodeAt(0) - 96);
                break;
            }
            else {
                result += (letter.toLowerCase().charCodeAt(0) - 96 + 26);
                break;
            }
        }
    }
    i += 3;
}
console.log(result);
