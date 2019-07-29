/**
 * @topic: 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
 * @Date: 2019-07-28
 */

// return list, 比如[a,b]，其中ab是出现一次的两个数字
function FindNumsAppearOnce(array)
{
    let reducer = array.reduce(function(allitem, current) {
        if (current in allitem) {
            allitem[current]++;
        } else {
            allitem[current] = 1;
        }
        return allitem;
    }, {});
    return Object.keys(reducer).filter(item => reducer[item] === 1)
}


let res = FindNumsAppearOnce([1,1,2,2,2,3]);
console.log(res);
