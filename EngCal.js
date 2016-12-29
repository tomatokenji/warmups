var engCal = function(stringInput){
  var stringArray = stringInput.split(" ");
  var numbers = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
  var operations = {
    times: '*',
    plus: '+',
    minus: '-',

  }

  var stringToCalculate = "";


  for (var i=0;i<stringArray.length; i++){
    var index = numbers.indexOf(stringArray[i]);
    if(index === -1){
      stringToCalculate += operations[stringArray[i]];
    }else{
      stringToCalculate += index;
    }

  }

  var resultInt = eval(stringToCalculate);
  console.log(stringToCalculate);
  console.log(resultInt);
  var stringOutput = stringInput + " is " + numbers[resultInt];

  console.log(stringOutput);
}


engCal("three plus two");
