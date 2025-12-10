import { fileReader } from "../../Helper.js"

const data = fileReader('testInput.txt');
const lines = data.split('\n');

const machines = lines.map(line => {
    return {
        indicatorLight: line.slice(1, line.indexOf(']')).split(''),
        initalIndicatorLight: line.slice(1, line.indexOf(']')).replace(/#/g, '.').split(''),
        buttons: line.slice(line.indexOf(']') + 1, line.indexOf('{')).trim().split(' ').map(str => str.slice(1, str.length - 1).split(',').map(Number)),
    }
})

console.log(machines[0])

let stop = 100;

for (let i = 0; i < machines.length; i++) {
    const finalConfig = machines[i].indicatorLight;
    const initalConfig = machines[i].initalIndicatorLight;

    let totalPresses = 1;
    while (finalConfig.join() !== initalConfig.join() && stop > 0) {
        console.log(initalConfig.join(''), finalConfig.join(''));
        let tries = 0;

        for (let j = 0; j < machines[i].buttons.length; j++) {
            const buttons = machines[i].buttons[j];

            for (let k = 0; k < buttons.length; k++) {
                const button = buttons[k];

                initalConfig[button] === '.' ? initalConfig[button] = '#' : initalConfig[button] = '.';
            }
        }

        stop--;
    }

    console.log(initalConfig.join(''));

    break;
}