// Matasano challenge #3


module.exports = (function(){

    // English language letter frequency * 100
    // See http://www.macfreek.nl/memory/Letter_Distribution
    var letterFrequency = {
        " ":183,
        "a":65,
        "b":13,
        "c":22,
        "d":33,
        "e":104,
        "f":20,
        "g":16,
        "h":50,
        "i":57,
        "j":1,
        "k":6,
        "l":33,
        "m":20,
        "n":57,
        "o":62,
        "p":15,
        "q":0,
        "r":50,
        "s":53,
        "t":76,
        "u":23,
        "v":8,
        "w":17,
        "x":1,
        "y":14,
        "z":1
    };

    return {
        scoreText: function(string){
            var score = 0;
            var freq = {};

            // Count occurences of each character
            for(var i=0;i<string.length;i++){
                if(!freq.hasOwnProperty(string[i])){
                    freq[string[i]] = 0;
                }
                freq[string[i]]++;
            }
            freq["total"] = string.length;


            // Compute error for each frequency
            for(var property in freq){
                if(freq.hasOwnProperty(property)){
                    console.log("Computing: " + freq[property] + " / " + freq["total"]);
                    var freqInt = Math.round(freq[property] / freq["total"] * 100);
                    console.log(freqInt);
                }
            }



            return score;

        },

        findBestScore: function(strings){
            return 0;
        }
    }

})();

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
  //console.log(output);
  //console.log(char_freq);
  //console.log("\n");
  //console.log(score);
  //console.log("\n");
  if(score > highest_score){
    highest_score = score;
    winner = output;
  }
}
//console.log(winner);
console.log(module.exports);
module.exports.scoreText(ascii_string);


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
