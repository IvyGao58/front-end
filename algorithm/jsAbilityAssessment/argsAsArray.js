/**
 * @topic: 将数组 arr 中的元素作为调用函数 fn 的参数
 * @Date: 2019-07-22
 */

function argsAsArray(fn, arr) {
    return fn.apply(this, arr);
}

/*es6
function argsAsArray(fn, arr) {
    return fn(...arr)
}*/

let value = argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');},
            ['Hello', 'Ellie', '!']);
console.log(value);
