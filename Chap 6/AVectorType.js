function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function (b) {
    return new Vector(this.x + b.x, this.y + b.y);
};
Vector.prototype.minus = function (b) {
    return new Vector(this.x - b.x, this.y - b.y);
};

Vector.prototype.__defineGetter__("length", function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
});


Object.defineProperty(Vector.prototype, "norm", {get: function () {
    return Math.sqrt(this.x*this.x + this.y*this.y);
}});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5