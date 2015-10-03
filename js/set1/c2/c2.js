var XorTool = require("./XorTool.js");
var s1 = "1c0111001f010100061a024b53535009181c";
var s2 = "686974207468652062756c6c277320657965";
var output = XorTool.xorStrings(s1, s2);
console.log(output);
