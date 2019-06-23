/**
 * @topic: 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 * @description: 子结构： 即B可以是A的任意一部分。包含了一个节点，可以只取左子树或右子树，或者都不取。画图考虑。
 * @Date: 2019-06-23
 */

/*function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function HasSubtree(pRoot1, pRoot2)
{
    if (!pRoot1 || !pRoot2) {
        return false;
    } else {
        return isSubTree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
    }
}

function isSubTree(subRoot1, subRoot2) {
    if (!subRoot2) { // 优先判断B是否存在，如果不存在，A是否存在都没有影响。直接返回上一级去判断。
        return true;
    }
    if (!subRoot1) {
        return false;
    }
    if (subRoot1.val === subRoot2.val) {
        return isSubTree(subRoot1.left, subRoot2.left) && isSubTree(subRoot1.right, subRoot2.right);
    } else {
        return false;
    }
}
