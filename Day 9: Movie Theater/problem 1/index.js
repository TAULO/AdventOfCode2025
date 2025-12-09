import { fileReader } from "../../Helper.js"

const data = fileReader('input.txt');

const rows = data.split('\n').map(str => str.split(',').map(Number));

let maxArea = 0;
for (let i = 0; i < rows.length; i++) {
    const [x1, y1] = rows[i];

    for (let j = i + 1; j < rows.length; j++) {
        const [x2, y2] = rows[j];

        if (x1 === x2 || y1 === y2) continue;

        const area = (Math.abs(x1 - x2) + 1) * (Math.abs(y1 - y2) + 1);

        if (area > maxArea) {
            maxArea = area;
        }
    }
}

console.log(maxArea)