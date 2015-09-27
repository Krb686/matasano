var Hamming = require('./Hamming.js');
var Converter = require('../c3/Converter.js');

module.exports = (function(){

    var KEY_MIN=2;
    var KEY_MAX=40;

    function breakRepeatingKeyXor(base64String){


        var base16String = Converter.convertBase64To16(base64String);

        for(var i=KEY_MIN;i<=KEY_MAX;i++){
            var sub1 = base16String.substring(0, i);
            var sub2 = base16String.substring(i, 2*i);
            var sub3 = base16String.substring(2*i, 3*i);
            var sub4 = base16String.substring(3*i, 4*i);

            console.log("Sub1: " + sub1);
            console.log("Sub2: " + sub2);
            var normalizedHammingDist1 = Hamming.computeHammingDistance(sub1, sub2) / i;
            var normalizedHammingDist2 = Hamming.computeHammingDistance(sub3, sub4) / i;

            var avg = (normalizedHammingDist1 + normalizedHammingDist2) / 2;
            console.log("Key size = " + i);
            console.log("Dist = " + avg);

        }
    } 

    return {
        breakRepeatingKeyXor:breakRepeatingKeyXor
    };

})();
