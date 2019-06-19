function Node(element) {
    this.element = element
    this.next = null
}

function LinkedList() {
    this.head = new Node('head')
    this.insert = insert
    this.reverse = reverse
    this.display = display
}


function insert(node) {
    const newNode = new Node(node)
    let current = this.head
    if(!this.head) {
        this.insert(newNode)
    }
    while(current.next) {
        current = current.next
    }
    current.next = newNode
    newNode.next = null
}

function reverse() {
    let preview = null
    let head = this.head
    let next
    while(head) {
        next = head.next
        head.next = preview
        preview = head
        head = next
    }

    let str = preview.element
    while(preview.next) {
        str += ('->'+ preview.next.element)
        preview = preview.next
    }
    console.log(str)

}

function display() {
    let head = this.head
    let str = head.element
    while(head.next) {
        str += ('->'+ head.next.element)
        head = head.next
    }
    console.log(str)
}

function mergeList(list1, list2) {
    let head1 = list1.head
    let head2 = list2.head
    let resultList = new LinkedList()
    resultList.head = list1.head.element + list2.head.element % 10
    let remain = false
    while(head1.next || head2.next) {
        let added
        if (remain) {
            added = (head1.element + head2.element + 1)
        } else {
            added = (head1.element + head2.element)
        }
        remain = added % 10 > 0
        let node = new Node(added)
        resultList.insert(node)
    }
}

var list = new LinkedList()
list.insert(4)
list.insert(2)
list.insert(5)
list.display()

list.reverse()


