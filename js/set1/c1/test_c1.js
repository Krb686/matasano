var Utility = require("./c1.js");
var base16String = "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d";
var base64String = Utility.convertBase16To64(base16String);
console.log(base64String);
