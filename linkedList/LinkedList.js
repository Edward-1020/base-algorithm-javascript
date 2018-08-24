class LinkedList {
    constructor () {
        this.dummyHead = new _Node();
        this.size = 0;
    }

    getSize () {
        return this.size;
    }

    isEmpty () {
        return this.size === 0;
    }

    add (index, e) {
        if (index < 0 || index > this.size) {
            throw new Error(`add failed, Illegal index`);
        }

        let prev = this.dummyHead;
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }
        prev.next = new _Node(e, prev.next);
        this.size++;
    }

    addFirst (e) {
        this.add(0, e);
    }

    addLast (e) {
        this.add(this.size, e);
    }

    remove (index) {
        if (index < 0 || index > this.size) {
            throw new Error(`remove failed, Illegal index`);
        }
        
        let prev = this.dummyHead;

        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }

        let retNode = prev.next;
        prev.next = retNode.next;
        retNode.next = null;
        this.size--;

        return retNode.e;
    }

    removeFirst () {
        return this.remove(0);
    }

    removeLast () {
        return this.remove(this.size - 1);
    }

    removeElement (e) {
        let prev = this.dummyHead;
        while (prev.next !== null) {
            if (prev.next.e === e) {
                break;
            }
            prev = prev.next;
        }
        let retNode = prev.next;
        retNode.next = null;
        prev.next = prev.next.next;
    }

    set (index, e) {
        if (index < 0 || index > size) {
            throw new Error(`set failed, Illegal index`);
        }
        
        let cur = this.dummyHead.next;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        cur.e = e;
    }

    get (index) {
        let cur = this.dummyHead.next;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.e;
    }

    getFirst () {
        return this.get(0);
    }

    getLast () {
        return (this.size - 1);
    }
    
}

function _Node (e = null, next = null) {
    this.e = e;
    this.next = next;
}

module.exports = {
    LinkedList
};