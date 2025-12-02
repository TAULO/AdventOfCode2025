import { fileReader } from "../../Helper.js"

const data = fileReader('input.txt')

const arr = data.split('\n');

let dialStartingPoint = 50;
let res = 0;

for (let i = 0; i < arr.length; i++) {
    const dir = arr[i][0];
    const num = parseInt(arr[i].slice(1));

    let temp = dir === 'L' ? (dialStartingPoint - num) % 100 : (dialStartingPoint + num) % 100;

    if (temp < 0) {
        temp += 100;
    } else if (temp > 99) {
        temp -= num -= 100;
    }

    dialStartingPoint = temp;

    if (dialStartingPoint === 0) res++
}

console.log(res)
