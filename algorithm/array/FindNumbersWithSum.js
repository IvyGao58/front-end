/**
 * @topic: 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，
 * 输出两个数的乘积最小的。
 * @Date: 2019-07-29
 */


// 第一个和为sum的pair，一定是乘积最小的。
function FindNumbersWithSum(array, sum)
{
    let res = [];
    if (!array) {
        return res;
    }
    let start = 0;
    let end = array.length - 1;
    while(start < end) {
        if (array[start] + array[end] === sum) {
            res.push(array[start]);
            res.push(array[end]);
            return res;
        } else if (array[start] + array[end] < sum) {
            start++;
        } else {
            end--;
        }
    }
    return res;
}

let value = FindNumbersWithSum([1,2,3,4,5,6,7,8,9,10], 10);
console.log(value);
