import {LinkedList} from '../linkedList/LinkedList';

class LinkedListSet {
    constructor () {
        this.linkedList = new LinkedList();
    }

    getSize () {
        return this.linkedList.size();
    }

    isEmpty () {
        return this.linkedList.isEmpty();
    }

    contains (e) {
        return this.linkedList.contains(e);
    }

    add (e) {
        if (!this.linkedList.contains(e)) {
            this.linkedList.addFirst(e);
        }
    }

    remove (e) {
        this.linkedList.removeElement(e);
    }
}