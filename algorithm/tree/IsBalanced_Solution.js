/**
 * @topic: 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 * @Date: 2019-07-28
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function isBalanced_Solution(pRoot)
{
    if (pRoot === null) {
        return true;
    } else {
        let h = height(pRoot);
        return h !== -1;
    }
}

function height(root) {
    if (root === null) {
        return 0;
    }
    let left = height(root.left);
    if (left === -1) {
        return -1;
    }
    let right = height(root.right);
    if (right === -1) {
        return -1;
    }
    return  Math.abs(left - right) > 1 ? -1 : 1 + Math.max(left, right);
}

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);


one.left = two;
two.left = three;

let value = isBalanced_Solution(one);
console.log(value);
