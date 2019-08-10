/**
 * @topic: 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，
 * 那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个：
 * {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}，
 * {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 * @Date: 2019-08-10
 */

function maxInWindows(num, size)
{
    let res = [];
    if (size <= 0 || size > num.length) {
        return res;
    }
    let begin = 0;
    let end = begin + size;
    while(end <= num.length) {
        let newData = num.slice(begin, end);
        res.push(Math.max(...newData));
        begin++;
        end = begin + size;
    }
    return res;
}


let val = maxInWindows([2,3,4,2,6,2,5,1], 5);
console.log(val);
