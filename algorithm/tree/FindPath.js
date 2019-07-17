/**
 * @topic: 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
 * @Date: 2019-07-15
 */


function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function FindPath(root, expectNumber) {
    let listAll = [];
    let list = [];
    findElement(root, expectNumber, list, listAll);
    return listAll;
}

function findElement(root, expectNumber, list, listAll) {
    if (!root) {
        return listAll;
    }

    list.push(root.val);
    let leftNumber = expectNumber - root.val;
    if (leftNumber === 0 && !root.left && ! root.right) {
        listAll.push([...list]);
    }
    if (root.left) {
        findElement(root.left, leftNumber, list, listAll);
    }
    if (root.right) {
        findElement(root.right, leftNumber, list, listAll);
    }
    list.pop(); // 还原公共父节点
    return listAll;
}


let root = new TreeNode(2);
let leftone = new TreeNode(13);
let rightone = new TreeNode(3);
let lefttwotwo = new TreeNode(10);
let righttwotwo = new TreeNode(5);

root.left = leftone;
root.right = rightone;

rightone.left = lefttwotwo;
rightone.right = righttwotwo;

let result = FindPath(root, 15);
console.log(result);
