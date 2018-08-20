const {LinkedList} = require('./LinkedList');

class LinkedListStack {
    constructor () {
        this.list = new LinkedList();
    }

    getSize () {
        return this.list.getSize();
    }

    isEmpty () {
        return this.list.isEmpty();
    }

    push (e) {
        this.list.addFirst(e);
    }

    pop () {
        return this.list.removeFirst();
    }

    peek () {
        return this.list.getFirst();
    }
}

const linkedListStack = new LinkedListStack();
for (let i = 0; i < 5; i ++) {
    linkedListStack.push(i);
}

while (!linkedListStack.isEmpty()) {
    console.log(linkedListStack.pop());
}