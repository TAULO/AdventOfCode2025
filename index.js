import fs from 'node:fs'

const path = import.meta.dirname;

for (let i = 1; i < 25; i++) {
    const dayPath = path + '/day ' + i;
    fs.mkdirSync(dayPath)

    fs.mkdirSync(dayPath + '/problem 1')
    fs.mkdirSync(dayPath + '/problem 2')
}