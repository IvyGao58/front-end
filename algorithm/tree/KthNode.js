/**
 * @topic: 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）中，按结点数值大小顺序第三小结点的值为4。
 * @Date: 2019-08-08
 * 中序遍历。从小到大排序。
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function kthNode(pRoot, k)
{
    if (!pRoot || k < 1) {
        return null;
    }
    let res = [];
    middle(pRoot, res);
    return res[k - 1];
}

function middle(root, res) {
    if (!root) {
        return null;
    }
    if (root.left) {
        middle(root.left, res);
    }
    res.push(root);
    if (root.right) {
        middle(root.right, res);
    }
}

let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);
let eight = new TreeNode(8);

five.left = three;
five.right = seven;
three.left = two;
three.right = four;
seven.left = six;
seven.right = eight;


let value = kthNode(five, 4);
console.log(value);
