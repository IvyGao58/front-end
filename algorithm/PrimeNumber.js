// 给定一个正整数，编写程序计算有多少对质数的和等于输入的这个正整数，并输出结果。输入值小于1000。
// 如，输入为10, 程序应该输出结果为2。（共有两对质数的和为10,分别为(5,5),(3,7)）
// input: 输入包括一个整数n,(3 ≤ n < 1000)
// output: 输出对数
// example input: 10
// example output: 2

// pass

let readline = require('readline')
let myInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

myInterface.on('line', function (line) {
    var num = parseInt(line);
    var prime = [];
    // 先求小于n的素数
    for(var i = 2; i <= num; i++) {
        isPrime(i) || prime.push(i)
    }
    var count = 0
    for(var m = 0; m < prime.length; m++) {
        for(var n = m; n< prime.length; n++) {
            if(prime[m] + prime[n] === num) {
                count++;
            }
        }
    }
    console.log(count)
    return count;
});

function isPrime(num) {
    for(var i = 2; i<= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return true;
        }
    }
    return false;
}

// 再判断素数对（自己+自己）/（自己+别人）
