$(document).ready(function() {

$("#d1").draggable();
$("#d2").draggable({
axis: "y"
});
$("#holder1").droppable ({
  tolerance: "touch",
  drop: function(event,ui) {
    $(this).
    addClass("highlight-completed").
    find("p").html("Dropped!!!!");
  }
})
$("#d3").draggable({
  axis: "x",
  drag: function(event,ui) {
    //moving
    console.log("I am dancing")
  }
});
$("#myimg").click(function() {
  //do something
  $("#myimg").attr("src", "images/2.jpg")
});
})
