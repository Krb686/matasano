module.exports = (function(){


    function repeatingKeyXor(plainString, key){

        var output = "";
        for(var i=0;i<plainString.length;i++){
            var num = plainString[i].charCodeAt(0)^key[(i%key.length)].charCodeAt(0);
            var c = String.fromCharCode(num);
            console.log(c);
            output += c;
        }

        return output;


    }


    return {
        repeatingKeyXor:repeatingKeyXor
    };

})();
