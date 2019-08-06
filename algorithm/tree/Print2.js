/**
 * @topic: 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
 * @Date: 2019-08-06
 * 和print.js几乎一样。层次遍历。
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function print(pRoot)
{
    if (!pRoot) {
        return [];
    }
    let res = [];
    let order = [pRoot];
    while(order.length) {
        let len = order.length;
        let level = [];
        for (let i = 0; i< len; i++) {
            let target = order.shift();
            level.push(target.val);
            if (target.left) {
                order.push(target.left);
            }
            if (target.right) {
                order.push(target.right);
            }
        }
        res.push(level);
    }
    return res;
}


let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;

let value = print(one);
console.log(value);
