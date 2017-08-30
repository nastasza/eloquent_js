/*
print

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/

var size = 8; //this is the variable setting

var board = "";//either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);