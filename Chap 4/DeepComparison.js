function deepEqual(a, b) {
  //first compare with triple equals to see if the two are the same type and value
  if (a === b) return true;
  //second if statement checks for null values and non-objects
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  //declare counters
  var propsInA = 0, propsInB = 0;
  //for-in loop counts the number of properties in a and b
  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    //if b has a prop not in a or if, upon recursive function all,
    //the properties don't have the same values, return false
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }
  //otherwise, return whether the number of properties are the same
  return propsInA == propsInB;
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true