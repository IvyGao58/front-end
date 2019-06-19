// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

// result: pass 100%

function minNumberInRotateArray(rotateArray)
{
    if (rotateArray.length === 0) {
        return;
    }
    let locate;
    let copy = [];
    for(let i = 0; i< rotateArray.length - 1; i++) {
        if (rotateArray[i] > rotateArray[i+1]) {
            locate = i;
            break;
        } else {
            copy.push(rotateArray[i]);
        }
    }
    if (locate) {
        copy.push(rotateArray[locate]);
        rotateArray.splice(0, locate+1);
        rotateArray.concat(copy);
    }
    return rotateArray[0];
}

console.log(minNumberInRotateArray([3, 4, 5, 2, 2]));
