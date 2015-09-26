var XorDecipher = require('./XorDecipher.js');

var string = "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736";

var results = XorDecipher.decipherString(string);
console.log("best = " + results[0]);
console.log("score = " + results[1]);
