import { fileReader } from "../../Helper.js"

const data = fileReader('input.txt')

const [range, spoiledId] = data.split('\n\n');

const ranges = range.split('\n');
const spoiledIds = spoiledId.split('\n').map(Number);

let res = 0;

for (let i = 0; i < spoiledIds.length; i++) {
    const spoiled = spoiledIds[i];

    for (let j = 0; j < ranges.length; j++) {
        const range = ranges[j];
        const [start, end] = range.split('-').map(Number);

        if (start <= spoiled && end >= spoiled) {
            res++;
            // console.log(start, end, spoiled)
            break;
        }
    }
}

console.log(res)