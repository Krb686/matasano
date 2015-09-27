var Tool = require('./Tool.js');

var plainString = "Burning 'em, if you ain't quick and nimble\nI go crazy when I hear a cymbal";

var cipherString = Tool.repeatingKeyXor(plainString, "ICE");

console.log(cipherString);
