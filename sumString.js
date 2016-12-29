var sumString = function(inputString){
  var totalSum = 0;

  //to change number to string if needed
  var input = "";
  input += inputString;

  //to add numbers up
  for(var i=0; i < input.length; i++){
    console.log(input[i]);
    if(input[i]==="-"){
      totalSum += Number(input[i]+input[i+1]);
      i++;
    }else{
      totalSum += Number(input[i]);
    }
  }
  console.log(totalSum);
}



sumString("-1-234");
