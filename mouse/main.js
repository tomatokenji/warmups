$(document).ready(function(){
  console.log("js file ready");


  $(document).mousemove(function(e){
    $('#mouse').animate({
      left: e.pageX,
      top: e.pageY
    },30)
  })



})
