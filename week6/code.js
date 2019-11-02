$(document).ready(function() {

  $("#stay-ignorant").click(function() {
    $("#video").attr("src", "images/stay-ignorant.mp4");
    $("video")[0].load();
    $("video")[0].play();
  });

  $("#priorities").click(function() {
    $("#video").attr("src", "images/priorities.mp4");
    $("video")[0].load();
    $("video")[0].play();
  });

  $("#t-shirt-song").click(function() {
    $("#video").attr("src", "images/t-shirt-song.mp4");
    $("video")[0].load();
    $("video")[0].play();
  });

  $("#you-wanna-know").click(function() {
    $("#video").attr("src", "images/you-wanna-know.mp4");
    $("video")[0].load();
    $("video")[0].play();
  });

});
