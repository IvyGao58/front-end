// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
// 则重建二叉树并返回。

// pass
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
    var nodeValue = pre.length > 0 ? pre[0] : vin[0];
    var node = new TreeNode(nodeValue);

    if (pre.length === 1 || vin.length === 1) {
        node.left = null;
        node.right = null;
        return node;
    }
    var locate = vin.findIndex(function(item) {
        return item === nodeValue
    });
    if(locate === null) {
        return null;
    }
    // 拿出左子树的前序和中序
    var leftVin = vin.slice(0, locate);
    var leftPre = pre.filter(function(item) {
        return leftVin.includes(item);
    });

    var leftExists = leftVin.length > 0 || leftPre.length >0;
    node.left = leftExists ? reConstructBinaryTree(leftPre, leftVin) : null;

    // 同理右子树
    var rightVin = vin.slice(locate + 1, vin.length);
    var rightPre = pre.filter(function(item) {
        return rightVin.includes(item);
    });

    var rightExists = rightVin.length > 0 || rightPre.length >0;
    node.right = rightExists ? reConstructBinaryTree(rightPre, rightVin) : null;

    return node;
}

const pre = [1,2,4,7,3,5,6,8]
const vin = [4,7,2,1,5,3,8,6]
const node = reConstructBinaryTree(pre, vin)
console.log(node)
