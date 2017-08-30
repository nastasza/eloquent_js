/*
detect even and odd number

*/


var isEven = function(num) {
   num = Math.abs(num); // convert to absolute value to account to negative numbers
   //refer---> http://devdocs.io/javascript/global_objects/math/abs
   if (num === 0)
     return true;
   else if (num === 1)
     return false;
  else
    return isEven(num -2);
     
}

console.log(isEven(5));
// → false
console.log(isEven(68));
// → true
console.log(isEven(-1));
// → false