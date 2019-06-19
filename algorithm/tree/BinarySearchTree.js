function BinarySearchTree() {
    // define a node
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    let root = null;

    // insert a node
    this.insert = function (key) {
        let newNode = new Node(key);
        if(root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    };

    let insertNode = function (node, newNode) {
        if (newNode.key <= node.key) {
            // 根节点左子树是否存在
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            // 根节点右子树是否存在
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode)
            }
        }
    };

    // 前序遍历
    this.preOrderTravers = function () {
        preOrderTraversNode(root)
    };
    let preOrderTraversNode = function (node) {
        if (node !== null) {
            console.log(node.key);
            preOrderTraversNode(node.left);
            preOrderTraversNode(node.right);
        }
    };

    // 中序遍历
    this.inOrderTravers = function () {
        inOrderTraversNode(root)
    };
    let inOrderTraversNode = function (node) {
        if(node !== null) {
            inOrderTraversNode(node.left);
            console.log(node.key);
            inOrderTraversNode(node.right);
        }
    };

    // 后序遍历
    this.postOrderTravers = function () {
        postOrderTraversNode(root);
    };
    let postOrderTraversNode = function (node) {
        if (node !== null) {
            postOrderTraversNode(node.left);
            postOrderTraversNode(node.right);
            console.log(node.key)
        }
    };

    // 查找最小值
    this.findMin = function() {
        return minValue(root);
    };
    let minValue = function (node) {
        if(node !== null) {
            while(node && node.left !== null) {
                node = node.left
            }
            return node.key
        } else {
            return null
        }
    };

    // 查找最大值
    this.findMax = function() {
        return maxValue(root);
    };
    let maxValue = function(node) {
        if (node !== null) {
            while(node && node.right !== null) {
                node = node.right
            }
            return node.key
        } else {
            return null
        }
    };

    // 搜索特定值
    this.searchNode = function(key) {
        return search(root, key)
    };
    let search = function (node, key) {
        if (node === null) {
            return false
        } else {
            if(node.key === key) {
                return true;
            } else {
                if(key < node.key) {
                    return search(node.left, key)
                } else {
                    return search(node.right, key)
                }
            }
        }
    };

    // 删除特定值
    this.remove = function(key) {
        removeNode(root, key)
    };
    let removeNode = function(node, key) {
        if (node === null) {
            return null
        } else if (node.key > key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (node.key < key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            // remove 叶子节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // remove 有一个子节点
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            // remove 有两个子节点,把右边子节点本身/左子树节点作为当前节点的值。
            let aux = minValue(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key); // 要移除的值
            return node
        }
    }
}

var bst = new BinarySearchTree();
bst.insert(3);
bst.insert(12);
bst.insert(6);
bst.insert(9);
bst.insert(5);

console.log('前序遍历：');
bst.preOrderTravers();

console.log('中序遍历：');
bst.inOrderTravers();

console.log('后序遍历：');
bst.postOrderTravers();

let search = bst.searchNode(5);
console.log('查找节点: '+ search);

let max = bst.findMax();
console.log('节点最大值: ' + max);

let min = bst.findMin();
console.log('节点最小值 ' + min);

bst.remove(9);
console.log('删除节点后，前序遍历')
bst.preOrderTravers()

