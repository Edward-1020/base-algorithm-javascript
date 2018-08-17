const {Array} = require('./Array');

class ArrayStack {
    constructor (array = new Array()) {
        this.array = array;
    }

    push (e) {
        return this.array.addLast(e);
    }

    pop () {
        return this.array.removeLast();
    }

    peek () {
        return this.array.getLast();
    }
}

const testArray = new Array([1, 2, 3]);
const arrayStack = new ArrayStack(testArray);