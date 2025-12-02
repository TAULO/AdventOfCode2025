import { fileReader } from "../../Helper.js"

const data = fileReader('input.txt')
const arr = data.split('\n');

let dialStartingPoint = 50;
let res = 0;

console.log(dialStartingPoint)

for (let i = 0; i < arr.length; i++) {
    const dir = arr[i][0];
    const num = parseInt(arr[i].slice(1));

    if (dir === 'L') {
        let temp = dialStartingPoint;
        for (let j = 0; j < num; j++) {
            temp--

            if (temp === 0) res++;

            if (temp < 0) {
                temp = 99;
            }
        }

        dialStartingPoint = temp;
    } else {
        let temp = dialStartingPoint;
        for (let j = 0; j < num; j++) {
            temp++

            if (temp > 99) {
                temp = 0;
                res++;
            }
        }

        dialStartingPoint = temp;
    }

    console.log(dialStartingPoint)
}

console.log('res', res)
