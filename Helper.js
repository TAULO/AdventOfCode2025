import fs from 'node:fs';

const path = import.meta.dirname;

export function fileReader(file) {
    try {
        return fs.readFileSync(file, { encoding: 'utf8' });
    } catch (err) {
        console.error(err);
        return null;
    }
}

export function createProblemFolders() {
    for (let i = 1; i < 25; i++) {
        const dayPath = path + '/day ' + i;

        if (fs.existsSync(dayPath)) continue;

        fs.mkdirSync(dayPath)

        fs.mkdirSync(dayPath + '/problem 1')
        fs.mkdirSync(dayPath + '/problem 2')
    }
}

export function createProblemFoldersWithName(name, numOfProblems = 2) {
    const dayPath = path + `/${name}`;

    if (fs.existsSync(dayPath)) return
    fs.mkdirSync(dayPath)

    // create problems
    for (let i = 1; i < (numOfProblems + 1); i++) {
        const problemPath = dayPath + `/problem ${i}`;
        const indexPath = problemPath + '/index.js';
        const testInputPath = problemPath + '/testInput.txt';
        const inputPath = problemPath + '/input.txt';

        fs.mkdirSync(problemPath);
        fs.writeFileSync(indexPath, '');
        fs.writeFileSync(testInputPath, '');
        fs.writeFileSync(inputPath, '');
    }
}