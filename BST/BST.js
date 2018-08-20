class BST {
    constructor () {
        this.root = null;
        this.size = 0;
    }

    getSize () {
        return this.size;
    }

    isEmpty () {
        return this.size === 0;
    }

    addRoot (e) {
        if (this.root === null) {
            this.root = new _Node(e);
            this.size++;
        } else {
            this.add(this.root, e);
        }
    }

    add (node, e) {
        if (e === node.e) {
            return;
        } else if (e - node.e < 0 && node.left === null) {
            node.left = new Node(e);
            this.size++;
            return;
        } else if (e - node.e > 0 && node.right === null) {
            node.right = new Node(e);
            this.size++;
            return;
        }

        //  不为空再递归向下查找
        if (e - node.e < 0) {
            this.add(node.left, e);
        } else {
            this.add(node.right, e);
        }
    }

}

function _Node (e = null) {
    this.e = e;
    this.left = null;
    this.right = null;
}