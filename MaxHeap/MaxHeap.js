class MaxHeap {
    constructor () {
        this.data = [];
    }

    size () {
        return this.data.size;
    }

    swap (indexA, indexB) {
        let temp = this.data[indexA];
        this.data[indexA] = this.data[indexB];
        this.data[indexB] = temp; 
    }

    parent (index) {
        if (index === 0) {
            throw new Error(`index-0 doesn't have parent`);
        }

        return ~~((index - 1) / 2);
    }

    leftChild (index) {
        return index * 2 + 1;
    }

    rightChild (index) {
        return index * 2 + 2;
    }

    add (e) {
        this.data.push(e);
        this.siftUp(this.data.length - 1);
    }

    siftUp (k) {
        while (k > 0 && this.data[this.parent(k)] - this.data[k] <0) {
            this.swap(this.parent(k), k);
            k = this.parent(k);
        }
    }

    findMax () {
        if (this.data.length === 0) {
            throw new Error(`heap is empty!`);
        }
        return this.data[0];
    }

    extracMax () {
        let ret = this.findMax();
        this.swap(0, this.data.length - 1);
        this.data.pop();
        this.siftDown(0);

        return ret;
    }

    siftDown (k) {
        while (this.leftChild(k) < this.data.length) {
            let j = this.leftChild(k);

            if (j + 1 < this.data.length && this.data[j + 1] - this.data[j] > 0) {
                j = this.rightChild(k);
            }

            if (this.data[k] >= this.data[j]) {
                break;
            }

            this.data.swap(k, j);
            k = j;
        }
    }

    replace (e) {
        let ret = this.findMax();
        this.data[0] = e;
        this.siftDown(0);
        return ret;
    }
}

module.exports = {
    MaxHeap
};