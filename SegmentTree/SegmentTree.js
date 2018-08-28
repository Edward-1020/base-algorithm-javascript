class SegmentTree {
    constructor (arr, merger) {
        this.merger = merger;

        this.data = JSON.parse(JSON.stringify(arr));
        this.tree = new Array(4 * arr.length);

        this.buildSegmentTree(0, 0, data.length - 1);
    }

    leftChild (index) {
        return 2 * index + 1;
    }

    rightChild (index) {
        return 2 * index + 2;
    }

    buildSegmentTree (treeIndex, l, r) {
        if (l === r) {
            this.tree[treeIndex] = data[l];
            return;
        }

        let leftTreeIndex = this.leftChild(treeIndex);
        let rightTreeIndex = this.rightChild(treeIndex);

        let mid = l + (r - l) / 2;
        this.buildSegmentTree(leftTreeIndex, l, mid);
        this.buildSegmentTree(rightTreeIndex, mid + 1, r);

        this.tree[treeIndex] = this.merger.merge(tree[leftTreeIndex], tree[rightTreeIndex]);
    }

    query (queryL, queryR) {
        if (queryL < 0 || queryL >= this.data.length ||
        queryR < 0 || queryR >= this.data.length
        || queryL > queryR) {
            throw new Error(`Index is illegal`);
        }

        return this._query(0, 0, this.data.length - 1; queryL, queryR);
    }

    _query (treeIndex, l, r, queryL, queryR) {
        if (l === queryL && r === queryR) {
            return this.tree[treeIndex];
        }

        let mid = l + (r - l) / 2;
        let leftTreeIndex = this.leftChild(treeIndex);
        let rightTreeIndex = this.rightChild(treeIndex);

        if (queryL >= mid + 1) {
            return this._query(rightTreeIndex, mid + 1, r, queryL, queryR);
        } else if (queryR <= mid) {
            return this._query(leftTreeIndex, l, mid, queryL, queryR);
        }

        let leftResult = this.query(leftTreeIndex, l, mid, queryL, mid);
        let rightResult = this.query(rightTreeIndex, mid + 1, r, mid + 1, queryR);
        return this.merger.merge(leftResult, rightResult);
    }

    set (index, e) {
        if (index < 0 || index >= data.length) {
            throw new Error(`Index is illegal!`);
        }

        data[index] = e;
    }

    _set (treeIndex, l, r, index, e) {
        if (l === r) {
            this.tree[treeIndex] = e;
            return;
        }

        let mid = l + (r - l) / 2;
        let leftTreeIndex = this.leftChild(treeIndex);
        let rightTreeIndex = this.rightChild(treeIndex);

        if (index > mid + 1) {
            this._set(rightTreeIndex, mid + 1, r, index, e);
        } else {
            this._set(leftTreeIndex, r, mid, index, e);
        }

        this.tree[treeIndex] = this.merger.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
    }
}