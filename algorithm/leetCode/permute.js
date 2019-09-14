/**
 * @topic: 46.全排列 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * @Date: 2019-09-11
 * input: [1,2,3]
 * output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 回溯法求全排列
 */

function permutate(nums) {
    if (nums.length === 0) return nums;
    if (nums.length === 1) return [nums];
    let res = [];
    let visited = [...new Array(nums.length)].map(_ => 0);

    function findPermutate(temp, length) {
        if (length === nums.length) {
            res.push(temp);
        }
        for (let i = 0; i<nums.length; i++) {
            if (!visited[i]) {
                visited[i] = 1;
                findPermutate(temp.concat([nums[i]]), length + 1);
                visited[i] = 0;
            }
        }
    }
    findPermutate([], 0);
    return res;
}



let val = permutate([1]);
console.log(val);
