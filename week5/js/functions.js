$( document ).ready(function() {

 //please ad some code here
 alert("Hello friend!!")
document.getElementById('demo').innerHTML
= "This is the new text";

$("h2").click(function() {
$(this).removeClass("highlight")
})
$("h1").click(function() {
$(this).taggleClass("highlight")
  //$(this).addClass("highlight")
})
$("#al-dismiss").click(function(){
$('#myalert').hide();

})
});
