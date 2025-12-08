import { fileReader } from "../../Helper.js"

const data = fileReader('testInput.txt');

const rows = data.split('\n').map(str => str.split(''));

let res = 0;

for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
        if (rows[i][j] === '^') {

            // right
            let index = 0;
            while (rows[i + index] && rows[i + index][j + 1] === '.') {
                rows[i + index][j + 1] = '|'
                index++;
            }

            // left
            index = 0;
            while (rows[i + index] && rows[i + index][j - 1] === '.') {
                rows[i + index][j - 1] = '|'
                index++;
            }
        }
    }

    console.log(rows[i].join(''))
}

// console.log(rows.map(arr => arr.join('')), res)

console.log(res)