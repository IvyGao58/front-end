/**
 * @topic: 实现函数 partialUsingArguments，调用之后满足如下条件：
         1、返回一个函数 result
         2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
         3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
 * @Date: 2019-08-06
 * 红宝书 p604 创建柯里化函数的通用方式
 */

function partialUsingArguments(fn) {
    var outerArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = outerArgs.concat(innerArgs);
        return fn.apply(this, finalArgs);
    }
}

let func = function (a, b) {
    return a + ' ' + b;
};
let value = partialUsingArguments(func, 'good', 'afternoon');
console.log(value());
