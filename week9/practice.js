$( document ).ready(function(){
  var $btns = $('.btn').click(function(){
    if(this.id == 'all') {
      $('#basket > div').show();
    } else {
      // el holds the id of the button that
      // was clicked

      //show everything with clicked class
      var $el = $('.' + this.id).show();
      // hide everything with clicked class
      $('#basket > div').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
  })
})
