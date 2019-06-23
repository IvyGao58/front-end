/**
 * @topic: 操作给定的二叉树，将其变换为源二叉树的镜像。即以根元素为中心，交换左右子树
 * @Date: 2019-06-23
 */

 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Mirror(root)
{
    if (root === null) {
        return;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
}

 let one = new TreeNode(8);
 let leftone = new TreeNode(6);
 let rightone = new TreeNode(10);
 let lefttwo = new TreeNode(5);
 let leftthree = new TreeNode(9);
 let righttwo = new TreeNode(7);
 let rightthree = new TreeNode(11);

 one.left = leftone;
 one.right = rightone;
 leftone.left = lefttwo;
 leftone.right = righttwo;
 rightone.left = leftthree;
 rightone.right = null;

 let value = Mirror(one);
 console.log(value);




