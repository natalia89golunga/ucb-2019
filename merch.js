$(document).ready(function() {

  $("#show-all-button").click(function() {
    $(".card").removeClass("hidden");

    $(".filter-container .btn").removeClass("active");
    $("#show-all-button").addClass("active");
  });

  $("#hoodies-button").click(function() {
    $(".card").addClass("hidden");
    $(".hoodie").removeClass("hidden");

    $(".filter-container .btn").removeClass("active");
    $("#hoodies-button").addClass("active");
  });

  $("#t-shirts-button").click(function() {
    $(".card").addClass("hidden");
    $(".t-shirt").removeClass("hidden");

    $(".filter-container .btn").removeClass("active");
    $("#t-shirts-button").addClass("active");

  });

  $("#hats-button").click(function() {
    $(".card").addClass("hidden");
    $(".hat").removeClass("hidden");

    $(".filter-container .btn").removeClass("active");
    $("#hats-button").addClass("active");
  });


  $("#shorts-button").click(function() {
    $(".card").addClass("hidden");
    $(".shorts").removeClass("hidden");

    $(".filter-container .btn").removeClass("active");
    $("#shorts-button").addClass("active");
  });




});
