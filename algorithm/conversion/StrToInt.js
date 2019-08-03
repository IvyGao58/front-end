/**
 * @topic: 将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，
 * 要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。
 * @Date: 2019-07-31
 */

function strToInt(str)
{
    return str.includes('.') ? 0 : +str || 0;
}
