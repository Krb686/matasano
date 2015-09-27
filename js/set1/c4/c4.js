var XorDecipher = require('../c3/XorDecipher.js');
var ScoreFinder = require('../c3/ScoreFinder.js');
var fs = require('fs');


var resultsArray = [];
fs.readFileSync('./input').toString().split('\n').forEach(function(line){
    if(line != ""){
        var results = XorDecipher.decipherString(line);
        resultsArray.push(results[0]);
    }

    //console.log("Text: " + results[0]);
    //console.log("Score: " + results[1]);
});

//console.log(resultsArray);
var bestResult = ScoreFinder.findBestScore(resultsArray);

console.log("Best result string: " + bestResult[0]);
console.log("Best result score: " + bestResult[1]);
