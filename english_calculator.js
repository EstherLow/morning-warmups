/*
English Calculator

Write a function that performs a basic math operation expressed in words, and return the result in words. For example... "two plus two" would return "two plus two is four" "two minus one" would return "two minus one is one"

You should at minimum support the numbers zero to twenty and the operators plus, minus and times.

Bonus

Feel free to add more operators and support any amount of numbers.
*/

var lodash = require('lodash');

var numerals = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  ninteen: 19,
  twenty: 20
}

var operators = {
  'plus': function(a, b) {return a + b},
  'minus': function(a, b) {return a - b},
  'times': function(a, b) {return a * b}
}

function calculateWords(stringMath) {
var newArray = stringMath.match(/\w+-?\w+/gi)
console.log(newArray);
var op = operators[newArray[1]]
//console.log(op);
var sumTotal = op (numerals[newArray[0]], numerals[newArray[2]]);
//console.log(sumTotal);
for (var i in numerals) {
  if (numerals[i] == sumTotal) {
    console.log(i);
      }
}

}





calculateWords("three minus three")
