class LinkedListMap {
    constructor () {
        this.dummyHead = new _Node();
        this.size = 0;
    }
    
    isEmpty () {
        return this.size === 0;
    }

    getSize () {
        return this.size;
    }

    getNode (key) {
        let cur = this.dummyHead.next;

        while (cur !== null) {
            if (this.cur.key === key) {
                return cur;
            }

            cur = cur.next;
        }

        return null;
    }

    get (key) {
        let node = this.getNode(key);
        return node === null ? null : node.value;
    }

    add (key, value) {
        let node = this.getNode(key);

        if (node === null) {
            this.dummyHead.next = new _Node(key, value, this.dummyHead.next);
            this.size++;
        } else {
            node.value = value;
        }
    }

    set (key, newValue) {
        let node = this.getNode(newValue);
        if (node === null) {
            throw new Error(`${key} doesn't exist!`);
        }
        node.value = newValue;
    }

    remove (key) {
        let prev = this.dummyHead;

        while (prev.next !== null) {
            if (prev.next.key === key) {
                break;
            }

            prev = prev.next;
        }

        if (prev.next !== null) {
            let delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null;
            return delNode.value;
        }

        return null;
    }
}

function _Node (key = null, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
}