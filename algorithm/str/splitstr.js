/**
 * @topic: •连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；
           •长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
 * @Date: 2019-09-01
 * @input: 连续输入字符串(输入2次,每个字符串长度小于100) abc 123456789
 * @output: 输出到长度为8的新字符串数组 abc00000 12345678 90000000
 */

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
let add = '00000000';
rl.on('line', function (line) {
    lines.push(line);
    if (lines.length === 2) {
        for (let i = 0; i<lines.length; i++) {
            let target = lines[i];
            if (target < 8) {
                target += add;
                console.log(target.slice(0, 8));
            } else if (target === 8) {
                console.log(target);
            } else {
                for (let j = 0; j<target.length; j+=8) {
                    let substr = target.slice(j, j+8);
                    if (substr.length < 8) {
                        console.log((substr + add).slice(0,8));
                    } else {
                        console.log(substr);
                    }
                }
            }
        }
    }
});

