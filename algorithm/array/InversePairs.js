/**
 * @topic: 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 * 输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007
 * @Date: 2019-07-21
 * @思路：归并排序的改进。归并排序合并时，两个指针分别指向左右数组开头。但为了方便计算逆序对数量，应该将两个指针指向数组末尾，
 * 依次向前递减。
 */

function inversePairs(data)
{
    if (!data || data.length === 0) {
        return null;
    }
    let temp = [];
    let sum = sortArr(data, 0, data.length - 1, temp);
    console.log(data);
    return sum%1000000007;
}

function sortArr(data, left, right, temp) {
    if (left < right) {
        let mid = parseInt((left + right) / 2);
        let leftCount = sortArr(data, left, mid, temp);
        let rightCount = sortArr(data, mid+1, right, temp);
        let count = merge(data, left, mid, right, temp);
        return leftCount + rightCount + count;
    }
    return 0;
}

function merge(data, left, mid, right, temp) {
    let i = mid;
    let j = right;
    let t = right;
    let count = 0;
    while(i >= left && j >= mid+1) {
        if (data[i] <= data[j]) {
            temp[t--] = data[j--];
        } else {
            count += j - mid;
            temp[t--] = data[i--];
        }
    }
    while(i >= left) {
        temp[t--] = data[i--]
    }
    while(j >= mid + 1) {
        temp[t--] = data[j--];
    }
    for (let m = left; m <= right; m++) {
        data[m] = temp[m];
    }
    return count;
}

let value = inversePairs([1,3,6,2]);
console.log(value);
