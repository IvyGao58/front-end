/**
 * @topic: 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 * @Date: 2019-08-04
 * 注意利用镜像对称。对每层左右子树，对应位置上的值进行对比。
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function isSymmetrical(pRoot)
{
    if (!pRoot) {
        return true;
    }
    return compare(pRoot.left, pRoot.right);
}

function compare(left, right) {
    if (left === null && right === null) {
        return true;
    }
    if (left === null && right !== null) {
        return false;
    }
    if (left !== null && right === null) {
        return false;
    }
    if (left.val !== right.val) {
        return false;
    }
    return compare(left.left, right.right) && compare(left.right, right.left);
}


let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);

one.left = five;
two.left = three;
two.right = four;
one.right = five;

let value = isSymmetrical(one);
console.log(value);
