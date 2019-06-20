/**
 * @topic: 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 * @Date: 2019-04-20
 */

function jumpFloor(number)
{
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    for(let i = 3; i<= number; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[number];
}
console.log(jumpFloor(4));
