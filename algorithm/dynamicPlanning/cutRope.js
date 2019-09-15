/**
 * @topic: 67.剑指offer剪绳子 给你一根长度为n的绳子，请把绳子剪成m段（m、n都是整数，n>1并且m>1），
 * 每段绳子的长度记为k[0],k[1],...,k[m]。请问k[0]xk[1]x...xk[m]可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 * @Date: 2019-09-15
 * input: 8
 * output: 18
 */

function cutRope(number)
{
    if (number < 2) return 0;
    if (number === 2) return 1;
    if (number === 3) return 2;
    let res = [];
    // number>=4时，子段1,2,3不需要再细分。
    res[1] = 1;
    res[2] = 2;
    res[3] = 3;

    // 隔板法。当前这一刀，会将绳子切割成i, n-i两部分。寻找一个i位置，使得在1~n-1范围内f(i)*f(n-i)最大。
    for (let i = 4; i<=number; i++) {
        let max = null;
        for (let j = 1; j <= i/2; j++) { // 绳子剪成i/n-i与n-i/i是相同的。
            let current = res[j] * res[i-j];
            max = max > current ? max : current;
        }
        res[i] = max;
    }
    return res.pop();
}

let val = cutRope(8);
console.log(val);
