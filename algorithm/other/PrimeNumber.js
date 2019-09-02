/**
 * @topic: 功能:输入一个正整数，按照从小到大的顺序输出它的所有质数的因子（如180的质数因子为2 2 3 3 5 ）
           最后一个数后面也要有空格
 * @Date: 2019-09-02
 */

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    var num = Number(line);
    var arr = [];
    for(let i = 2; i<=num;) {
        if(num % i === 0) {
            arr.push(i);
            num = num / i;
        } else {
            i++;
        }
    }
    console.log(arr.join(' ') + ' ');
});
