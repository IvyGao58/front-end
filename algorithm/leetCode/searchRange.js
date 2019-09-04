/**
 * @topic: 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
           你的算法时间复杂度必须是 O(log n) 级别。
           如果数组中不存在目标值，返回 [-1, -1]。
 * @Date: 2019-09-04
 * input: nums = [5,7,7,8,8,10], target = 8
 * output: [3,4]
 */

// 1. Array findIndex()
var searchRange = function(nums, target) {
    if (nums.length === 0 || !nums.includes(target)) {
        return [-1, -1];
    }
    let begin = nums.findIndex(item => item === target);
    nums = nums.reverse();
    let end = nums.findIndex(item => item === target);
    end = nums.length - 1 - end;
    return [begin, end];
 };


// 2.indexOf, lastIndexOf
var searchRange2 = function(nums, target) {
    if (nums.length === 0 || !nums.includes(target)) {
        return [-1, -1];
    }
    return [nums.indexOf(target), nums.lastIndexOf(target)];
};

// 3.二分查找
var searchRange3 = function(nums, target) {
    if (nums.length === 0 || !nums.includes(target)) {
        return [-1, -1];
    }
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;
    while(start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target > nums[mid]) {
            start = mid + 1;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            break;
        }
    }
    start = mid;
    end = mid;
    while (start - 1 >= 0 && nums[start - 1] === target) {
        start--;
    }
    while(end + 1 <= nums.length -1 && nums[end + 1] === target) {
        end++;
    }
    return [start, end];
};

let val = searchRange3([1, 1, 2], 1);
console.log(val);
