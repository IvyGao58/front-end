/**
 * @topic: 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
 * @Date: 2019-07-21
 * @input: 'abcdefabc'
 * @output: [0, 6]
 */

function findAllOccurrences(arr, target) {
    var indices = [];
    arr.filter(function(item, index) {
        if (item === target){
            indices.push(index);
        }
    });
    return indices;
}

let value = findAllOccurrences(['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c'], 'a');
console.log(value);
