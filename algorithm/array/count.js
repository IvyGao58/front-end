/**
 * @topic: 统计数组 arr 中值等于 item 的元素出现的次数
 * @Date: 2019-07-21
 * @input:[1, 2, 4, 4, 3, 4, 3], 4
 * @output: 3
 */

function count(arr, item) {
    let times = 0;
    arr.forEach(function(element){
        if (element === item) {
            times++;
        }
    });
    return times;
}

let value = count([1,2,4,4,3,4,3], 4);
console.log(value);
