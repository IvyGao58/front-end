/**
 * @topic: 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
 * @Date: 2019-08-18
 * input: 65
 * output: 01000001
 */

function convertToBinary(num) {
    let result = num.toString(2).split('');
    while (result.length < 8) {
        result.unshift(0);
    }
    return result.join('');
}

let value = convertToBinary(65);
console.log(value);
