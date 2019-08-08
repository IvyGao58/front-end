/**
 * @topic: 请实现两个函数，分别用来序列化和反序列化二叉树
 * @Date: 2019-08-08
 * 牛客网判题有点问题，deserialize参数无用，要用全局变量arr
 */


// 序列化时要用前序遍历。在反序列化时，可以通过left，right的指针重建左右子树
 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let arr = [];
function serialize (pRoot) {
     if (!pRoot) {
         return null;
     }
     pre(pRoot, arr);
     return arr;
}

function pre(root, res) {
     if (!root) {
         return null;
     }
     res.push(root.val);
     if (root.left) {
         pre(root.left, res);
     } else {
         res.push('#');
     }
     if (root.right) {
         pre(root.right, res);
     } else {
         res.push('#');
     }
}

function deserialize(s) {
     if (!arr.length) {
         return null;
     }
     return build(arr);
}

function build(s) {
     if (s) {
         let target = s.shift();
         if (target === '#') {
             return null;
         }
         let root = new TreeNode(target);
         root.left = build(s);
         root.right = build(s);
         return root;
     }
     return build(s);
}


let five = new TreeNode(5);
let four = new TreeNode(4);
let eight = new TreeNode(8);
let seven = new TreeNode(7);
let six = new TreeNode(6);
let two = new TreeNode(2);
let nine = new TreeNode(9);
let ten = new TreeNode(10);
let eleven = new TreeNode(11);

five.left = four;
five.right = eight;

four.left = seven;
four.right = six;
six.left = two;

eight.left = nine;
eight.right = eleven;
nine.right = ten;


let value = serialize(five);
console.log(value);

let val = deserialize(value);
console.log(val);
