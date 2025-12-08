import { fileReader } from "../../Helper.js"

const data = fileReader('testInput.txt')

// const rows = data.split('\n').map(str => str.trim().split(/\s/g).filter(Boolean));
// const operations = rows[rows.length - 1];

let res = 0;

const rows = data.split('\n').map(str => str.split(/\s/g));

console.log(rows)

for (let i = 0; i < rows[0].length - 1; i++) {
    for (let j = 0; j < rows.length - 1; j++) {
        console.log(rows[j])

        // const digit = rows[j][rows[j].length - 1];
        // const lastDigit = digit[digit.length - 1];

        // if (lastDigit) {
        //     console.log(lastDigit)
        // }
    }

    break
}

console.log(rows.length - 1, rows[0].length)