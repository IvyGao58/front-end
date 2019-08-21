/**
 * @topic: 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且
 * 不重复的三元组。
 * @Date: 2019-08-21
 * input: nums = [-1, 0, 1, 2, -1, -4]，
 * output:[[-1, 0, 1], [-1, -1, 2]]
 */

var threeSum = function(nums) {
    if (nums.length < 3) return []; // 数组长度不够
    let min = Math.min.apply(this, [...nums]);
    let max = Math.max.apply(this, [...nums]);
    if (min > 0 || max < 0) return []; // 和不为0

    let flag = false;
    let zero = false;
    nums.forEach(item => item !== 0 && (flag = true) || (zero = true));
    if (!flag) return [[0,0,0]]; // 值全为0

    let res = [];
    nums.sort((a,b) => a-b);
    getArr(nums, res);
    return res;
};

/*排序，从0位置开始遍历，选取与当前位置相邻的值，以及数组最后一个值作为起点。若三数之和小于0，说明左边的值要右移，若大于0，
* 说明右边的值要左移。*/
function getArr(nums, res) {
    for (let i = 0; i< nums.length-2; i++) {
        let first = i+1;
        let last = nums.length - 1;
        while(first < last) {
            if (nums[i] * nums[last] > 0) break;
            let result = nums[first] + nums[i] + nums[last];
            if (result === 0) {
                res.push([nums[i], nums[first], nums[last]]);
            }
            if(result <= 0) {
                while(first < last && nums[first] === nums[++first]) {}
            } else {
                while(first < last && nums[last] === nums[--last]) {}
            }
        }
        while(nums[i] === nums[i+1]) {
            i++;
        }
    }
    return res;
}

let val = threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]);
console.log(val);
