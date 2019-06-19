// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
// pass
function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    // 创建一个假节点，最后返回此节点的next
    let newHead = new ListNode(-1);
    let current = newHead;
    while(pHead1 !== null && pHead2 !== null){
        if(pHead1.val <= pHead2.val) {
            current.next = pHead1;
            pHead1 = pHead1.next;
        } else {
            current.next = pHead2;
            pHead2 = pHead2.next;
        }
        current = current.next;
    }
    current.next = pHead1 ? pHead1 : pHead2;
    return newHead.next;
}
