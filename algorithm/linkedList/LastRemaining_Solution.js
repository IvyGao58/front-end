/**
 * @topic: 每年六一儿童节,牛客都会准备一些小礼物去看望孤儿院的小朋友,今年亦是如此。HF作为牛客的资深元老,自然也准备了一些小游戏。
 * 其中,有个游戏是这样的:首先,让小朋友们围成一个大圈。然后,他随机指定一个数m,让编号为0的小朋友开始报数。
 * 每次喊到m-1的那个小朋友要出列唱首歌,然后可以在礼品箱中任意的挑选礼物,并且不再回到圈中,从他的下一个小朋友开始,
 * 继续0...m-1报数....这样下去....直到剩下最后一个小朋友,可以不用表演,并且拿到牛客名贵的“名侦探柯南”典藏版(名额有限哦!!^_^)。
 * 请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号是从0到n-1)
 * @Date: 2019-07-30
 * 不满足条件返回-1
 */

// 1、约瑟夫环
function remain(n, m) {
    if (n<1 || m<1) {
        return -1;
    }
    return (remain(n-1, m) +m) % n;
}

let v = remain(1,4);
console.log(v);


// 2、循环链表
function Node(val) {
    this.val = val;
    this.next = null;
    this.prior = null;
}

function lastRemaining_Solution(n, m)
{
    if (n < 1 || m < 1) {
        return -1;
    }
    let head = new Node(0);
    let current = head;
    for (let i = 1; i< n; i++) {
        let next = new Node(i);
        current.next = next;
        next.prior = current;
        current = next;
    }
    current.next = head;
    head.prior = current;

    let target = head;
    let count = 0;
    while(target.next!== target) {
        if (count === m-1) {
            target.prior.next = target.next;
            target.next.prior = target.prior;
            target = target.next;
            count = 0;
        } else {
            count++;
            target = target.next;
        }
    }
    return target.val;
}


let value = lastRemaining_Solution(0, 8);
console.log(value);
