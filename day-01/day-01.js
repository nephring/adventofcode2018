/*
Day 01 Advent of Code

https://adventofcode.com
*/

const input =
`+1
-2
+40
-17
-10
+20`

convertedInput = input.split('\n').map(item => parseInt(item))
const result = convertedInput.reduce((previousValue, currentValue) => previousValue + currentValue, 0)


console.log(result)