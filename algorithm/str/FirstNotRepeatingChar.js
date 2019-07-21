/**
 * @topic: 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 * 并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
 * @Date: 2019-07-21
 */


function firstNotRepeatingChar(str)
{
    let arr = str.split('');
    let counter = arr.reduce((allitem, item) => {
        if (item in allitem) {
            allitem[item]++;
        } else {
            allitem[item] = 1;
        }
        return allitem;
    }, {});
    let target = undefined;
    for(let item in counter) {
        if (counter[item] === 1) {
            target = item;
            break;
        }
    }
    if (target) {
        return arr.findIndex(item => item === target);
    } else {
        return -1;
    }
}

let value = firstNotRepeatingChar('AaaDdbbc');
console.log(value);
