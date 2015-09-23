var string = "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d"




function convertHexTo64(hexString){
  var i;

  var output = "";

  for(i=hexString.length-3;i>=0;i-=3){
    subString = hexString.substring(i,i+3);

    index1_16 = BASE_16.indexOf(subString[0]);
    index2_16 = BASE_16.indexOf(subString[1]);
    index3_16 = BASE_16.indexOf(subString[2]);

    index1_64 = (index1_16*4) + Math.floor(index2_16 / 4); 
    index2_64 = ((index2_16 % 4)*16) + index3_16;

    output += BASE_64[index1_64] + BASE_64[index2_64];
  }

  if(i>0){
    console.log("not done");
  }

  return output;

}
BASE_16	=	[	"0","1","2","3","4","5","6","7",
			"8","9","a","b","c","d","e","f"
		];


BASE_64 = 	[	"A","B","C","D","E","F","G","H",
			"I","J","K","L","M","N","O","P",
			"Q","R","S","T","U","V","W","X",
			"Y","Z","a","b","c","d","e","f",
			"g","h","i","j","k","l","m","n",
			"o","p","q","r","s","t","u","v",
			"w","x","y","z","0","1","2","3",
			"4","5","6","7","8","9","+","/"
		];


newString = convertHexTo64(string);
console.log(newString);

