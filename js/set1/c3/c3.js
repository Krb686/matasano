//
var ScoreFinder = require("./ScoreFinder.js");
var Converter = require("./Converter.js");

var charSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var Utility1 = require("../c1/c1.js");
var Utility2 = require("../c2/c2.js");

var string = "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736";

var letterFreq = "zxqjkvbpygfwmucldrhsnioate";


ascii_string = Converter.convertHexToAscii(string);


var testArray = [];
// Loop through each test case
for(var i=0;i<256;i++){
  c = String.fromCharCode(i);
  testString = Array(ascii_string.length + 1).join(c);

  var output = ""

  // Loop through each character in the input string
  for(var j=0;j<ascii_string.length;j++){
    var numeric_result = ascii_string[j].charCodeAt(0)^c.charCodeAt(0);
    plain_char = String.fromCharCode(numeric_result);
    output += plain_char;
  }
  testArray.push(output);

}

var results = ScoreFinder.findBestScore(testArray);
console.log("best = " + results[0]);
console.log("score = " + results[1]);
