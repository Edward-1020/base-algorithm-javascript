class LinkedListQueue {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize () {
        return this.size;
    }

    isEmpty () {
        return this.size === 0;
    }

    enqueue (e) {
        if (this.tail === null) {
            this.tail = new _Node(e);
            this.head = this.tail;
        } else {
            this.tail.next = new _Node(e);
            this.tail = this.tail.next;
        }
        this.size++;
    }

    dequeue () {
        if (this.isEmpty()) {
            throw new Error(`empty`);
        }
        let retNode = this.head;
        this.head = this.head.next;
        retNode.next = null;

        if (this.head === null) {
            this.tail = null;
        }

        this.size --;
        return retNode.e;
    }

    getFront () {
        if (this.isEmpty()) {
            throw new Error(`empty`);
        }

        return this.head.e;
    }
}

function _Node (e = null, next = null) {
    this.e = e;
    this.next = next;
}