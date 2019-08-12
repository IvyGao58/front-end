/**
 * @topic: 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * @Date: 2019-08-12
 * input: [1,2,3]
 * output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

// 插入法。时间复杂度高
let permute = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [nums];
    }
    return backtrack(nums);
};

function backtrack(left) {
    let res = [];
    if (left.length > 1) {
        let first = left[0];
        let rest = left.slice(1);
        let preResult = backtrack(rest);
        for (let i = 0; i<preResult.length; i++) {
            for (let j = 0; j <= preResult[i].length; j++) {
                let temp = [];
                let begin = preResult[i].slice(0, j);
                if (begin.length) {
                    temp = temp.concat(begin);
                }
                temp.push(first);
                let end = preResult[i].slice(j);
                if (end.length) {
                    temp = temp.concat(end);
                }
                res.push(temp);
            }
        }
    } else if (left.length === 1) {
        return [left];
    }
    return res;
}

let value = permute([5,4,6,2]);
console.log(value);


// 回溯法
var permute2 = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [nums];
    }
    let visited = [];
    for (let i = 0; i< nums.length; i++) {
        visited.push(0);
    }
    let res = [];
    backtrack2(res, visited, nums, [], 0, nums.length);
    return res;
};

function backtrack2(res, visited, nums, temp, cur_len, length) {
    if (cur_len !== length) {
        for (let i = 0; i< nums.length; i++) {
            if (visited[i]) continue;
            visited[i] = 1;
            temp.push(nums[i]);
            backtrack2(res, visited, nums, temp, cur_len+1, length);
            visited[i] = 0;
            temp.pop();
        }
    } else {
        res.push([...temp]);
    }
    return res;
}

let val = permute2([5,4,6,2]);
console.log(val);
