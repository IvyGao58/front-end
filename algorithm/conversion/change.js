/**
 * @topic: 写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。（多组同时输入 ）
 * @Date: 2019-09-02
 * @input: 0xA
 * @output: 10
 */

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    console.log(parseInt(line, 16));
});

/*parseInt(x,16): 将x从任意进制转化到10进制。
* x.toString(16): 让10进制转为任意进制*/
