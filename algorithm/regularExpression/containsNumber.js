/**
 * @topic: 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
 * @Date: 2019-07-24
 */

function containsNumber(str) {
    var regex = RegExp('\\d');
    return regex.test(str);
}

let result = containsNumber('abc123');
console.log(result);
