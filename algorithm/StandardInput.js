// standard input and output for NodeJS

let readline = require('readline')
let myInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

myInterface.on('line', function (line) {
    let tokens = line.split(' ');
    let arr = [];
    for(let i = 1; i<= tokens[0]; i++) {
        arr.push(i)
    }
    arr.sort();
    console.log(arr)
    let index = parseInt(tokens[1]) - 1;
    console.log(arr[index])
});
