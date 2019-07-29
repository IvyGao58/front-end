/**
 * @topic: 给定字符串 str，检查其是否符合如下格式
             1、XXX-XXX-XXXX
             2、其中 X 为 Number 类型
 * @Date: 2019-07-29
 */

function matchesPattern(str) {
    var regex = RegExp('^\\d{3}-\\d{3}-\\d{4}$');
    return regex.test(str);
}


let value = matchesPattern('800-055-1212');
console.log(value);
