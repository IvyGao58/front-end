/**
 * @topic: 堆排序
 * @Date: 2019-09-04
 */


function buildHeap(nums) {
    let non_leaf_idx = parseInt(nums.length/2) - 1;
    while(non_leaf_idx >= 0) {
        heapify(nums, nums.length, non_leaf_idx);
        non_leaf_idx--;
    }
}

function sortHeap(nums) {
    buildHeap(nums);
    for (let i = 0; i < nums.length; i++) {
        swap(0, nums.length -1 - i, nums);
        heapify(nums, nums.length - 1 - i, 0);
    }
    return nums;
}

function heapify(nums, length, non_leaf_idx) {
    while(true) {
        let max = non_leaf_idx;
        if (non_leaf_idx * 2 + 1 < length && nums[max] < nums[non_leaf_idx * 2 + 1]) {
            max = non_leaf_idx * 2 + 1;
        }
        if (non_leaf_idx * 2 + 2 < length && nums[max] < nums[non_leaf_idx * 2 + 2]) {
            max = non_leaf_idx * 2 + 2;
        }
        if (max === non_leaf_idx) {
            break;
        }
        swap(non_leaf_idx, max, nums);
        non_leaf_idx = max;
    }
}

function swap(a, b, nums) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}

let sorted = sortHeap([1,1,7,5,3]);
console.log(sorted);
