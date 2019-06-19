// 输入一个链表，输出该链表中倒数第k个结点。
// pass
function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindKthToTail(head, k)
{
    // 先反转
    let current = head;
    let ans = [];
    while(current) {
        ans.unshift(current.val);
        current = current.next;
    }
    let target = ans[k-1];
    while(head) {
        if(head.val === target) {
            return head;
        }
        head = head.next;
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
let result = FindKthToTail(node1, 1);
console.log(result);
