var XorTool = require('./XorTool.js');

var plainString = "Burning 'em, if you ain't quick and nimble\nI go crazy when I hear a cymbal";
var cipherString = XorTool.repeatingKeyXor(plainString, "ICE");

console.log(cipherString);
