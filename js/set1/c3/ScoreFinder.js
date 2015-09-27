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

    function scoreText(string){
        var score = 0;
        var freq = {};
        var MAX_ERROR = 1000;

        // Count occurences of each character
        for(var i=0;i<string.length;i++){
            if(!freq.hasOwnProperty(string[i])){
                freq[string[i]] = 0;
            }
            freq[string[i]]++;
        }
        freq["total"] = string.length;


        // Compute error for each frequency
        var totalError = 0;
        for(var property in freq){
            if(freq.hasOwnProperty(property)){
                //console.log("Computing: " + freq[property] + " / " + freq["total"]);
                if(property != "total"){
                    var freqInt = Math.round(freq[property] / freq["total"] * 1000);
                    if(letterFrequency.hasOwnProperty(property)){
                        var error = Math.abs(letterFrequency[property] - freqInt);
                    } else {
                        var error = freqInt;
                    }
                    totalError += error;
                //console.log("Property: " + property);
                //console.log("Freq: " + freqInt);
                //console.log("Error: " + error);
                //console.log("\n");
                }
            }
        }

        return MAX_ERROR - totalError;
    }

    function findBestScore(strings){
        var highest = 0;
        var best = "";
        for(var i=0;i<strings.length;i++){
            var string = strings[i];
            var score = scoreText(string);
            if(score > highest){
                highest = score;
                best = string;
            }
            //console.log(string + " = " + score);
        }
        return [best, highest];
    }

    return {
        scoreText: scoreText,
        findBestScore: findBestScore
    };

})();
