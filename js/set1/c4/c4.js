var XorDecipher = require('../c3/XorDecipher.js');
var fs = require('fs');


var resultsArray = [];
fs.readFileSync('./input').toString().split('\n').forEach(function(line){
    var results = XorDecipher.decipherString(line);
    resultsArray.push(results);

    console.log("Text: " + results[0]);
    console.log("Score: " + results[1]);
});
