import { readFileSync } from 'fs';

// let data: string | string[] = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8`;
// let data: string | string[] = `98-99,6-99`;
let data: string | string[] = readFileSync(`${process.cwd()}/day4/day4.txt`, 'utf-8');
let result = 0;

data = data.split('\n');

for(let pairs of data) {
    const separatePair = pairs.split(',');
    const firstPair = separatePair[0].split('-')
    const secondPair = separatePair[1].split('-');

    if(+firstPair[0] == +secondPair[0] || +firstPair[1] == +secondPair[1] || +firstPair[0] == +secondPair[1] || +secondPair[0] == +firstPair[1]) {
        result += 1;
    }
    else if(+firstPair[0] <= +secondPair[0] && +firstPair[1] >= +secondPair[1]) {
        result += 1;
    }
    else if(+secondPair[0] <= +firstPair[0] && +secondPair[1] >= +firstPair[1]) {
        result += 1;
    }
    else if((+firstPair[1] >= +secondPair[0] && +firstPair[1] <= +secondPair[1]) || (+secondPair[1] >= +firstPair[0] && +secondPair[1] <= +firstPair[1])) {
        result += 1;
    }
}

console.log(result)