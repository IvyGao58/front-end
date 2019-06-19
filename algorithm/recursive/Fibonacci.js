// 斐波那契数列

// case pass: 0% 递归
function Fibonacci(n)
{
    if(n >= 2) {
        return Fibonacci(n-1) + Fibonacci(n-2);
    } else {
        if(n === 0) {
            return 0;
        }
        if(n === 1){
            return 1;
        }
    }
}

var result = Fibonacci(5);
console.log(result)

// while递推 pass
function Fibonacci2(n) {
    var current = 1;
    var preview = 0;
    var length = n-1;
    if(n <= 1){
        return n
    }
    while(length >= 1) {
        current += preview;
        preview = current - preview;
        length--;
    }
    return current;
}
Fibonacci2(5);

// for 递推 pass
function Fibonacci7(n) {
    var ans = []
    ans[0] = 0;
    ans[1] = 1;
    for(let i = 2; i <= n; i++) {
        ans[i] = ans[i-1] + ans[i-2]
    }
    return ans[n]
}

console.log(Fibonacci7(5))

// case pass: 5%
function Fibonacci3(n) {
    return _Fibonacci(n, 0, 1)
}
function _Fibonacci(n, a, b) {
    if(n === 0) {
        console.log(a)
        return a
    } else {
        return _Fibonacci(n-1, b, a+b)
    }
}

Fibonacci3(5)

// 尾调用
function Fibonacci4(n, current = 0, next = 1) {
    if(n === 1) {
        console.log(next)
        return next
    }
    if(n === 0) {
        return 0
    }
    return Fibonacci4(n - 1, next, current + next);
}

Fibonacci4(5)

// 高级函数法
function fibonacci(n){
    let seed = 1;
    let num = [...Array(n)].reduce(p => {
        const temp = p + seed;
        seed = p;
        return temp;
    },0)
    console.log(num)
}
fibonacci(5)




