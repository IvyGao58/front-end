/**
 * @topic: 数据表记录包含表索引和数值，请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照key值升序进行输出。
 * @Date: 2019-09-04
 * input: 先输入键值对的个数。然后输入成对的index和value值，以空格隔开。
 * output: 输出合并后的键值对（多行）
 */

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
let res = [];
rl.on('line', function (line) {
    if (n === 0) {
        n = parseInt(line.trim());
    } else {
        let arr = line.trim().split(' ');
        let key = parseInt(arr[0]);
        let val = parseInt(arr[1]);
        if (res[key] !== undefined) {
            res[key] += val;
        } else{
            res[key] = val;
        }
        n--;
        if (n===0) {
            res.forEach((item, index) => {
                if (item !== undefined) {
                    console.log(index + ' ' + item);
                }
            })
        }
    }
});


