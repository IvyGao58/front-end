/**
 * @topic: 53.最大子序和。给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @Date: 2019-09-15
 * input: [-2,1,-3,4,-1,2,1,-5,4]
 * output: 6
 */

var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums;
    }
    let res = [];
    for (let i = 0; i< nums.length; i++) {
        if (!res.length) {
            res.push(nums[0]);
        } else {
            res[i] = Math.max(res[i-1] + nums[i], nums[i]);
        }
    }
    return Math.max(...res);
};

let val = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(val);
