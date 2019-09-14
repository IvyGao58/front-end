/**
 * @topic: 70.爬楼梯：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @Date: 2019-09-10
 */

function climbStairs(n) {
    if (n<3) {
        return n;
    }
    let res = [0, 1, 2];
    let begin = 3;
    while (begin <= n) {
        res[begin] = res[begin - 1] + res[begin-2];
        begin++
    }
    return res.pop();
}

let val = climbStairs(3);
console.log(val);
