/**
 * @topic: 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 * @Date: 2019-07-17
 */

function MoreThanHalfNum_Solution(numbers)
{
    let half_len = Math.floor(numbers.length/2);
    let reduce = numbers.reduce((all, item) => {
        if (item in all) {
            all[item]++;
        } else {
            all[item] = 1;
        }
        return all;
    }, {});
    let result = Object.keys(reduce).filter(item => {
        if (reduce[item] > half_len) {
            return item;
        }
    });
    return result.length && result[0] || 0;
}


let value = MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]);
console.log(value);
