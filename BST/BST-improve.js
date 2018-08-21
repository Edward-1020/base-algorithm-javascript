const {LinkedListQueue} = require('../linkedList/LinkedListQueue');

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

    add (e) {
        this.root = this._add(this.root, e);
    }

    _add (node, e) {
        if (node === null) {
            this.size++;
            return new Node(e);
        }

        if (e - node.e < 0) {
            node.left = this._add(node.left, e);
        } else if (e - node.e > 0) {
            node.right = this._add(node.right, e);
        }

        return node;
    }

    contains (E e) {
        return this._contains(this.root, e);
    }

    _contains (node, e) {
        if (node === null) {
            return false;
        }

        if (e - node.e === 0) {
            return true;
        } else if (e - node.e < 0) {
            return this._contains(node.left, e);
        } else {
            return this._contains(node.right, e);
        }
    }

    preOrder () {
        return this._preOrder(this.root);
    }

    _preOrder (node) {
        if (node === null) {
            return;
        }
        console.log(node.e);
        this._preOrder(node.left);
        this._preOrder(node.right);
    }

    inOrder () {
        this._inOrder(this.root);
    }

    _inOrder (node) {
        if (node === null) {
            return;
        }
        this._inOrder(node.left);
        console.log(node.e);
        this._inOrder(node.right);
    }

    postOrder () {
        this._postOrder(this.root);
    }

    _postOrder (node) {
        if (node === null) {
            return;
        }
        this._postOrder(node.left);
        this._postOrder(node.right);
        console.log(node.e);
    }

    levelOrder () {
        const queue = new LinkedListQueue();
        queue.enqueue(this.root);
        
        while (!queue.isEmpty()) {
            let cur = queue.dequeue();
            console.log(cur.e);

            if (cur.left !== null) {
                cur.add(cur.left);
            }

            if (cur.right !== null) {
                cur.add(cur.right);
            }
        }
    }

    minimum () {
        if (this.size === 0) {
            throw new Error(`BST is empty`);
        }

        return this._minumum(this.root).e;
    }

    _minumum (node) {
        if (node.left === null) {
            return node;
        }

        return this._minumum(node.left);
    }

    maximum () {
        if (this.size === 0) {
            throw new Error('BST empty!')
        }
        return this._maximum(this.root).e;
    }

    _maximum (node) {
        if (node.right === null) {
            return node;
        }
        return this._maximum(node.right);
    }

    removeMin () {
        let ret = this.minimum();
        this.root = this._removeMin(this.root);
        return ret;
    }

    _removeMin (node) {
        if (node.left === null) {
            let rightNode = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        }

        node.left = this.removeMin(node.left);
        return node;
    }

    removeMax () {
        let ret = this.maximum();
        this.root = this._removeMax(this.root);
        return ret;
    }

    _removeMax (node) {
        if (node.right === null) {
            let nodeLeft = node.left;
            node.left = null;
            this.size--;
            return nodeLeft;
        }

        node.right = this._removeMax(node.right);
        return node;
    }

    remove (e) {
        this.root = this._remove(this.root, e);
    }

    _remove (node, e) {
        if (node == null) {
            return null;
        }

        if (e - node.e < 0) {
            node.left = this._remove(node.left, e);
            return node;
        } else if (e - node.e > 0) {
            node.right = this._remove(node.right, e);
            return node;
        } else {
            if (node.left === null) {
                let rightNode = node.right;
                node.right = null;
                this.size--;
                return rightNode;
            }

            if (node.right === null) {
                let leftNode = node.left;
                node.left = null;
                this.size--;
                return leftNode;
            }

            let successor = this._minumum(node.right);
            successor.right = this._removeMin(node.right);
            successor.left = node.left;

            node.left = node.right = null;

            return successor;
        }
    }
}

function _Node (e = null) {
    this.e = e;
    this.left = null;
    this.right = null;
}