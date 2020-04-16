/*
Triangle
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
-> 3
*/

//your code here
let j = "#";
for (let i = 1; i <= 7; i++) {
  console.log(j);
  j += "#";
}
