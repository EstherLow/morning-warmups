/*
Sum String

Write a function that takes as input a string that only contains numbers e.g. '1245'. Your function should take each individual character in the string and sum them together e.g. '1234' returns '13'
Bonus

Allow the string to include negative values e.g. '12-23' returns '4'
*/


function addString (stringNum) {
var numArray = stringNum.toString().match(/-?\d/g);
console.log(numArray);
var subtotal = 0

for (var i = 0; i < numArray.length; i++) {
  //console.log(numArray[i]);
  numArray[i] = parseInt(numArray[i], 10)
  subtotal += numArray[i];
  }
  console.log(subtotal);
}

addString('12-34')
