/**
 * @topic: 寻找等于特定值的数组的中的值对
 * @Date: 2019-08-21
 * input: nums = [2, 7, 11, 15], target = 9
 * output: [0,1]
 */

/*记住要配对的数*/
var twoSum2 = function(nums, target) {
    let res = {};
    for (let i = 0; i<nums.length; i++) {
        if (res[nums[i]] !== undefined) {
            let begin = nums.findIndex(item => item === res[nums[i]]);
            return [begin, i];
        } else {
            res[target - nums[i]] = nums[i];
        }
    }
};

let val2 = twoSum2([0,4,3,0], 0);
console.log(val2);
