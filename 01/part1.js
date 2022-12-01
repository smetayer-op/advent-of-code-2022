#!/usr/bin/env node

const lines = require('fs').readFileSync('input.txt', 'utf-8')
    .split('\n');

const values = []
let index = 0;
for (const line of lines) {
    if (line.length === 0) {
        index += 1;
    }
    if (!values[index]) {
        values[index] = Number(line);
    } else {
        values[index] += Number(line);
    }
}

const sortedValues = values.sort((a, b) => a - b);
// First step : first values only
const maxThree = sortedValues.pop() + sortedValues.pop() + sortedValues.pop()
console.log(maxThree);