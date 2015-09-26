module.exports = (function(){

    function convertHexToAscii(string){
        var output = "";
        for(var i=0;i<string.length;i+=2){
            hexChar = string.substring(i, i+2);
            ascii = String.fromCharCode(parseInt(hexChar, 16));
            output += ascii;
         }

         return output;

    }

    function convertAsciiToHex(inputString){
        var output = "";
        for(var i=0;i<inputString.length;i++){
            hex = inputString[i].charCodeAt(0).toString(16);
            output += hex;
        }

        return output;
    }

    return {
        convertHexToAscii:convertHexToAscii,
        convertAsciiToHex:convertAsciiToHex
    }

})();
