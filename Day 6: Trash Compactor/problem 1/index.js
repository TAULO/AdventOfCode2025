import { fileReader } from "../../Helper.js"

const data = fileReader('testInput.txt')

const rows = data.split('\n').map(str => str.trim().split(/\s/g).filter(Boolean));

const operations = rows[rows.length - 1];

let res = 0;

for (let i = 0; i < rows[0].length; i++) {
    const operation = operations[i]
    let resTimes = 1;
    let resAdd = 0;

    for (let j = 0; j < rows.length - 1; j++) {
        const num = parseInt(rows[j][i]);

        if (operation === '+') {
            resAdd += num;
        } else {
            resTimes *= num;
        }
    }

    res += resAdd ? resAdd : resTimes
}

console.log(res)
