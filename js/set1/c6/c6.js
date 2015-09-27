var Hamming = require('./Hamming.js');

var string1 = "this is a test";
var string2 = "wokka wokka!!!";

var diff = Hamming.computeHammingDistance(string1, string2);
console.log(diff);
