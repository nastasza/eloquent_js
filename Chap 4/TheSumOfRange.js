/*
display between two range of number

*/


function range(start, end, step) {
  if (!step) { step = 1; }
  var r = [];
  for (var i = start; start <= end ? i <= end : i >= end; i += step) { r.push(i); }
  return r;
}

function sum(arr) {
  var s = 0;
  for (var i = 0; i < arr.length; i++) { s += arr[i];}
  return s;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(5, 2, -2));
// → [5, 3]
console.log(sum(range(1, 10)));
// → 55