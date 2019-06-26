/**
 * @topic: 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。
 * 例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
 * （注意：这两个序列的长度是相等的）
 * @Date: 2019-06-24
 */

function IsPopOrder(pushV, popV){
    if (!pushV.length) {
        return false;
    }
    let ready = [];
    let index = 0;
    pushV.forEach(item => {
        ready.push(item);
        while (ready.length && popV[index] === ready[ready.length - 1]) {
            ready.pop();
            index++;
        }
    });
    return ready.length === 0;
}

let arr1 = [1,2,3,4,5];
let arr2 = [4,3,5,1,2]; // 0
let arr3 = [4,5,3,2,1]; // 1
let isCorrect = IsPopOrder(arr1, arr2);
console.log(isCorrect);
