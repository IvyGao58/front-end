/**
 * @topic: 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 * @Date: 2019-07-24
 */

function containsRepeatingLetter(str) {
    var regex = RegExp('([a-zA-Z])\\1{1}');
    return regex.test(str);
}

let value = containsRepeatingLetter('rattler');
console.log(value);
