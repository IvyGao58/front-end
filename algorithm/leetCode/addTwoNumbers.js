/**
 * @topic: 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
         如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
         您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * @Date: 2019-08-27
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    if (!l1 || !l2) {
        return null;
    }
    let head = new ListNode(null);
    let current = head;
    let add = false;
    while(l1 || l2) {
        let value;
        if (l1 && !l2)  {
            if (add) {
                value = l1.val + 1;
                add = !add;
            } else {
                value = l1.val;
            }
        }
        else if (l2 && !l1) {
            if (add) {
                value = l2.val + 1;
                add = !add;
            } else {
                value = l2.val;
            }
        }
        else {
            if (add) {
                value = l1.val + l2.val + 1;
                add = !add;
            } else {
                value = l1.val + l2.val;
            }
        }
        if (value >= 10) {
            value = value - 10;
            add = true;
        }
        if (current.val === null) {
            current.val = value;
        } else {
            current.next = new ListNode(value);
            current = current.next;
        }
        l1 = l1 && l1.next || null;
        l2 = l2 && l2.next || null;
    }
    if (add) current.next = new ListNode(1);
    return head;
};

let two = new ListNode(2);
let four1 = new ListNode(4);
let three = new ListNode(3);

let five = new ListNode(5);
let six = new ListNode(6);
let four = new ListNode(4);


two.next = four1;
four1.next = three;

five.next = six;
six.next = four;

let val = addTwoNumbers(two, five);
console.log(val);
