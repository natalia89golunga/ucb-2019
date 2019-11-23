$(function(){
  $("#slider1").slider()
  $("#datepicker1").datepicker()
  var searchDBString = [
    "San Francisco",
    "Santa Cruz",
    "San Mateo",
    "Redwood City",
    "Santa Clara",
  ]
  $("#autocomplete-1").autocomplete({
 source: searchDBString,
});
$("#acc1").accordion({
collapsible: true
});
})
