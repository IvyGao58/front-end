/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 反转链表，pass
function ReverseList(pHead)
{
    // write code here
    if(pHead === null || pHead.next === null) {
        return pHead;
    }
    var preview = null;
    var current = pHead;
    var next = null;
    while(current !== null) {
        next = current.next;
        current.next = preview;
        preview = current;
        current = next;
    }
    return preview;
}
