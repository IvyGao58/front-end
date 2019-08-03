/**
 * @topic: 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
 * @Date: 2019-08-03
 */

//s字符串
function isNumeric(s)
{
    let regex = RegExp('^[\\+\\-]?\\d*(\\.\\d+)?([Ee][\\+\\-]?\\d+)?$');
    return regex.test(s);
}

let value = isNumeric('00.3');
console.log(value);
console.log(Number(+.3));
