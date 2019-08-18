/**
 * @topic: 编写一个程序判断给定的数是否为丑数,丑数就是只包含质因数 2, 3, 5 的正整数。
 * @Date: 2019-08-18
 * input: 6
 * output: true
 */

var isUgly = function(num) {
    if(num === 0) {
        return false;
    }
    let twoIdx = 0;
    let threeIdx = 0;
    let fiveIdx = 0;
    let res = [];
    res.push(1);
    while(res.slice(-1) < num) {
        let min = Math.min.apply(this, [2 * res[twoIdx], 3*res[threeIdx], 5 * res[fiveIdx]]);
        if (min === 2 * res[twoIdx]) {
            twoIdx++;
        }
        if (min === 3 * res[threeIdx]) {
            threeIdx++;
        }
        if (min === 5 * res[fiveIdx]) {
            fiveIdx++;
        }
        res.push(min);
    }
    return res.includes(num);
};

let val = isUgly(14);
console.log(val);
