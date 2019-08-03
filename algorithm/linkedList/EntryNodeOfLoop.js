/**
 * @topic: 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null
 * @Date: 2019-08-03
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}

function entryNodeOfLoop(pHead)
{
    if (!pHead || !pHead.next) {
        return null;
    }
    let ready = [pHead];
    let current = pHead;
    while(current.next) {
        current = current.next;
        for (let item of ready) {
            if (current.val === item.val && current.next === item.next) {
                return current;
            }
        }
        ready.push(current);
    }
    return null;
}

let one = new ListNode(1);
let two = new ListNode(2);
let three = new ListNode(3);
let four = new ListNode(4);
one.next = two;
two.next = three;
three.next = four;
four.next = null;
let value = entryNodeOfLoop(one);
console.log(value);
