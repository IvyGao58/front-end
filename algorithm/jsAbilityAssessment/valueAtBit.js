/**
 * @topic: 获取数字 num 二进制形式第 bit 位的值。注意：
         1、bit 从 1 开始
         2、返回 0 或 1
         3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1
 * @Date: 2019-08-18
 * input: 128, 8
 * output: 1
 */

function valueAtBit(num, bit) {
    var val = num.toString(2);
    val = val.split('');
    val.reverse();
    return val[bit-1];
}

let value = valueAtBit(2, 2);
console.log(value);
