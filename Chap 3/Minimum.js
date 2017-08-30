/* print minimum number

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/

function min (number1, number2) {
  if (number1 < number2) {
    return number1;
  } else {
    return number2;
  }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
