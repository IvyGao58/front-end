/**
 * @topic: 给定一串JSON字符串，判断JSON字符串错误的类型，比如缺少{或者[或者”或者，
 * @Date: 2019-09-06
 * 通过用例，未提交测试
 */

function isValid(str) {
    if (!str) {
        return null;
    }
    let big = [];
    let middle = [];
    let punc = [];
    for (let i = 0; i<str.length; i++) {
        if (str[i] === '{') {
            big.push('{');
        } else if (str[i] === '[') {
            middle.push('[')
        } else if (str[i] === '"') {
            punc.push('"');
        } else if (str[i] === '}') {
            if (big.length) {
                big.pop();
            } else {
                return false;
            }
        } else if (str[i] === ']') {
            if (middle.length) {
                middle.pop();
            } else {
                return false;
            }
        }
    }
    return big.length === 0 && middle.length === 0 && punc.length % 2 === 0;
}


let val = isValid('{ "name": "gao" , "k": [ "a": 23 ]}');
console.log(val);
