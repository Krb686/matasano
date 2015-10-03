var ScoreFinder = require('./ScoreFinder.js');
var Converter = require('./Converter.js');

module.exports = (function(){

    
    function decipherString(string, model){
        var asciiString = Converter.convertHexToAscii(string);

        var testArray = [];

        // Loop through 256 character possibilities
        for(var i=0;i<256;i++){
            c = String.fromCharCode(i);
            testString = Array(asciiString).join(c);

            var output = ""

            // Loop through each character in the input string
            for(var j=0;j<asciiString.length;j++){
                var numeric_result = asciiString[j].charCodeAt(0)^c.charCodeAt(0);
                plain_char = String.fromCharCode(numeric_result);
                output += plain_char;
            }
            testArray.push(output);
        }

        var results = ScoreFinder.findBestScore(testArray, model);
        return results;

    }

    return {
        decipherString:decipherString
    };


})();
