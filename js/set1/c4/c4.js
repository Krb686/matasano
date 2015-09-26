var  ScoreFinder = require('../c3/ScoreFinder.js');
var fs = require('fs');


var lineArray = [];
fs.readFileSync('./input').toString().split('\n').forEach(function(line){
  lineArray.push(line);
});

var results = ScoreFinder.findBestScore(lineArray);

console.log(results[0]);
console.log(results[1]);





