/**
 * @topic: 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
 * @Date: 2019-07-21
 * @input: [1, 2, 3, 4], 'z', 2
 * @output: [1, 2, 'z', 3, 4]
 */

function insert(arr, item, index) {
    var new_arr = arr.slice();
    new_arr.splice(index, 0, item);
    return new_arr;
}

let arr = insert([1, 2, 3, 4], 'z', 2);
console.log(arr);
