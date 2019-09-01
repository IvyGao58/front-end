/**
 * @topic: 计算字符串最后一个单词的长度，单词以空格隔开。
 * @Date: 2019-09-01
 * @input: hello world 一行字符串，非空，长度小于5000。
 * @output: 5 整数N，最后一个单词的长度。
 */

let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    let str_arr = line.split(' ');
    console.log(str_arr[str_arr.length - 1].length);
});
