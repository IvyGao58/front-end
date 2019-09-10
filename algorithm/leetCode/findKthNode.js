/**
 * @topic: 链表倒数第k个节点
 * @Date: 2019-09-05
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}

// 1. 两个指针，相差K步，先走的指针指向null，那么后走指针的节点指向倒数第K个
function findKthToTail2Pointer(head, k)
{
    if (!head || k <= 0) {
        return null;
    }
    let fast = head;
    let slow = head;
    let count = 1;
    while(fast.next) {
        if (count >= k) {
            slow = slow.next;
        }
        fast = fast.next;
        count++;
    }
    if (count < k) {
        return null;
    }
    return slow;
}

// 2.用辅助数组。
function findKthToTailArray(head, k) {
    if (!head || k <= 0) {
        return null;
    }
    let newHead = head;
    let res = [];
    while(newHead) {
        res.push(newHead);
        newHead = newHead.next;
    }
    res = res.reverse();
    return res[k - 1];
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
let result = findKthToTailArray(node1, 2);
console.log(result);

