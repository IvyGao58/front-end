/**
 * @topic: 给定一个无序的整数数组，找到其中最长上升子序列的长度。最长上升子序列不要求连续。
 * @Date: 2019-09-14
 * @type: dynamic planning
 * input: [10,9,2,5,3,7,101,18]
 * output: [2,3,7,101] 4
 */

var lengthOfLIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let res = [];
    res[0] = 1;
    let i = 1;
    while(i < nums.length) {
        let temp = null;
        for (let j =0; j<i; j++) {
            nums[i] > nums[j] && (temp = Math.max(temp, res[j]));
        }
        res[i] = temp && temp + 1 || 1;
        i++;
    }
    return Math.max(...res);
};

let val = lengthOfLIS([10,9,2,5,3,7,101,18]);
console.log(val);
