/**
 * @topic: 买钉子，有两种规格，一盒4个，一盒9个，给你一个n，求刚好买n个钉子的最小盒数
 * @Date: 2019-09-06
 * 通过用例，未提交测试
 */

function buyNailByMath(n) {
    if (n <= 0) {
        return 0;
    }
    if (n % 9 === 0) {
        return n / 9;
    }
    let res = [];
    let current = 1;
    while(current * 9 < n) {
        current++;
        res.push(9);
    }
    current > 0 && current--;
    let left = n - current * 9;
    while(left % 4 !== 0 &&  left < n) {
        left += 9;
        current--;
        res.pop();
    }
    if (left % 4 !== 0) {
        return 0;
    }
    let value = left / 4;
    return res.length + value;
}


// 动态规划
function buyNailByDynamic(n) {
    if (n<0) return 0;
    if (n % 9 === 0) return n/9;
    let arr = [...Array(n+1)].map(_ => Infinity);
    arr[4] = 1;
    arr[8] = 2;
    arr[9] = 1;
    let begin = 10;
    while(begin <= n) {
        arr[begin] = Math.min(arr[begin-4], arr[begin-9]) + 1;
        begin++;
    }
    return arr[n];
}

let val = buyNailByDynamic(21);
console.log(val);
