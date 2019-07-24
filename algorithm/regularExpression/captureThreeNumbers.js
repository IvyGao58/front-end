/**
 * @topic: 给定字符串 str，检查其是否包含 连续3个数字
         1、如果包含，返回最新出现的 3 个数字的字符串
         2、如果不包含，返回 false
 * @Date: 2019-07-24
 */

function captureThreeNumbers(str) {
    var regex = RegExp('\\d{3}');
    var result = str.match(regex);
    return result && result[0] || false;
}

let value = captureThreeNumbers('123456');
console.log(value);
