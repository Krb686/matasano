// Matasano challenge #2

var charSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var Utility1 = require("../c1/c1.js");
var Utility2 = require("../c2/c2.js");

var string = "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736";

var letterFreq = "zxqjkvbpygfwmucldrhsnioate";


ascii_string = convertHexToAscii(string);

var highest_score =0;
var winner = "";

var test_cases = {};
// Loop through each test case
for(var i=0;i<256;i++){
  c = String.fromCharCode(i);
  testString = Array(ascii_string.length + 1).join(c);

  var output = ""
  var score = 0;

  if(!test_cases.hasOwnProperty(c)){
    test_cases[c] = {};
  }
  var char_freq = {};

  // Loop through each character in the input string
  for(var j=0;j<ascii_string.length;j++){
    var numeric_result = ascii_string[j].charCodeAt(0)^c.charCodeAt(0);
    plain_char = String.fromCharCode(numeric_result);
    if(!char_freq.hasOwnProperty(plain_char)){
      char_freq[plain_char] = 0;
    }
    char_freq[plain_char]++;
    score += letterFreq.indexOf(plain_char.toLowerCase());
    output += plain_char;
  }

  char_freq["total"] = ascii_string.length;
  test_cases[c] = char_freq;
  console.log(output);
  console.log(char_freq);
  console.log("\n");
  //console.log(score);
  //console.log("\n");
  if(score > highest_score){
    highest_score = score;
    winner = output;
  }
}
console.log(winner);


function convertHexToAscii(string){
  var output = "";
  for(var i=0;i<string.length;i+=2){
    hexChar = string.substring(i, i+2);
    ascii = String.fromCharCode(parseInt(hexChar, 16));
    output += ascii;
  }

  return output
}

function convertAsciiToHex(inputString){
  var output = "";
  for(var i=0;i<inputString.length;i++){
    hex = inputString[i].charCodeAt(0).toString(16);
    output += hex;
  }

  return output;
}
