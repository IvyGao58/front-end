/**
 * @topic: 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * @Date: 2019-08-27
 * 给定一个链表: 1->2->3->4->5, 和 n = 2。当删除了倒数第二个节点后，链表变为 1->2->3->5.
 */

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeNthFromEnd = function(head, n) {
    if (!head) {
        return null;
    }
    let list = [];
    let begin = head;
    while(begin) {
        list.push(begin);
        begin = begin.next;
    }
    let index = list.length - n;
    list.splice(index, 1);
    if (!list.length) {
        return null;
    }
    list.forEach((item, index) => {
        item.next = index < list.length && list[index+1] || null;
    });
    return list[0];
};

let one = new ListNode(1);
let two = new ListNode(2);
let three = new ListNode(3);
let four = new ListNode(4);
let five = new ListNode(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

let val = removeNthFromEnd(one, 2);
console.log(val);
