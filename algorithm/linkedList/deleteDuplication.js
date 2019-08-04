/**
 * @topic: 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。
 * 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 * @Date: 2019-08-03
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}

function deleteDuplication(pHead)
{
    if (!pHead) {
        return null;
    }
    let res = [];
    let current = pHead;
    while(current){
        if (is_in(res, current)) {
            res.pop();
            let val = current.val;
            while(current && current.val === val) {
                current = current.next;
            }
        } else {
            res.push(current);
            current = current.next;
        }
    }
    if (current) {
        is_in(res, current) && res.pop() || res.push(current);
    }
    for(let i = 0; i < res.length - 1; i++) {
        res[i].next = res[i+1];
    }
    if (res.length) {
        res[res.length - 1].next = null;
        return res[0];
    }
    return null;
}

function is_in(res, node) {
    let result = res.find(item => item.val === node.val);
    return result !== undefined;
}

let one = new ListNode(1);
let two = new ListNode(2);
let three1 = new ListNode(3);
let three2 = new ListNode(3);
let four1 = new ListNode(4);
let four2 = new ListNode(4);
let five = new ListNode(5);

one.next = two;
two.next = three1;
three1.next = three2;
three2.next = four1;
four1.next = four2;
four2.next = five;

let value = deleteDuplication(one);
console.log(value);
