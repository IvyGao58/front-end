/**
 * @topic: 实现函数 callIt，调用之后满足如下条件
         1、返回的结果为调用 fn 之后的结果
         2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
 * @Date: 2019-08-06
 */


function callIt(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, args);
}

let func = function (a, b) {
    return a + ' ' + b;
};
let value = callIt(func, 'good', 'afternoon');
console.log(value);
