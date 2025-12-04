import { fileReader } from "../../Helper.js"

const data = fileReader('input.txt')
const grid = data.split('\n');

const roll = '@';

let res = 0;

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        let count = 0;

        if (grid[i][j] !== roll) continue;

        const right = grid[i][j + 1];
        const left = grid[i][j - 1];

        if (right === roll) count++;
        if (left === roll) count++;

        if (grid[i + 1]) {
            const diagDownRight = grid[i + 1][j + 1];
            const down = grid[i + 1][j]
            const diagDownLeft = grid[i + 1][j - 1];

            if (diagDownRight === roll) count++;
            if (down === roll) count++;
            if (diagDownLeft === roll) count++;
        }

        if (grid[i - 1]) {
            const diagTopRight = grid[i - 1][j + 1]
            const top = grid[i - 1][j];
            const diagTopLeft = grid[i - 1][j - 1];

            if (diagTopLeft === roll) count++;
            if (top === roll) count++;
            if (diagTopRight === roll) count++;
        }

        if (count < 4) {
            res++
        }
    }
}

console.log(res)
