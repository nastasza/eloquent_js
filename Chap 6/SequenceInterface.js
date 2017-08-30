function ArraySeq(a) {
    this.container = a;
}
ArraySeq.prototype.begin = function () {
    this.curr_idx = 0;
    return this.curr_idx;
};
ArraySeq.prototype.end = function () {
    return this.container.length;
};
ArraySeq.prototype.next = function () {
    ++this.curr_idx
    return this.curr_idx;
};
ArraySeq.prototype.valueAt = function (iterator) {
    return iterator < this.container.length ? this.container[iterator] : undefined;
};


function RangeSeq(from, to) {
    this.container = [];
    for(var i=from; i<=to; ++i) {
        this.container.push(i);
    }
}
RangeSeq.prototype = Object.create(ArraySeq.prototype);


function logFive(seq) {
    var c = 0;
    for(var i=seq.begin(); i!=seq.end() && c<5; i=seq.next(), ++c) {
        console.log(seq.valueAt(i));
    }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104