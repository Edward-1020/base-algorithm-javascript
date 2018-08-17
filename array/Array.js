class Array {
    constructor (data) {
        this.data = data;
        this.size = this.data.length;
    }

    add (index, e) {
        if (index < 0 || index > this.size) {
            throw new Error(`index is illegal`);
        }
        for (let i = this.size - 1; i >= index; i--) {
            this.data[i + 1] = this.data[i] 
        }
        this.data[index] = e;
        this.size = this.data.length;
    }
    
    addFirst (e) {
        this.add(0, e);
    }

    addLast (e) {
        this.add(this.size, e);
    }

    remove (index) {
        if (index < 0 || index > this.size) {
            throw new Error(`index is illegal`);
        }
        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.data.pop();
        this.size = this.data.length;
    }

    removeFirst () {
        this.remove(0);
    }

    removeLast () {
        return this.remove(this.size - 1);
    }

    set (index , e) {
        if (index < 0 || index > this.size) {
            throw new Error(`index is illegal`);
        }
        this.data[index] = e;     
    }

    get (index) {
        if (index < 0 || index > this.size) {
            throw new Error(`index is illegal`);
        }
        return this.data[index];       
    }

    getFirst () {
        return this.get(0);
    }

    getLast () {
        return this.get(this.size - 1);
    }

    find (e) {
        for (let i = 0; i < this.size; i ++) {
            if (this.data[i] === e) {
                return i;
            }
        }
        return -1;
    }
}

module.exports =  {Array};