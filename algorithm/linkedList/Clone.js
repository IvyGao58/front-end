/**
 * @topic: 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
 * 返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 * @Date: 2019-07-17
 */

function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}

function clone(pHead)
{
    // write code here
    if (pHead === null) {
        return null;
    }
    let current = pHead;
    let nextClone = new RandomListNode(pHead.label);
    let randomClone = nextClone;
    while(current.next) {
        current = current.next;
        nextClone.next = new RandomListNode(current.label);
        nextClone = nextClone.next;
    }

    let saveHead = randomClone;
    while(pHead.next) {
        randomClone.random = pHead.random;
        pHead = pHead.next;
        randomClone = randomClone.next;
    }
    if (pHead.random) {
        randomClone.random = pHead.random;
    }
    return saveHead;
}


let one = new RandomListNode(1);
let two = new RandomListNode(2);
let three = new RandomListNode(3);
let four = new RandomListNode(4);

one.next = two;
two.next = three;
three.next = four;

one.random = three;
two.random = four;
three.random = one;
four.random = two;

let result = clone(one);
console.log(result);
