/**
 * 使用js实现循环队列意义不大，这里只做练习
 */

class LoopQueue {
    constructor (data = new Array(10)) {
        this.data = data;
        this.size = this.data.length;
        this.front = 0;
        this.tail = 0;
    }

    enqueue (e) {
        this.tail = (this.tail + 1) % this.size;
        this.data[this.tail] = e;
        this.size = this.data.length;
    }

    dequeue () {
        if (this.isEmpty()) {
            throw new Error(`empty queue!`);
        }
        
        let ret = this.data[this.front];
        this.data[this.front] = null;
        this.front = (this.front + 1) % this.size;
        this.size = this.data.length;
        return ret;
    }

    getFront () {
        if (this.isEmpty()) {
            throw new Error(`empty queue!`);
        }
        return this.data[this.front];
    }

    isEmpty () {
        return this.front === this.tail;
    }
}