/**
 * @topic: 263.编写一个程序判断给定的数是否为丑数。丑数就是只包含质因数 2, 3, 5 的正整数。
 * @Date: 2019-09-14
 * input: 6
 * output: true
 */

var isUgly = function(num) {
    if (num === 1) {
        return true;
    }
    if (num < 1) {
        return false;
    }
    let divider = [2, 3, 5];
    for (let i = 0; i<divider.length; i++) {
        while (num % divider[i] === 0) {
            num = num/divider[i];
        }
    }
    return num === 1;
};

let val = isUgly(14);
console.log(val);
