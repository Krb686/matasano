var Converter = require("./Converter.js");
var base16String = "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d";
console.log("Base 16 = " + base16String);
var base64String = Converter.convertBase16To64(base16String);
console.log("Base 64 = " + base64String);
