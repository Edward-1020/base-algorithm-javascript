const {BST} = require('../BST/BST-improve');

class BSTSet {
    constructor () {
        this.bst = new BST();
    }

    getSize () {
        return this.bst.getSize();
    }

    isEmpty () {
        return this.bst.isEmpty();
    }

    add (e) {
        this.bst.addRoot(e);
    }

    contains (e) {
        return this.bst.contains(e);
    }

    remove (e) {
        this.bst.remove(e);
    } 
}