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

    isEmpty () {
        return this.array.isEmpty();
    }
}

module.exports = {ArrayStack};