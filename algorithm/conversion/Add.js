/**
 * @topic: 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。
 * @Date: 2019-07-31
 */

function Add(num1, num2)
{
    while(num1){
        [num1, num2] = [(num1 & num2) << 1, num1 ^ num2];
    }
    return num2;
}

let value = Add(5,6);
console.log(value);
