/**
 * @topic: 输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数
 * @Date: 2019-09-07
 */

let readline =require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    let str = line.toString();
    let res = [];
    str = str.split('').reverse().join('');
    for(let i = 0; i<str.length; i++) {
        if (res.indexOf(str[i]) === -1) {
            res.push(str[i]);
        }
    }
    console.log(res.join(''));
});

