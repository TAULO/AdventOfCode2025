import { fileReader } from "../../Helper.js"

const data = fileReader('testInput.txt')
const banks = data.split('\n');

let res = 0;

for (let i = 0; i < banks.length; i++) {
    const bank = banks[i].split('').map(str => parseInt(str));

    let max = 0;

    for (let i = 0; i < bank.length; i++) {
        for (let j = i + 1; j < bank.length; j++) {
            max = Math.max(max, bank[i] * 10 + bank[j]);
        }
    }

    console.log(max)

    res += max
}

console.log(res)