var ScoreFinder = require('./ScoreFinder.js');

module.exports = (function(){

    
    function decipherString(string){

        var textLength = string.length / 2;

        // Loop through 256 character possibilities
        for(var i=0;i<256;i++){
            c = String.fromCharCode(i);
            testString = Array(textLength).join(c);

            var output = ""

            // Loop through each character in the input string
            for(var j=0;j<textLength;j++){
                var numeric_result = ascii_string[j].charCodeAt(0)^c.charCodeAt(0);
                plain_char = String.fromCharCode(numeric_result);
                output += plain_char;
            }
        testArray.push(output);
       }
    }

}



    }

    return {
        decipherString:decipherString
    };


});
