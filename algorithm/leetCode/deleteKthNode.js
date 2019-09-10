/**
 * @topic: 删除链表的倒数第K个节点
 * @Date: 2019-09-05
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}

// 1. 两个指针，相差N步，先走的指针指向null，那么后走指针的节点指向倒数第N个
function deleteNthToTail2Pointer(head, n)
{
    if (!head || n <= 0) {
        return null;
    }

}

function deleteNthToTail2Array(head, n){
    if (!head || n <= 0) {
        return null;
    }
    let res = [];
    let current = head;
    while(current) {
        res.push(current);
        current = current.next;
    }
    res.splice(res.length - n, 1);
    res.forEach((item, index) => {
        item.next = index < res.length -1 ? res[index+1] : null;
    });
    return res.length && res[0] || null;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
let result = deleteNthToTail2Array(node1, 2);
console.log(result);

