/*
Day 01 Advent of Code
https://adventofcode.com
*/

const input = require('./input.js').input;

// convert input to array of numbers
convertedInput = input.split('\n').map(item => parseInt(item));
const result = convertedInput.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

// log result
console.log(result);
