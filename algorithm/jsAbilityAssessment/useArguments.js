/**
 * @topic: 函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。
 * 本题的测试参数全部为 Number 类型，不需考虑参数转换。
 * @Date: 2019-07-24
 */

function useArguments() {
    var args = Array.prototype.slice.call(arguments);
    var fn = function() {
        var inner_args = arguments[0];
        const reducer = function(accumulator, current) {
            return accumulator + current;
        };
        return inner_args.reduce(reducer);
    };
    return fn.call(null, args);
}

useArguments(1,2,3,4);
