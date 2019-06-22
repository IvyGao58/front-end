/**
 * @topic: 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 * @Date: 2019-06-22
 */

function reOrderArray(array)
{
    let odd = [];
    let even = [];
    array.forEach(item => {
        item % 2 !== 0 && odd.push(item) || even.push(item);
    });
    return odd.concat(even);
}

let value = reOrderArray([1,2,3,4,5]);
console.log(value);
