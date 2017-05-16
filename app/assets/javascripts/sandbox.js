
$(function(){
  console.log("sandbox");
  $("#toggle-frosty").click(function(){
    console.log("clicked")
    if($(".frosty").is(":visible")){
      $(".frosty").hide()
    } else {
      $(".frosty").show()
    }
  })  
})