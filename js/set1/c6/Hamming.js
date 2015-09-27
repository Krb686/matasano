module.exports = (function(){

    function computeHammingDistance(string1, string2){

        var bString1 = "";
        var bString2 = "";
        for(var i=0;i<string1.length;i++){
            var binary1 = string1[i].charCodeAt(0).toString(2);
            binary1 = Array(8 - binary1.length).join('0') + binary1;
            bString1 += binary1;

            var binary2 = string2[i].charCodeAt(0).toString(2);
            binary2 = Array(8 - binary2.length).join('0') + binary2;
            bString2 += binary2;
        }

        var diff = 0;
        for(var i=0;i<bString1.length;i++){
            if(bString1[i] != bString2[i]){
                diff++;
            }
        }

        return diff;
    }


    return {
        computeHammingDistance:computeHammingDistance
    };

})();
