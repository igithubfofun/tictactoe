$(function(){

  var x = 'X';
  var o = 'O';
  var picked;

  $('.box').on('click', function(e) {
    picked = $('.box').val();
    if (picked === "o"){
      $(this).html(x);

    }

    else {
      $(this).html(o);
    }


  })


  // $('.box').on('click', function(e) {
  //   $(this).html(o);
  // })


});
