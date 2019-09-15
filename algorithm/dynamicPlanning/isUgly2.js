/**
 * @topic: 264. 编写一个程序，找出第 n 个丑数。丑数就是只包含质因数 2, 3, 5 的正整数。
 * @Date: 2019-09-14
 * input: n = 10
 * output: 12
 */

var nthUglyNumber = function(n) {
    if (n === 1) return 1;
    let res = [1];
    let twoIdx = 0, threeIdx = 0, fiveIdx = 0;
    while(res.length < n) {
        let target = Math.min(2*res[twoIdx], 3*res[threeIdx], 5*res[fiveIdx]);
        res.push(target);
        if (target === 2*res[twoIdx]) {
            twoIdx++;
        }
        if (target === 3*res[threeIdx]) {
            threeIdx++;
        }
        if (target === 5*res[fiveIdx]) {
            fiveIdx++;
        }
    }
    console.log(res);
    return res.pop();
};


let val = nthUglyNumber(20);
console.log(val);
