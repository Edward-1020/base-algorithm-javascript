class BSTMap {
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

    contains (key) {
        return this.getNode(this.root, key) !== null;
    }

    add (key, value) {
        this.root = this._add(this.root, key, value);
    }

    _add (node, key, value) {
        if (node === null) {
            this.size++;
            return new _Node(key, value);
        }

        if (value - node.value < 0) {
            node.left = this._add(node.left, key, value);
        } else if (value - node.value > 0) {
            node.right = this._add(node.right, key, value);
        } else {
            node.value = value;
        }

        return node;
    }

    getNode (node, key) {
        if (node === null) {
            return null;
        }

        if (key === node.key) {
            return node;
        } else if (value - node.value < 0) {
            return this.getNode(node.left, key);
        } else {
            return this.getNode(node.right, key);
        }
    }

    get (key) {
        let node = this.getNode(this.root, key);
        return node === null ? null : node.value;
    }

    set (key, newValue) {
        let node = this.getNode(this.root, key);

        if (node === null) {
            throw new Error(`${key} doesn't exist!`);
        }

        node.value = newValue;
    }

    minumum (node) {
        if (node.left === null) {
            return node;
        }

        return this.minumum(node.left);
    }

    removeMin (node) {
        if (node.left == null) {
            let rightNode = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        }

        node.left = this.removeMin(node.left);
        return node;
    }

    remove (key) {
        let node = this.getNode(this.root, key);

        if (node != null) {
            this.root = this._remove(this.root, key);
            return node.value;
        }

        return null;
    }

    _remove (node ,key) {
        if (node == null) {
            return null;
        }

        if (key - node.key < 0) {
            node.left = this._remove(node.left, key);
        } else if (key - node.key > 0) {
            node.right = this._remove(node.right, key);
        } else {
            if (node.left == null) {
                let rightNode = node.right;
                node.right = null;
                this.size--;
                return rightNode;
            }

            if (node.right == null) {
                let leftNode = node.left;
                node.left = null;
                this.size--;
                return leftNode;
            }

            let successor = this.minumum(node.right);
            successor.right = this.removeMin(node.right);
            successor.left = node.left;

            node.left = node.right = null;

            return successor;
        }
    }
}

function _Node (key = null, value = null) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
}