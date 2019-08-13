/**
 * @topic: 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @Date: 2019-08-13
 * input: [-2,1,-3,4,-1,2,1,-5,4]
 * output: 6
 * 参考: https://zh.wikipedia.org/wiki/%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E5%88%97%E9%97%AE%E9%A2%98
 */

// 用动态规划，复杂度控制在O(n)。
var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums;
    }
    let res = [nums[0]];
    for (let i = 1; i<nums.length; i++) {
        let temp = [];
        temp.push(res[i-1] + nums[i], nums[i]);
        res[i] = Math.max.apply(null, temp);
    }
    return Math.max.apply(null, res);
};

let value = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(value);
