const {Array} = require('./Array');

class ArrayQueue {
    constructor (array = new Array()) {
        this.array = array;
    }

    enqueue (e) {
        return this.array.addLast(e);
    }

    dequeue () {
        return this.array.removeFirst();
    }

    getFront () {
        return this.array.getFirst();
    }
}

module.exports = {ArrayQueue};