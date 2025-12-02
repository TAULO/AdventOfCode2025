import { fileReader } from "../../Helper.js"

const data = fileReader('input.txt')
const arr = data.split(',');

let res = 0;

for (let i = 0; i < arr.length; i++) {
    const range = arr[i];

    const [firstId, lastId] = range.split('-').map(val => parseInt(val));

    for (let j = firstId; j <= lastId; j++) {
        const str = j.toString();
        const repeatingRegex = /^(.+)\1+$/

        if (repeatingRegex.test(str)) {
            res += parseInt(str);
        }
    }
}

console.log(res)