/*
count the first character
*/

function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, chr) {
  var counter = 0
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === chr) {counter++;}
  }
  return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4