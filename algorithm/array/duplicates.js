/**
 * @topic: 找出数组 arr 中重复出现过的元素
 * @Date: 2019-07-21
 * @input: [1, 2, 4, 4, 3, 3, 1, 5, 3]
 * @output: [1, 3, 4]
 */

function duplicates(arr) {
    var counter = arr.reduce(function(freq, item) {
        if (item in freq) {
            freq[item]++;
        }else {
            freq[item] = 1;
        }
        return freq;
    }, {});
    var result = [];
    for(var item in counter) {
        if (counter[item] > 1) {
            result.push(item);
        }
    }
    return result;
}

let value = duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);
console.log(value);
