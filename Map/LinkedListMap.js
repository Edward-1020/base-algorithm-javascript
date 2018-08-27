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
}

function _Node (key = null, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
}