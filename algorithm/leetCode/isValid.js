/**
 * @topic: 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * @Date: 2019-09-05
 */

var isValid = function(s) {
    if (!s) return true;
    let stack = [];
    let flag = false;
    for(let i = 0; i<s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] ==='[') {
            flag = true;
            stack.push(s[i]);
        } else {
            let first = stack.slice(stack.length-1)[0];
            if (first === '(' && s[i] === ')') {
                stack.pop();
            }
            else if (first === '{' && s[i] === '}') {
                stack.pop();
            }
            else if (first === '[' && s[i] === ']') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return flag && stack.length === 0;
};

let val = isValid('(])');
console.log(val);
