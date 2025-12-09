import { fileReader } from "../../Helper.js"

const data = fileReader('testInput.txt');

const points = data.split('\n').map(str => str.split(',').map(Number));

console.log(points)

let distances = [];

for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
        const [x1, y1, z1] = points[i];
        const [x2, y2, z2] = points[j];

        const dx = x1 - x2;
        const dy = y1 - y2;
        const dz = z1 - z2;

        distances.push({
            i,
            j,
            dist: Math.sqrt(dx * dx + dy * dy + dz * dz)
        });
    }
}

const sorted = distances.sort((a, b) => a.dist - b.dist);
console.log(sorted)

sorted.forEach(obj => {
    const { i, j } = obj;
})