var Hamming = require('./Hamming.js');
var Converter = require('../c1/Converter.js');
var XorDecipher = require('../c3/XorDecipher.js');

module.exports = (function(){

    var KEY_MIN=2;
    var KEY_MAX=40;
    var BLOCK_AVG_COUNT=2;

    function breakRepeatingKeyXor(base64String){


        var base16String = Converter.convertBase64To16(base64String);

        // Maximum number of normalized bits the error could be
        var smallest = 4;
        var suspectedKeySize = 0;

        for(var i=KEY_MIN;i<=KEY_MAX;i++){
            var normalizedHammingAvg = 0;
            for(var j=0;j<BLOCK_AVG_COUNT;j++){{
            var sub1 = base16String.substring(0, i);
            var sub2 = base16String.substring(i, 2*i);
            var sub3 = base16String.substring(2*i, 3*i);
            var sub4 = base16String.substring(3*i, 4*i);

            var normalizedHammingDist1 = Hamming.computeHammingDistance(sub1, sub2) / i;
            var normalizedHammingDist2 = Hamming.computeHammingDistance(sub3, sub4) / i;

            var avg = (normalizedHammingDist1 + normalizedHammingDist2) / 2;
            console.log(avg);
            if(avg < smallest){
                smallest = avg;
                suspectedKeySize = i;
            }

        }

        console.log("Base 16 string: " + base16String);

        var textArray = subdivideText(base16String);
        //console.log(textArray);
        var textArray = transposeArray(textArray);
        //console.log(textArray);


        console.log("Suspected key size = " + suspectedKeySize);

        // Solve
        var resultsArray = [];
        for(var i=0;i<textArray.length;i++){
            //console.log("Solving: " + textArray[i]);
            results = XorDecipher.decipherString(textArray[i], "histogram");
            //console.log("Result = " + results[0]);
            //console.log("Score=  " + results[1]);
            resultsArray.push(results);
        }

        console.log(resultsArray);
    }

    function subdivideText(base16String){
        var array = [];

        var substring = "";
        for(var i=0;i<base16String.length;i++){
            substring += base16String[i];

            if((i+1) % 4 == 0){
                array.push(substring);
                substring = ""; 
            }
        }

        return array;
    }

    function transposeArray(textArray){
        var array = [];

        //krb - check to make sure length of each element is the same
        for(var i=0;i<textArray.length;i++){
            for(var j=0;j<textArray[0].length;j++){
                if(!array[j]){
                    array[j] = "";
                }
                array[j] += textArray[i][j];
            }
        }

        return array;
    }

    return {
        breakRepeatingKeyXor:breakRepeatingKeyXor
    };

})();
