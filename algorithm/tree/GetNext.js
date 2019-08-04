/**
 * @topic: 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
 * 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 * @Date: 2019-08-04
 * 注意：只有左子树/右子树的情况
 */


function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}


// 当前节点为左节点，next为根节点。
// 当前节点为根节点，next为右子树中，最左的节点
// 当前节点为右节点，next对应的节点为target。current为右节点的向上n个父节点，且current为target的左节点
function getNext(pNode)
{
    if (!pNode) {
        return null;
    }
    if (pNode.right) {
        let right = pNode.right;
        while(right.left) {
            right = right.left;
        }
        return right;
    } else {
        if (pNode.next) {
            while (pNode.next) {
                if (pNode.next.left === pNode) {
                    return pNode.next;
                }
                pNode = pNode.next;
            }

        }
        return null;
    }
}

let one = new TreeLinkNode(1);
let two = new TreeLinkNode(2);
let three = new TreeLinkNode(3);
let four = new TreeLinkNode(4);
let five = new TreeLinkNode(5);
let six = new TreeLinkNode(6);
let seven = new TreeLinkNode(7);

one.left = two;
two.left = three;
two.right = four;
four.right = five;
five.right = six;
six.right = seven;

seven.next = six;
six.next = five;
five.next = four;
four.next = two;
two.next = one;
three.next = two;

let value = getNext(seven);
console.log(value);
