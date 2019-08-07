/**
 * @topic: 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
 * @Date: 2019-08-07
 */

function containsNumberExp(str) {
    var reg = RegExp('\\d');
    return reg.test(str);
}

let valueExp = containsNumberExp('ad12');
console.log(valueExp);


function containsNumber(str) {
    var i = 0;
    while(i < str.length) {
        if (Number(str[i])) {
            return true;
        }
        i++;
    }
    return false;
}

let value = containsNumber('ad');
console.log(value);

