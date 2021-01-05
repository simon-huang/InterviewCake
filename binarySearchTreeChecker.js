class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

function isBinarySearchTree(treeRoot) {
    // Determine if the tree is a valid binary search tree
    function helper(node, smaller = null, larger = null) {
        if (node == null) {
            return true;
        }
        //Or set default lower bound to negative infinity
        //And default upper to positive infinity
        //And always check whether the value is in bounds
        if (smaller != null && !(node.value < smaller)) {
            return false;
        }
        if (larger != null && !(node.value > larger)) {
            return false;
        }
        return helper(node.left, node.value, larger) && helper(node.right, smaller, node.value);
    }
    return helper(treeRoot);
}

//Non-recursive solution just for practice
function isBinarySearchTreeNoRecursion(treeRoot) {
    if (!treeRoot) {
        return true;
    }
    let stack = [];
    stack.push([treeRoot, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]);
    while (stack.length) {
        let [node, lower, upper] = stack.pop();
        if (node.value < lower || node.value > upper) {
            return false;
        }
        if (node.left) {
            stack.push([node.left, lower, node.value]);
        }
        if (node.right) {
            stack.push([node.right, node.value, upper]);
        }
    }
    return true;
}
//O(n) time and space. But if we know for sure the tree is balanced, space is O(log n)
//in DFS, because log base 2 of (n+1) is the height of the tree

// Tests

let desc = 'valid full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'both subtrees valid';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'out of order linked list';
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(70);
rightNode = rightNode.insertRight(60);
rightNode = rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'one node tree';
treeRoot = new BinaryTreeNode(50);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`)
    }
}