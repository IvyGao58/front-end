/**
 * @topic: 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
 * @Date: 2019-07-17
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function convert(pRootOfTree)
{
    // write code here
    if (pRootOfTree === null) {
        return null;
    }
    let beginNode = convertChildNode(pRootOfTree, true);
    while (beginNode.left) {
        beginNode = beginNode.left;
    }
    return beginNode;
}

function convertChildNode(root, tag) {
     if (root.left === null && root.right === null) {
         return root;
     }
     if (root.left) {
         let lastNode = convertChildNode(root.left, true);
         lastNode.right = root;
         root.left = lastNode;
     }
     if (root.right) {
         let lastNode = convertChildNode(root.right, false);
         lastNode.left = root;
         root.right = lastNode;
     }
     if (tag) {
         return root.right && root.right || root;
     } else {
         return root.left && root.left || root;
     }
}

let root = new TreeNode(7);
let left1 = new TreeNode(5);
let left11 = new TreeNode(3);
let left12 = new TreeNode(6);
let right1 = new TreeNode(11);
let right11 = new TreeNode(9);
let right12 = new TreeNode(23);

root.left = left1;
root.right = right1;
left1.left = left11;
left1.right = left12;

right1.left = right11;
right1.right = right12;

let value = convert(root);
console.log(value);
