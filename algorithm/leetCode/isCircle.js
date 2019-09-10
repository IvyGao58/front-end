/**
 * @topic: 链表是否有环
 * @Date: 2019-09-05
 */

// 1. 两种情况，首先是head就是环的开始。其次，head后的第n个节点为环的开始。
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function isCircleBySet(head) {
    if (!head) {
        return false;
    }
    let set = new Set();
    while(head) {
        if (set.has(head)) {
            return true;
        } else {
            set.add(head);
        }
        head = head.next;
    }
    return false;
}

// 两个指针，一快一慢
function isCircleByPointer(head) {
    if(!head || !head.next) {
        return false;
    }
    let fast = head.next;
    let slow = head;
    while(slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node1;

let val = isCircleByPointer(node1);
console.log(val);
