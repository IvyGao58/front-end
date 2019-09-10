/**
 * @topic: 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
           为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
           如果 pos 是 -1，则在该链表中没有环。不允许修改给定的链表。
 * @Date: 2019-09-05
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    let map = new Map();
    let node = head;
    let count = 0;
    while(node) {
        if (map.has(node)) {
            return node;
        } else {
            map.set(node, count++);
            node = node.next;
        }
    }
    return null;
};


let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

let val = detectCycle(node1);
console.log(val);
