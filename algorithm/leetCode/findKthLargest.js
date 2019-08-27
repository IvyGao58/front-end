/**
 * @topic: 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * @Date: 2019-08-27
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 */

var findKthLargest = function(nums, k) {
    if (!nums.length || nums.length < k) {
        return null;
    }
    nums.sort((a, b) => { return a-b; }).reverse();
    return nums[k-1];
};

let val = findKthLargest([3,2,1,5,6,4], 2);
console.log(val);
