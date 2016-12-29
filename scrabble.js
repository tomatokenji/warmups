
var scrabble = function(lettersAvailable, wordToForm){
  var modifiedStr = lettersAvailable;
  var noOfBlanks = 0;

  for(var i=0; i<wordToForm.length; i++){
    for (var j=0; j<modifiedStr.length; j++){
      if(wordToForm.charAt(i) === modifiedStr.charAt(j)){
        var str1 = modifiedStr.substring(0,j);
        var str2 = modifiedStr.substr(j+1, modifiedStr.length);
        modifiedStr = str1 + str2;
      }
    }

  }

  var lettersUsed = lettersAvailable.length - modifiedStr.length;

  for(var k=0; k<modifiedStr.length; k++){
    if(modifiedStr.charAt(k) === '?'){
      noOfBlanks++;
    }
  }



  if(wordToForm.length === lettersUsed){
    console.log("true");
    return true;
  }if(wordToForm.length <= (lettersUsed+noOfBlanks)){
    console.log("true");
    return true;
  }
  console.log("false");
  return false;
}


scrabble("ladilmy", "daily")
scrabble("eerriin", "eerie")
scrabble("orrpgma", "program")
scrabble("orppgma", "program")

// test for blanks
console.log("Test for blanks");

scrabble("pizza??", "pizzazz")
scrabble("piizza?", "pizzazz")
scrabble("a??????", "program")
scrabble("b??????", "program")


//new function - longest

var longest = function(someStr){

}
