/**
 * @topic: 已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
             1、返回一个函数 result，该函数接受一个参数
             2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致
 * @Date: 2019-07-24
 */

function partial(fn, str1, str2) {
    return function (str3) {
        return fn.call(null, str1, str2, str3);
    }
}

var sayIt = function(greeting, name, punctuation) {
    console.log(greeting + ', ' + name + (punctuation || '!'));
};
let value = partial(sayIt, 'Hello', 'Ellie')('!!!');
