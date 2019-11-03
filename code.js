$(document).ready(function() {

  // Media page
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

  // discography page
  $("#album-1").hover(function() {
    $("#album-1-text").addClass("album-name");
  });

  // news page
  var delay = 1400;
  setTimeout(function() {
    $("#news-1").addClass("fadeInRight animated");
  }, 1 * delay);

   setTimeout(function() {
     $("#news-2").addClass("fadeInRight animated");
   }, 2 * delay);

  setTimeout(function() {
    $("#news-3").addClass("fadeInRight animated");
  }, 3 * delay);

   setTimeout(function() {
     $("#news-4").addClass("fadeInRight animated");
   }, 4 * delay);

    setTimeout(function() {
      $("#news-5").addClass("fadeInRight animated");
    }, 5 * delay);

    setTimeout(function() {
      $("#news-6").addClass("fadeInRight animated");
    }, 6 * delay);

    setTimeout(function() {
      $("#news-7").addClass("fadeInRight animated");
    }, 7 * delay);


});
