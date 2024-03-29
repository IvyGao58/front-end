/**
 * @topic: 明明想在学校中请一些同学一起做一项问卷调查，为了实验的客观性，他先用计算机生成了N个1到1000之间的随机整数（N≤1000），
 * 对于其中重复的数字，只保留一个，把其余相同的数去掉，不同的数对应着不同的学生的学号。然后再把这些数从小到大排序，
 * 按照排好的顺序去找同学做调查。请你协助明明完成“去重”与“排序”的工作(同一个测试用例里可能会有多组数据，希望大家能正确处理)。
 * @Date: 2019-09-01
 * @input: 输入多行，先输入随机整数的个数，再输入相应个数的整数
 * @output: 返回多行，处理后的结果
 * 注意：测试数据有多组
 */


let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
let n = 0;

rl.on('line', function (line) {
    if (!n) {
        n = line;
    } else {
        lines.push(line);
        if (lines.length.toString() === n) {
            lines.sort((a, b) => a-b);
            let unique = [...new Set(lines)];
            unique.forEach(item => console.log(item));
            lines = [];
            n = 0;
        }
    }
});
