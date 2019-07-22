/**
 * @topic: 实现函数 makeClosures，调用之后满足如下条件：
         1、返回一个函数数组 result，长度与 arr 相同
         2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
 * @Date: 2019-07-22
 */


function makeClosures(arr, fn) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        result[i] = fn.bind(this, arr[i]);
    }
    return result;
}

let value = makeClosures([1, 2, 3], function (x) {
    return x * x;
});
console.log(value[1]);
