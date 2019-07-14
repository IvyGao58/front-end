/**
 * @topic: 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。
 * 假设输入的数组的任意两个数字都互不相同。
 * @Date: 2019-07-14
 * @Confusion: 应该返回0/1，而非Yes/No?
 */


function verifySquenceOfBST(sequence)
{
    if (!sequence.length) {
        return false;
    } else {
        return subtree(sequence);
    }
}

function subtree(sequence) {
    let root = null;
    let left = [];
    let right = [];
    if (sequence.length) {
        root = sequence.pop();
        let index = sequence.findIndex(item => item > root);
        if (index === -1) {
            left = sequence.length > 0 && sequence.slice(0, index) || [];
            right = [];
        } else {
            left = index > 0 && sequence.slice(0, index) || [];
            right = sequence.slice(index);
        }
    }
    if (root) {
        if (right) {
            let element = right.find(item => item < root);
            if (element) {
                return false;
            } else {
                if (!subtree(right)) {
                    return false;
                }
            }
        }
        if (left) {
            if (!subtree(left)) {
                return false;
            }
        }
    }
    return true;
}

// let one = [6, 5, 8 , 10, 11, 7];
let two = [6, 5, 10, 3, 11, 7];
// let three = [12, 7, 8];
let result = verifySquenceOfBST(two);
console.log(result);
