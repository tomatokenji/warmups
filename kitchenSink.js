function kitchenSink(variable){
  var type = typeof variable;
  switch(type){
    case "string":
      console.log(variable);
      return variable;
    case "number":
      var result = variable * variable;
      console.log(result);
      return result;
    case "boolean":
      if(variable){
        console.log("yes");
        return "yes";
      }else{
        console.log("no");
        return "no";
      }
    case "function":
      return variable();
    case "undefined":
      console.log("BADDDD");
      return "BADDDD";
    case "object":
      if(Array.isArray(variable)){
        //part 2
        // for(var i=0; i<variable.length; i++){
        //   console.log(variable[i]);
        //part 3
        for(var i=0; i<variable.length;i++){
          kitchenSink(variable[i]);
        }
        return variable;
      }
      if(variable===null){
        console.log(variable);
        return variable;
      }

      var x;
      for(x in variable){
        console.log(variable[x]);
      }
      return variable;
  }

}



//testers
kitchenSink("hello");
kitchenSink(1234);
kitchenSink(true);
kitchenSink(function(){console.log("i am function")});
kitchenSink(undefined);
kitchenSink(null);
kitchenSink([1,2,3,4]);
kitchenSink({"greeting": "hello", "name": "agnes", "favFood": "pizza"});
