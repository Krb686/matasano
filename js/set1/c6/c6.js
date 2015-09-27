var Hamming = require('./Hamming.js');
var XorTool = require('./XorTool.js');
var fs = require('fs');

var string1 = "this is a test";
var string2 = "wokka wokka!!!";

var diff = Hamming.computeHammingDistance(string1, string2);
console.log(diff);


var input = fs.readFileSync('./input').toString();
console.log(input);
XorTool.breakRepeatingKeyXor(input);
