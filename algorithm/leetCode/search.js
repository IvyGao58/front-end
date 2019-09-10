/**
 * @topic: 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target.
 * 如果目标值存在返回下标，否则返回 -1。
 * @Date: 2019-09-05
 */

var search = function(nums, target) {
    if (!nums || !nums.includes(target)) {
        return -1;
    }
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let mid = parseInt((start + end)/2);
        if (target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};

let val = search([22], 16);
console.log(val);
