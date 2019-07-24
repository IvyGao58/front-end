/**
 * @topic: 输入两个链表，找出它们的第一个公共结点。
 * @Date: 2019-07-24
 */

/* 思路一：记录两链表长度差值x，让长的链表先走x步，然后两个链表同时往后走。如果没有公共节点，那应该返回null。*/
function ListNode(x){
    this.val = x;
    this.next = null;
}

function findFirstCommonNode(pHead1, pHead2)
{
    if (!pHead1 || !pHead2) {
        return null;
    }
    let pHead1_len = 1;
    let pHead2_len = 1;
    let pHead1_temp = pHead1;
    let pHead2_temp = pHead2;

    while(pHead1_temp.next) {
        pHead1_temp = pHead1_temp.next;
        pHead1_len += 1;
    }
    while(pHead2_temp.next) {
        pHead2_temp = pHead2_temp.next;
        pHead2_len += 1;
    }
    if (pHead1_len >= pHead2_len) {
        let diff = pHead1_len - pHead2_len;
        while (diff > 0) {
            pHead1 = pHead1.next;
            diff--;
        }
    }
    if (pHead1_len < pHead2_len) {
        let diff = pHead2_len - pHead1_len;
        while (diff > 0) {
            pHead2 = pHead2.next;
            diff--;
        }
    }
    while (pHead1 !== pHead2) {
        pHead1 = pHead1.next;
        pHead2 = pHead2.next;
    }
    return pHead1;
}


/* 思路二: 用拼凑法找公共节点。pHead1 = [3,2,5,6,7] phead2 = [1,4,6,7] 拼凑为[3,2,5,6,7,1,4,6,7],[1,4,6,7,3,2,5,6,7] */
function findFirstCommonNode2(pHead1, pHead2)
{
    let head1 = pHead1;
    let head2 = pHead2;
    while(head1 !== head2) {
        head1 = (head1 === null) ? pHead2 : head1.next;
        head2 = (head2 === null) ? pHead1 : head2.next;
    }
    return head1;
}


let chain11 = new ListNode(3);
let chain12 = new ListNode(2);
let chain13 = new ListNode(5);

chain11.next = chain12;
chain12.next = chain13;

let chain21 = new ListNode(1);
let chain22 = new ListNode(4);
chain21.next = chain22;

let common11 = new ListNode(6);
let common12 = new ListNode(7);

chain13.next = common11;
chain22.next = common11;
common11.next = common12;

let value = findFirstCommonNode(chain11, chain21);
console.log(value);

let result = findFirstCommonNode2(chain11, chain21);
console.log(result);
