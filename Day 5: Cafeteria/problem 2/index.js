import { fileReader } from "../../Helper.js"

const data = fileReader('input.txt')

const [range, spoiledId] = data.split('\n\n');

const ranges = range.split('\n');

const rangesSorted = ranges.map(str => str.split('-').map(Number)).sort((a, b) => a[0] - b[0] || a[1] - b[1])

function combine() {
    return rangesSorted.reduce((combined, next) => {
        if (!combined.length || combined[combined.length - 1][1] < next[0]) {
            combined.push(next);
        } else {
            const prev = combined.pop();
            combined.push([prev[0], Math.max(prev[1], next[1])]);
        }

        return combined;
    }, []);
}


const c = combine(rangesSorted)

const res = c.reduce((acc, curr) => {
    const [start, end] = curr;

    acc += end - start;

    return acc

}, 0)

console.log(res + c.length)


