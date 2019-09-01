/**
 * @topic: 写出一个程序，接受一个由字母和数字组成的字符串，和一个字符，然后输出输入字符串中含有该字符的个数。不区分大小写。
 * @Date: 2019-09-01
 * 第一行输入一个有字母和数字以及空格组成的字符串，第二行输入一个字符。 ABCDEF A
 * 输出输入字符串中含有该字符的个数。 1
 */

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', function (line) {
   lines.push(line);
   let str = lines[0];
   let target = lines[1];
   str && target && numbers(str, target);
});

function numbers(str, target) {
    target = target.toUpperCase();
    str = str.toUpperCase();
    if (!str.includes(target)) {
        console.log(0);
        return;
    }
    let value = str.split('').reduce((items, key) => {
        if (key in items) {
            items[key]++;
        } else {
            items[key] = 1;
        }
        return items;
    }, {});
    console.log(value[target]);
}
