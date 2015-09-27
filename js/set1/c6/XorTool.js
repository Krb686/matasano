var Hamming = require('./Hamming.js');

module.exports = (function(){

    var KEY_MIN=2;
    var KEY_MAX=40;

    function breakRepeatingKeyXor(string){
        for(var i=KEY_MIN;i<=KEY_MAX;i++){
            var sub1 = string.substring(0, i);
            var sub2 = string.substring(i, 2*i);
            var normalizedHammingDist = Hamming.computeHammingDistance(sub1, sub2) / i;

            console.log("Key size = " + i);
            console.log("Dist = " + normalizedHammingDist + "\n");

        }
    } 

    return {
        breakRepeatingKeyXor:breakRepeatingKeyXor
    };

})();
