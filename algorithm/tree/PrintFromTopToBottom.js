/**
 * @topic: 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 * @Date: 2019-06-27
 */

 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}


function printFromTopToBottom(root)
{
    if (!root) {
        return [];
    }
    let result = [root.val];
    let current = [root];
    while (current.length) {
        let ready = [];
        current.forEach(item => {
            item.left && ready.push(item.left);
            item.right && ready.push(item.right);
        });
        current = ready;
        ready.forEach(item => {
            result.push(item.val);
        });
    }
    return result;
}

 let a = new TreeNode(1);
 let b = new TreeNode(2);
 let c = new TreeNode(3);
 let d = new TreeNode(4);
 let f = new TreeNode(7);
 a.left = b;
 a.right = c;
 b.right = f;
 c.left = d;

let values = printFromTopToBottom(null);
console.log(values);
