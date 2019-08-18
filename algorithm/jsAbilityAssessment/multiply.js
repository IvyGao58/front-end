/**
 * @topic: 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
 * @Date: 2019-08-18
 * input: 3, 0.0001
 * output: 0.0003
 */

function multiply(a, b) {
    const num1Digits = (a.toString().split('.')[1] || '').length;
    const num2Digits = (b.toString().split('.')[1] || '').length;
    const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
    return a * ( b * baseNum) / baseNum;
}

let value = multiply(3, 0.0001);
console.log(value);
