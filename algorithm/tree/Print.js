/**
 * @topic: 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，
 * 第三行按照从左到右的顺序打印，其他行以此类推。
 * @Date: 2019-08-05
 * 注意：最终返回的数组不要flat。返回二维数组。
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
    let flag = true;
    let res = [];
    let order = [];
    order.push(pRoot);
    while(order.length) {
        let temp = [];
        let len = order.length;
        for(let i = 0; i< len; i++) {
            let out = order.shift();
            temp.push(out.val);
            if (out.left) {
                order.push(out.left);
            }
            if (out.right) {
                order.push(out.right);
            }
        }
        flag = !flag;
        if (flag) {
            res.push(temp.reverse());
        } else {
            res.push(temp);
        }
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
