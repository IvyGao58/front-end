/**
 * @topic: 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 * @Date: 2019-07-21
 * @input: [1, 2, 3, 4]
 * @output: [1, 4, 9, 16]
 */

function square(arr) {
    var res = arr.map(function(item) {
        return Math.pow(item, 2);
    });
    return res;
}

let value = square([1,2,3,4]);
console.log(value);


