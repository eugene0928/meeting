import { readFileSync } from 'fs'


const shapesOfMine = {
    X: 1, // rock
    Y: 2, // paper
    Z: 3  // scissors
};

const shapesOfOpponent = {
    A: 1,   // rock
    B: 2,   // paper
    C: 3    // scissors
};

const roundMark = {
    lose: 0,
    draw: 3,
    win: 6
}

    // 1    2       2       3           3           1
// rock -> paper  paper -> scissors  scissors -> rock   : winning

    // 1       3        2       1       3         2
// rock -> scissors  paper -> rock  scissors -> paper    : losing
// else   : draw

let data: string = readFileSync(`${process.cwd()}/day2`, 'utf-8');


let roundOverall = [];

const data2 = data.split('\n');

for(let round of data2) {

    // 1st part

    // if((shapesOfOpponent[round[0]] == shapesOfOpponent.A && shapesOfMine[round[2]] == shapesOfMine.Y) || (shapesOfOpponent[round[0]] == shapesOfOpponent.B && shapesOfMine[round[2]] == shapesOfMine.Z) || (shapesOfOpponent[round[0]] == shapesOfOpponent.C && shapesOfMine[round[2]] == shapesOfMine.X)) {
    //     roundOverall.push(roundMark.win + shapesOfMine[round[2]]);
    // }
    // else if((shapesOfOpponent[round[0]] == shapesOfOpponent.A && shapesOfMine[round[2]] == shapesOfMine.Z) || (shapesOfOpponent[round[0]] == shapesOfOpponent.B && shapesOfMine[round[2]] == shapesOfMine.X) || (shapesOfOpponent[round[0]] == shapesOfOpponent.C && shapesOfMine[round[2]] == shapesOfMine.Y)) {
    //     roundOverall.push(roundMark.lose + shapesOfMine[round[2]]);
    // }
    // else {
    //     roundOverall.push(roundMark.draw + shapesOfMine[round[2]]);
    // }

    // 2nd part

    if(round[2] == 'X') {
        const mark = shapesOfOpponent[round[0]] == shapesOfOpponent.A ? shapesOfMine.Z : shapesOfOpponent[round[0]] == shapesOfOpponent.B ? shapesOfMine.X : shapesOfMine.Y;
        roundOverall.push(roundMark.lose + mark);
    }
    else if(round[2] == 'Y') {
        const mark = shapesOfOpponent[round[0]] == shapesOfOpponent.A ? shapesOfMine.X : shapesOfOpponent[round[0]] == shapesOfOpponent.B ? shapesOfMine.Y : shapesOfMine.Z;
        roundOverall.push(roundMark.draw + mark);
    }
    else {
        const mark = shapesOfOpponent[round[0]] == shapesOfOpponent.A ? shapesOfMine.Y : shapesOfOpponent[round[0]] == shapesOfOpponent.B ? shapesOfMine.Z : shapesOfMine.X;
        roundOverall.push(roundMark.win + mark);
    }
}

console.log(roundOverall.reduce((a, b) => a + b, 0));