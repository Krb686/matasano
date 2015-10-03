module.exports = (function(){
    function xorStrings(s1, s2){

        var output = "";

        if(s1.length != s2.length){
            console.log("Both input strings must be the same length!");
            process.exit();
        }

        for(var i=0;i<s1.length;i++){
            c1 = s1[i];
            c2 = s2[i];

            n1 = parseInt(c1, 16);
            n2 = parseInt(c2, 16);

            output += (n1^n2).toString();

        }

        return output;

    }


    return {
        xorStrings:xorStrings
    };

})();
