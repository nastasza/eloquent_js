/*
reverse an array
*/

function reverseArray (arr) {
  return (function reverser(r, t) {
    r.push(t.splice(-1, 1)[0]);
    return !!t.length ? reverser(r, t) : r
  }([], arr));
};
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

function reverseArrayInPlace() {
    arrayValue.reverse();
}
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]