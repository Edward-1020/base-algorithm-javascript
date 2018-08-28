const {MaxHeap} = require('./MaxHeap');

class PriorityQueue {
    constructor () {
        this.maxHeap = new MaxHeap();
    }
    
    getFront () {
        return this.maxHeap.findMax();
    }

    enqueue (e) {
        this.maxHeap.add(e);
    }

    dequeue () {
        return this.maxHeap.extracMax();
    }
}