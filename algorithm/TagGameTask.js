// 游戏里面有很多各式各样的任务，其中有一种任务玩家只能做一次，这类任务一共有1024个，
// 任务ID范围[1,1024]。请用32个unsigned int类型来记录着1024个任务是否已经完成。初始状态都是未完成。
// 输入两个参数，都是任务ID，需要设置第一个ID的任务为已经完成；并检查第二个ID的任务是否已经完成。
// 输出一个参数，如果第二个ID的任务已经完成输出1，如果未完成输出0。如果第一或第二个ID不在[1,1024]范围，则输出-1。
// input: 输入包括一行,两个整数表示人物ID.
// output: 输出是否完成

// input Example: 1024 1024
// output Example: 1

// 完全看不懂题目！

let readline = require('readline')
let myInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

myInterface.on('line', function (line) {
    let tokens = line.split(' ');
    var firstTask = parseInt(tokens[0]);
    var secondTask = parseInt(tokens[1]);
    if (firstTask < 1 || secondTask < 1 || firstTask > 1024 || secondTask > 1024) {
        console.log(-1);
    } else {
        if (firstTask === secondTask) {
            console.log(1);
        } else {
            console.log(0)
        }
    }
});
