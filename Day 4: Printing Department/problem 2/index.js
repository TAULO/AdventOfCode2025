import { fileReader } from "../../Helper.js"

const data = fileReader('input.txt')
const grid = data.split('\n');

const roll = '@';

let res = 0;

function removeRolls(newGrid, newRemoveCount) {
    if (newRemoveCount <= 0) return newGrid;

    res += newRemoveCount ? newRemoveCount : 0;

    let outerGrid = []
    let removeCount = 0;
    for (let i = 0; i < newGrid.length; i++) {
        let innerGridStr = "";

        for (let j = 0; j < newGrid[i].length; j++) {
            let count = 0;

            const right = newGrid[i][j + 1];
            const left = newGrid[i][j - 1];

            if (right === roll) count++;
            if (left === roll) count++;

            if (newGrid[i + 1]) {
                const diagDownRight = newGrid[i + 1][j + 1];
                const down = newGrid[i + 1][j]
                const diagDownLeft = newGrid[i + 1][j - 1];

                if (diagDownRight === roll) count++;
                if (down === roll) count++;
                if (diagDownLeft === roll) count++;
            }

            if (newGrid[i - 1]) {
                const diagTopRight = newGrid[i - 1][j + 1]
                const top = newGrid[i - 1][j];
                const diagTopLeft = newGrid[i - 1][j - 1];

                if (diagTopLeft === roll) count++;
                if (top === roll) count++;
                if (diagTopRight === roll) count++;
            }

            if (count < 4 && newGrid[i][j] === roll) {
                innerGridStr += '.';
                removeCount++;
            } else {
                innerGridStr += newGrid[i][j];
            }
        }

        outerGrid.push(innerGridStr)
    }

    return removeRolls(outerGrid, removeCount)
}

const g = removeRolls(grid)

console.log(g.join('\n'), res)