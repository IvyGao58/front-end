/**
 * @topic: 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * @Date: 2019-08-25
 * 输入: 123, 输出: 321
 * 输入: -123, 输出: -321
 * 输入: 120, 输出: 21
 * 注意： 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。
 * 请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

var reverse = function(x) {
    let negative = x >= 0;
    let arr = Math.abs(x).toString().split('');
    arr.reverse();
    let index = arr.findIndex(item => item > 0);
    let res = index && arr.slice(index) || arr;
    let str = negative ? res.join('') : '-' + res.join('');
    let result = parseInt(str);
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1){
        return 0
    } else {
        return result;
    }
};

let val = reverse(1534236469);
console.log(val);
