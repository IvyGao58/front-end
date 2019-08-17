/**
 * @topic: 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * @Date: 2019-08-12
 * input: nums = [1,2,3]
 * output: [[3],[1],[2],[1,2,3],[1,3],[2,3],[1,2],[]]
 */

// 从后往前遍历，遇到一个数，就将所有的子集添加上这个数。组成新的子集。
var subsets = function(nums) {
    let res = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        res.push([nums[i]]);
        res.forEach(item => {
            if (!item.includes(nums[i])) {
                let newItem = [...item];
                newItem.push(nums[i]);
                res.push(newItem);
            }
        })
    }
    res.push([]);
    return res;
};

let value = subsets([3,2,4,1]);
console.log(value);
