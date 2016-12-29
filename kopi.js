//make the object

function makeKopi(){
  this.kopi = 0;
  this.sugar = 1;
  this.evaporatedMilk = true;
  this.condensedMilk = false;
  this.ice = false;
  this.cost = 1.5;
}

var keywords = {
  kopi: ["kopi",1],
  o: ["evaporatedMilk",false],
  kosong: ["evaporatedMilk",false,"sugar",0],
  bing: ["ice",true],
  c: ["condensedMilk",true,"evaporatedMilk",false],
}

function processing(order){
  var orderArray = order.split(" ");
  var kopiOrder = new makeKopi();

  for(var i=0; i<orderArray.length; i++){
    var word = orderArray[i];
    var array = keywords[word];

    for(var j=0;j<array.length;j+=2){
      kopiOrder[array[j]] = array[(j+1)];
    }

  }

  console.log("kopiOrder", kopiOrder);

  return kopiOrder;
}

processing("kopi o kosong");

processing("kopi o bing");
