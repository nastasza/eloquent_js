/* print
#
##
###
####
#####
######
#######

*/

var x = [],
i, j = 7;
for (i = 0; i < j; i++) {
 x[i] = new Array(i + 2).join("#");
 console.log(x[i]);
}