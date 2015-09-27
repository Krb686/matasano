module.exports = (function(){


    function convertBase16To64(base16String){

        var output = "";

        var BASE_16 =  [ "0","1","2","3","4","5","6","7",
                         "8","9","a","b","c","d","e","f"
                       ];   


        var BASE_64 =  [ "A","B","C","D","E","F","G","H",
                         "I","J","K","L","M","N","O","P",
                         "Q","R","S","T","U","V","W","X",
                         "Y","Z","a","b","c","d","e","f",
                         "g","h","i","j","k","l","m","n",
                         "o","p","q","r","s","t","u","v",
                         "w","x","y","z","0","1","2","3",
                         "4","5","6","7","8","9","+","/"
                       ];

        // Add padding 0's if necessary to keep length a multiple of 3
        if(base16String.length % 3 != 0){
            base16String = Array((base16String.length % 3)+1).join("0") + base16String;
        }

        // Loop through input string 
        for(var i=0;i<base16String.length;i+=3){
            subString = base16String.substring(i,i+3);

            index1_16 = BASE_16.indexOf(subString[0]);
            index2_16 = BASE_16.indexOf(subString[1]);
            index3_16 = BASE_16.indexOf(subString[2]);

            index1_64 = (index1_16*4) + Math.floor(index2_16 / 4);
            index2_64 = ((index2_16 % 4)*16) + index3_16;

            output += BASE_64[index1_64] + BASE_64[index2_64];
        }

        return output;
    }

    function convertBase64To16(base64String){



    }

    return {
        convertBase16To64:convertBase16To64,
        convertBase64To16:convertBase64To16
    };


})();
