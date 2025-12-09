import { fileReader } from "../../Helper.js"

const data = fileReader('input.txt')

const lines = data.split('\n');
const operationsRow = lines[lines.length - 1];
const digitRows = lines.slice(0, -1);

const maxLen = Math.max(...lines.map(l => l.length));

const paddedDigitRows = digitRows.map(r => r.padEnd(maxLen));
const paddedOpsRow = operationsRow.padEnd(maxLen);

let problems = [];
let currentNumbers = [];

for (let col = maxLen - 1; col >= 0; col--) {
    let numStr = "";
    for (let row = 0; row < paddedDigitRows.length; row++) {
        const char = paddedDigitRows[row][col];
        if (char && char !== ' ') {
            numStr += char;
        }
    }

    if (numStr !== "") {
        currentNumbers.push(parseInt(numStr));
    }

    const opChar = paddedOpsRow[col];

    if (opChar === '+' || opChar === '*') {
        if (currentNumbers.length > 0) {
            problems.push({ numbers: currentNumbers, operator: opChar });
            currentNumbers = [];
        }
    }
}

let total = 0;
for (const problem of problems) {
    let result;
    if (problem.operator === '+') {
        result = problem.numbers.reduce((acc, n) => acc + n, 0);
    } else {
        result = problem.numbers.reduce((acc, n) => acc * n, 1);
    }
    total += result;
}

console.log(total);