/**
 * @topic: 给定二进制字符串，将其换算成对应的十进制数字
 * @Date: 2019-08-18
 * input: 11000000
 * output: 192
 */

function base10(str) {
    return parseInt(str, 2);
}

let value = base10('11000000');
console.log(value);
