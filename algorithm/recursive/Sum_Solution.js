/**
 * @topic: 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * @Date: 2019-07-30
 */


// 短路表达式和递归
function Sum_Solution2(n) {
    let ans = n;
    ans && (ans += Sum_Solution1(n-1));
    return ans;
}

let value2 = Sum_Solution2(5);
console.log(value2);

// 字节码的形式来代替运算符
function Sum_Solution1(n)
{
    let left = String.fromCharCode(40);
    let right = String.fromCharCode(41);
    let multi = String.fromCharCode(42);
    let division = String.fromCharCode(47);
    let eval = (n) => new Function(["return ",
        left,
        n,
        multi,
        n+1,
        right,
        division,
        2
    ].join(""))();
    return eval(n);
}

let value = Sum_Solution1(3);
console.log(value);
