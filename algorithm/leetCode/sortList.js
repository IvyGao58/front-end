/**
 * @topic: 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 * @Date: 2019-08-27
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 */

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var sortList = function(head) {
    if (!head) {
        return null;
    }
    let list = [];
    let begin = head;
    while(begin) {
        list.push(begin);
        begin = begin.next;
    }
    list.sort((a, b) => { return a.val - b.val});
    list.forEach((item, index) => {
        item.next = index < list.length && list[index+1] || null;
    });
    return list[0];
};

let four = new ListNode(4);
let two = new ListNode(2);
let one = new ListNode(1);
let three = new ListNode(3);

four.next = two;
two.next = one;
one.next = three;

let val = sortList(four);
console.log(val);
