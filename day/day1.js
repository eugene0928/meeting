import { readFileSync } from "fs"

let result = [];
let data = readFileSync('day1', 'utf-8');

data = (data.split('\n\n'))
for(let arr of data) {
    let overAll = 0;
    const extractedArr = arr.split('\n');

    extractedArr.forEach((num) => {
        overAll += +num;
    });

    result.push(overAll);
}

result = result.sort((a, b) => b - a)
console.log(result[0] + result[1] + result[2])