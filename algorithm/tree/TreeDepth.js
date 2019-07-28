/**
 * @topic: 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
 * @Date: 2019-07-27
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function treeDepth(pRoot)
{
    if (pRoot === null) {
        return 0;
    }
    let left = [pRoot.val.toString()];
    let right = [pRoot.val.toString()];
    left = getChild(pRoot.left, left);
    right = getChild(pRoot.right, right);
    let res = left.concat(right);
    res = res.map(item => item.length);
    return Math.max.apply(null, res);
}

function getChild(root, arr) {
    if (root === null) {
        return arr;
    }
    arr = arr.map(item => item + '' + root.val);
    if (root.left || root.right) {
        let left = getChild(root.left, arr);
        let right = getChild(root.right, arr);
        arr.push(...left);
        arr.push(...right);
    }
    return arr;
}


let one = new TreeNode(1);
let two = new TreeNode(2);

let four = new TreeNode(4);
let six = new TreeNode(6);

let three = new TreeNode(3);
let five = new TreeNode(5);
let seven = new TreeNode(7);
let nine = new TreeNode(9);


one.left = two;
one.right = three;

two.left = four;
two.right = six;

three.left = five;
three.right = seven;
seven.right = nine;

let value = treeDepth(null);
console.log(value);
